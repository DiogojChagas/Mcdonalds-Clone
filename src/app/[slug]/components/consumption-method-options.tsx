import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ConsumptionMethod } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface ConsumptionMethodOptionsProps {
  slug?: string;
  imageUrl: string;
  imageAlt: string;
  buttonText: string;
  option: ConsumptionMethod;
}

const ConsumptionMethodOptions = ({
  slug,
  imageUrl,
  imageAlt,
  buttonText,
  option,
}: ConsumptionMethodOptionsProps) => {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-8 py-8">
        <Image src={imageUrl} width={78} height={80} alt={imageAlt}></Image>
        <Button variant="secondary" className="rounded-full" asChild>
          <Link href={`/${slug}/menu?consumptionMethod=${option}`}>
            {buttonText}
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ConsumptionMethodOptions;
