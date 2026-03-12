// import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";

import { db } from "@/lib/prisma";
import Image from "next/image";
import ConsumptionMethodOptions from "./components/consumption-method-options";

interface RestaurantePageProps {
  params: Promise<{
    slug: string;
  }>;
}

const RestaurantePage = async ({ params }: RestaurantePageProps) => {
  const { slug } = await params;
  const restaurant = await db.restaurant.findUnique({ where: { slug } });
  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }
  return (
    <div className="flex h-screen flex-col items-center justify-center px-6 pt-24">
      <div className="flex flex-col items-center gap-2">
        <Image
          src={restaurant?.avatarImageUrl || ""}
          width={82}
          height={82}
          alt={restaurant?.name || "Restaurant image"}
        />
        <h2 className="font-semibold">{restaurant?.name}</h2>
        <div className="space-y-2 pt-24 text-center">
          <h3 className="text-2xl font-semibold">Seja Bem-Vindo!</h3>
          <p className="opacity-55">
            Escolha como prefere sua refeição. Estamos prontos para atendê-lo!
            para oferecer praticidade e sabor em detalhe!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 pt-8">
        <ConsumptionMethodOptions
          slug={slug}
          option="DINE_IN"
          imageUrl="/dine_in.png"
          imageAlt="Comer no local"
          buttonText="Comer no local"
        />
        <ConsumptionMethodOptions
          slug={slug}
          option="TAKEAWAY"
          imageUrl="/take_away.png"
          imageAlt="Take Away"
          buttonText="Take Away"
        />
      </div>
    </div>
  );
};

export default RestaurantePage;
