"use client";

import { Restaurant } from "@prisma/client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface RestaurantHeaderProps {
  restaurant: Pick<Restaurant, "coverImageUrl" | "name">;
}

const RestaurantHeader = ({ restaurant }: RestaurantHeaderProps) => {
  const router = useRouter();
  return (
    <div className="relative h-[250px] w-full">
      <Button
        variant="secondary"
        size="icon"
        className="absolute left-4 top-4 z-50 rounded-full"
        onClick={() => router.back()}
      >
        <ChevronLeftIcon />
      </Button>
      <Image
        src={restaurant.coverImageUrl}
        alt={restaurant.name}
        fill
        className="object-cover"
      />
      <Button
        variant="secondary"
        size="icon"
        className="absolute right-4 top-4 z-50 rounded-full"
        onClick={() => router.forward()}
      >
        <ScrollTextIcon />
      </Button>
    </div>
  );
};

export default RestaurantHeader;
