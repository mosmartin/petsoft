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
  handleChangeSelectedPetId: (id: string) => void;
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

  const selectedPet = useMemo(
    () => pets.find((pet) => pet.id === selectedPetId),
    [pets, selectedPetId]
  );

  const value = useMemo(
    () => ({
      pets,
      selectedPetId,
      selectedPet,
      handleChangeSelectedPetId,
    }),
    [pets, selectedPetId, selectedPet, handleChangeSelectedPetId]
  );

  return <PetContext.Provider value={value}>{children}</PetContext.Provider>;
}
