"use client";

import { DeviceToggle } from "@/components/device-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { timeout } from "@/lib/utils";
import React, { useState } from "react";
import { toast } from "sonner";

const dimensions = {
  desktop: { width: 900, height: 500 },
  tablet: { width: 768, height: 1024 },
  mobile: { width: 375, height: 667 },
};

export default function ToolsPage() {
  const [input, setInput] = useState("");
  const [site, setSite] = useState("");
  const [devices, setDevices] = useState<("desktop" | "tablet" | "mobile")[]>(
    []
  );

  function updateDevice(newDevice: "desktop" | "tablet" | "mobile"): void {
    setDevices((prevDevices) =>
      prevDevices.includes(newDevice)
        ? prevDevices.filter((device) => device !== newDevice)
        : [newDevice, ...prevDevices]
    );
  }

  const handleSubmit = () => {
    if (!input) {
      toast.error("Please enter a site URL");
      return;
    }

    try {
      const url = new URL(input);
      if (url.protocol === "http:" || url.protocol === "https:") {
        toast.success("Site updated");
        setSite(input);
      } else {
        toast.error("Invalid URL protocol. Please use http:// or https://");
      }
    } catch {
      toast.error("Invalid URL format");
    }

    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="text-center">
      <div className="">
        <Badge variant="secondary">Step 1</Badge> - Enter your site URL or
        localhost
        <div className="m-2 space-x-2 cursor-pointer">
          <Badge onClick={() => setSite("http://localhost:3000")}>
            localhost:3000
          </Badge>
          <Badge onClick={() => setSite("http://localhost:5173")}>
            localhost:5173
          </Badge>
          <Badge onClick={() => setSite("https://chriscoding.xyz")}>
            chriscoding.xyz
          </Badge>
        </div>
        <div className="flex space-x-2">
          <Input
            type="url"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="http://localhost:3000 or siteURL"
            aria-label="Site URL input"
          />
          <Button onClick={handleSubmit}>Submit</Button>{" "}
        </div>
      </div>
      <code>{site}</code>
      <br />

      <div className="m-4">
        <span className="mt-8">
          <Badge variant="secondary">Step 2</Badge> - Choose your device(s)
        </span>
        <DeviceToggle onClick={updateDevice} devices={devices} />
      </div>
      {devices?.map((device) => (
        <div key={device}>
          <code>
            {device} {dimensions[device].width}x{dimensions[device].height}
          </code>
          <div className="flex-center">
            <iframe
              className="border border-primary"
              src={site}
              width={dimensions[device].width}
              height={dimensions[device].height}
              sandbox="allow-same-origin allow-scripts"
              title={`${device} preview`}
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
}
