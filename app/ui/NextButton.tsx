"use client";

import { useRouter } from "next/navigation";

export default function NextButton({ id }: { id: number }): React.ReactElement {
  const router = useRouter();
  async function onStart() {
    router.push(`/match/${id}`);
  }
  return (
    <button
      className="py-2 px-4 bg-blue-500 w-96 text-white font-semibold rounded-lg hover:bg-blue-600 transition absolute bottom-5"
      onClick={onStart}
    >
      Lets Go
    </button>
  );
}
