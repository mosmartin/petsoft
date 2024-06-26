"use client";

import { Cross1Icon, Pencil1Icon, PlusIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import PetForm from "./pet-form";
import { useState } from "react";

type ActionButtonProps = {
  actionType: "add" | "edit" | "delete";
  onClick?: () => void;
};

export default function ActionButton({
  actionType,
  onClick,
}: Readonly<ActionButtonProps>) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  if (actionType === "delete") {
    return (
      <Button variant="destructive" onClick={onClick}>
        <Cross1Icon className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
      <DialogTrigger asChild>
        {actionType === "add" ? (
          <Button size="icon">
            <PlusIcon className="h-6 w-6" />
          </Button>
        ) : (
          <Button variant="secondary">
            <Pencil1Icon className="h-6 w-6" />
          </Button>
        )}
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {actionType === "add" ? "Add a new pet" : "Edit pet"}
          </DialogTitle>
        </DialogHeader>

        <PetForm
          actionType={actionType}
          onFormSubmission={() => {
            setIsFormOpen(false);
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
