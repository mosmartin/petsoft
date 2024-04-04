"use client";

import { Pet } from "@/lib/types";
import { createContext, useCallback, useMemo, useState } from "react";

type PetContextProviderProps = {
  data: Pet[];
  children: React.ReactNode;
};

type TPetContext = {
  pets: Pet[];
  selectedPetId: string | null;
  selectedPet: Pet | undefined;
  numPets: number | undefined;
  handleChangeSelectedPetId: (id: string) => void;
  handleDeletePet: (id: string) => void;
};

export const PetContext = createContext<TPetContext | null>(null);

export default function PetContextProvider({
  data,
  children,
}: Readonly<PetContextProviderProps>) {
  const [pets, setPets] = useState(data);
  const [selectedPetId, setSelectedPetId] = useState<string | null>(null);

  const handleChangeSelectedPetId = useCallback((id: string) => {
    setSelectedPetId(id);
  }, []);

  const handleDeletePet = useCallback((id: string) => {
    setPets((prevPets) => prevPets.filter((pet) => pet.id !== id));

    setSelectedPetId(null);
  }, []);

  const selectedPet = useMemo(
    () => pets.find((pet) => pet.id === selectedPetId),
    [pets, selectedPetId]
  );

  const numPets = useMemo(() => pets.length, [pets]);

  const value = useMemo(
    () => ({
      pets,
      selectedPetId,
      selectedPet,
      numPets,
      handleChangeSelectedPetId,
      handleDeletePet,
    }),
    [
      pets,
      selectedPetId,
      selectedPet,
      numPets,
      handleChangeSelectedPetId,
      handleDeletePet,
    ]
  );

  return <PetContext.Provider value={value}>{children}</PetContext.Provider>;
}
