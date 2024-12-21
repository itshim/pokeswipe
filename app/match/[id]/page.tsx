import { TPageProps } from "@/app/interfaces/Global";
import { getPokemon } from "@/app/services/getRandomPokemon";
import Card from "@/app/ui/Card";
import SwipeableCard from "@/app/ui/Swipeable";

export default async function Match({ params }: TPageProps) {
  const { id } = params;
  const user = await getPokemon(parseInt(id));
  return (
    <SwipeableCard params={params}>
      {(handleSwiper) => <Card user={user} handleSwiper={handleSwiper} />}
    </SwipeableCard>
  );
}
