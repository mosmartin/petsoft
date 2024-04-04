import { Cross1Icon, Pencil1Icon, PlusIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

type ActionButtonProps = {
  actionType: "add" | "edit" | "delete";
  onClick?: () => void;
};

export default function ActionButton({
  actionType,
  onClick,
}: Readonly<ActionButtonProps>) {
  if (actionType === "add") {
    return (
      <Button size="icon">
        <PlusIcon className="h-6 w-6" />
      </Button>
    );
  }

  if (actionType === "edit") {
    return (
      <Button variant="secondary">
        <Pencil1Icon className="h-6 w-6" />
      </Button>
    );
  }

  if (actionType === "delete") {
    return (
      <Button variant="destructive" onClick={onClick}>
        <Cross1Icon className="h-6 w-6" />
      </Button>
    );
  }
}
