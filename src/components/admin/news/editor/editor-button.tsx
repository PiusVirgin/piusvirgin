import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EditorButtonProps {
  icon: ReactNode;
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
}

export default function EditorButton({
  icon,
  onClick,
  active = false,
  disabled = false,
}: EditorButtonProps) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "h-9 w-9 rounded-md",
        active && "bg-primary text-primary-foreground hover:bg-primary",
      )}
    >
      {icon}
    </Button>
  );
}
