"use client";

import { usePetContext } from "@/lib/hooks";
import { Pet } from "@/lib/types";
import Image from "next/image";

type PetProps = {
  pet: Pet;
};

export default function PetDetails() {
  const { selectedPet } = usePetContext();
  return (
    <section className="flex flex-col w-full h-full">
      {!selectedPet ? (
        <EmptyView />
      ) : (
        <>
          <TopBar pet={selectedPet} />

          <PetInfo pet={selectedPet} />

          <PetNotes pet={selectedPet} />
        </>
      )}
    </section>
  );
}

function TopBar({ pet }: Readonly<PetProps>) {
  return (
    <div className="flex items-center bg-white px-8 py-5 border-b border-black/[0.08]">
      <Image
        src={pet?.imageUrl ?? ""}
        alt="selected pet image"
        width={75}
        height={75}
        className="w-[75px] h-[75px] rounded-full object-cover"
      />

      <h2 className="text-3xl font-semibold leading-7 ml-5">{pet?.name}</h2>
    </div>
  );
}

function PetInfo({ pet }: Readonly<PetProps>) {
  return (
    <div className="flex justify-around text-center py-10 px-5">
      <div>
        <h3 className="text-[13px] font-medium uppercase text-zinc-700">
          Owner Name
        </h3>
        <p className="mt-1 text-lg text-zinc-800">{pet?.ownerName}</p>
      </div>

      <div>
        <h3 className="text-[13px] font-medium uppercase text-zinc-700">Age</h3>
        <p className="mt-1 text-lg text-zinc-800">{pet?.age}</p>
      </div>
    </div>
  );
}

function PetNotes({ pet }: Readonly<PetProps>) {
  return (
    <section className="flex-1 bg-white px-7 py-5 rounded-md mb-9 mx-8 border border-black-[0.08]">
      {pet?.notes}
    </section>
  );
}

function EmptyView() {
  return (
    <div className="flex items-center justify-center h-full">
      <p className="text-lg text-gray-500">No pet selected</p>
    </div>
  );
}