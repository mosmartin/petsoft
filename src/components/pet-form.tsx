import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

type PetFormProps = {
  actionType: "add" | "edit";
};

export default function PetForm({ actionType }: Readonly<PetFormProps>) {
  return (
    <form className="flex flex-col w-full h-full">
      <div className="space-y-3">
        <div className="space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" placeholder="Enter pet name" />
        </div>

        <div className="space-y-1">
          <Label htmlFor="owner">Owner</Label>
          <Input id="owner" type="text" placeholder="Enter owner name" />
        </div>

        <div className="space-y-1">
          <Label htmlFor="imageUrl">Image URL</Label>
          <Input id="imageUrl" type="text" placeholder="Enter image URL" />
        </div>

        {/* pet age */}
        <div className="space-y-1">
          <Label htmlFor="age">Age</Label>
          <Input id="age" type="number" placeholder="Enter pet age" />
        </div>

        <div className="space-y-1">
          <Label htmlFor="notes">Notes</Label>
          <Textarea id="notes" rows={3} placeholder="Enter notes" />
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
