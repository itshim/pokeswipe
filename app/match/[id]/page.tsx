import { PageProps } from "@/.next/types/app/page";
import { getPokemon } from "@/app/services/getRandomPokemon";
import Card from "@/app/ui/Card";
import SwipeableCard from "@/app/ui/Swipeable";

export default async function Match({ params }: PageProps) {
  const { id } = await params;
  const user = await getPokemon(parseInt(id));
  return (
    <SwipeableCard params={{ id }}>
      {(handleSwiper) => <Card user={user} handleSwiper={handleSwiper} />}
    </SwipeableCard>
  );
}
