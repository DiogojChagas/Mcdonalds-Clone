import { db } from "@/lib/prisma";
import RestaurantHeader from "./components/header";

interface RestaurantMenuPageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    consumptionMethod: string;
  }>;
}

const isConsumptionMethodValid = (consumptionMethod: string) => {
  return ["DINE_IN", "TAKEAWAY"].includes(consumptionMethod.toUpperCase());
};

const RestaurantMenuPage = async ({
  params,
  searchParams,
}: RestaurantMenuPageProps) => {
  const { slug } = await params;
  const restaurant = await db.restaurant.findUnique({ where: { slug } });
  if (!restaurant) {
    return <h1>Restaurant not found</h1>;
  }
  const { consumptionMethod } = await searchParams;
  if (!isConsumptionMethodValid(consumptionMethod)) {
    return <h1>Invalid consumption method</h1>;
  }
  return (
    <div>
      <RestaurantHeader restaurant={restaurant} />
    </div>
  );
};

export default RestaurantMenuPage;
// http://localhost:3000/fsw-donalds/menu?consumptionMethod=DINE_IN
