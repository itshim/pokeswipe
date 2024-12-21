import SwipeableCard from "./ui/Swipeable";
import getRandomPokemon from "./services/getRandomPokemon";
import WelcomeCard from "./ui/WelcomeCard";
import { PageProps } from "@/.next/types/app/layout";

export default async function Home({ params }: PageProps) {
  const user = await getRandomPokemon();
  const id = await params;
  if (!user) return;
  return (
    <div>
      <SwipeableCard params={{ id }}>{() => <WelcomeCard />}</SwipeableCard>
    </div>
  );
}
