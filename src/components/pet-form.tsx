"use client";

import { usePetContext } from "@/lib/hooks";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

type PetFormProps = {
  actionType: "add" | "edit";
  onFormSubmission: () => void;
};

export default function PetForm({
  actionType,
  onFormSubmission,
}: Readonly<PetFormProps>) {
  const { handleAddPet } = usePetContext();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const pet = {
      name: formData.get("name") as string,
      ownerName: formData.get("owner") as string,
      imageUrl:
        (formData.get("imageUrl") as string) ??
        "https://bytegrad.com/course-assets/react-nextjs/pet-placeholder.png",
      age: parseInt(formData.get("age") as string),
      notes: formData.get("notes") as string,
    };

    handleAddPet(pet);

    onFormSubmission();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full h-full">
      <div className="space-y-3">
        <div className="space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            name="name"
            placeholder="Enter pet name"
            required
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="owner">Owner</Label>
          <Input
            id="owner"
            type="text"
            name="owner"
            placeholder="Enter owner name"
            required
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="imageUrl">Image URL</Label>
          <Input
            id="imageUrl"
            type="text"
            name="imageUrl"
            placeholder="Enter image URL"
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="age">Age</Label>
          <Input
            id="age"
            type="number"
            name="age"
            placeholder="Enter pet age"
            required
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="notes">Notes</Label>
          <Textarea
            id="notes"
            name="rows"
            rows={3}
            placeholder="Enter notes"
            required
          />
        </div>
      </div>

      <div className="mt-5 self-end">
        <Button type="submit">
          {actionType === "add" ? "Add Pet" : "Save Changes"}
        </Button>
      </div>
    </form>
  );
}
