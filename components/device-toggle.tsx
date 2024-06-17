import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Monitor, Smartphone, Tablet } from "lucide-react";

export function DeviceToggle({
  onClick,
  devices,
}: {
  onClick: (device: "desktop" | "tablet" | "mobile") => void;
  devices: ("desktop" | "tablet" | "mobile")[];
}) {
  return (
    <ToggleGroup type="multiple">
      <ToggleGroupItem
        value="desktop"
        aria-label="Toggle desktop"
        onClick={() => onClick("desktop")}
      >
        <Monitor className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="tablet"
        aria-label="Toggle tablet"
        onClick={() => onClick("tablet")}
      >
        <Tablet className="h-4 w-4" />
      </ToggleGroupItem>

      <ToggleGroupItem
        value="mobile"
        aria-label="Toggle mobile"
        onClick={() => onClick("mobile")}
      >
        <Smartphone className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
