"use client";

import { DeviceToggle } from "@/components/device-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { timeout } from "@/lib/utils";
import React, { useState } from "react";

const dimensions = {
  desktop: {
    width: 900,
    height: 500,
  },
  tablet: {
    width: 768,
    height: 1024,
  },
  mobile: {
    width: 375,
    height: 667,
  },
};

export default function ToolsPage() {
  const [input, setInput] = useState("");
  const [site, setSite] = useState("https://chriscoding.xyz");
  const [device, setDevice] = useState<"desktop" | "tablet" | "mobile">(
    "desktop"
  );

  function updateDevice(newDevice: "desktop" | "tablet" | "mobile"): void {
    setDevice(newDevice);
  }

  const handleSubmit = () => {
    if (input.startsWith("https://")) {
      setSite(input);
    } else {
      setSite("https://" + input);
      setInput("https://" + input);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit(); // Call handleSubmit when Enter key is pressed
    }
  };

  return (
    <div className="text-center">
      <div className="flex space-x-2">
        <Input
          type="url"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="https://localhost:3000 or siteURL"
        />
        <Button onClick={handleSubmit}>Submit</Button>{" "}
      </div>
      <code>{site}</code>

      <div className="m-4">
        <DeviceToggle onClick={updateDevice} />
      </div>

      <code>
        {device} {`(${dimensions[device].width}x${dimensions[device].height})`}
      </code>

      <div className="flex-center">
        <iframe
          className="border border-primary"
          src={site}
          width={dimensions[device].width}
          height={dimensions[device].height}
        ></iframe>
      </div>
    </div>
  );
}
