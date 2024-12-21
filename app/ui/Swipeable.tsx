import { redirect } from "next/navigation";
import { getRandomId } from "../services/getRandomPokemon";
import { TPageProps } from "../interfaces/Global";
import updateLike from "../services/updateLike";

export type TSwipeFn = (direction: "left" | "right") => Promise<void>;

export interface TSwipeableProps extends TPageProps {
  children: (data: TSwipeFn) => React.ReactNode;
}

const SwipeableCard = ({ children, params }: TSwipeableProps) => {
  const { id } = params;
  const handleSwipe = async (direction: "left" | "right") => {
    "use server";
    if (direction === "left") {
      // move to next card
      updateLike(id.toString(), "dislike");
    } else {
      // move to next card (for right swipe as well)
      updateLike(id.toString(), "like");
    }
    const pathId = await getRandomId();
    redirect(`/match/${pathId}`);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-screen h-screen md:w-auto md:h-auto">
        <div className="absolute">{children(handleSwipe)}</div>
      </div>
    </div>
  );
};

export default SwipeableCard;
