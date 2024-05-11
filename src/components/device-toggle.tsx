import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Monitor, Smartphone, Tablet } from "lucide-react";

export function DeviceToggle({
  onClick,
}: {
  onClick: (device: "desktop" | "tablet" | "mobile") => void;
}) {
  return (
    <ToggleGroup type="single">
      <ToggleGroupItem value="desktop" aria-label="Toggle desktop">
        <Monitor onClick={() => onClick("desktop")} className="h-4 w-4" />
      </ToggleGroupItem>

      <ToggleGroupItem value="mobile" aria-label="Toggle mobile">
        <Smartphone onClick={() => onClick("mobile")} className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
