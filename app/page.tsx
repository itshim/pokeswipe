import SwipeableCard from "./ui/Swipeable";
import getRandomPokemon from "./services/getRandomPokemon";
import WelcomeCard from "./ui/WelcomeCard";
import { TPageProps } from "./interfaces/Global";

export default async function Home({ params }: TPageProps) {
  const user = await getRandomPokemon();
  if (!user) return;
  return (
    <div>
      <SwipeableCard params={params}>{() => <WelcomeCard />}</SwipeableCard>
    </div>
  );
}
