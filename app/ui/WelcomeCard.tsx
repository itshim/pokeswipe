import { redirect } from "next/navigation";
import { getRandomId } from "../services/getRandomPokemon";

export default async function WelcomeCard() {
  const id = await getRandomId();
  async function onStart() {
    redirect(`/match/${id}`);
  }

  return (
    <div
      className={`relative 
    w-screen h-screen md:w-72 md:h-96 bg-gray-500
    md:rounded-xl shadow-lg bg-blur-lg bg-no-repeat bg-center 
    pt-24
    px-4
    overflow-hidden
    bg-cover
    `}
      style={{ backgroundImage: "url(pokemon.jpg)" }}
    >
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        PokeSwipe - Lets start swiping
      </h1>
      <p className="text-gray-600 mb-6">Pokemon appear one at a time</p>
      <p className="text-gray-600 mb-6">
        Choose &quot;Like&quot; or &quot;Dislike&quot; and start building your
        own team
      </p>
      <button
        className="py-2 px-4 bg-blue-500 w-96 text-white font-semibold rounded-lg hover:bg-blue-600 transition absolute bottom-5"
        onClick={onStart}
      >
        Lets Go
      </button>
    </div>
  );
}
