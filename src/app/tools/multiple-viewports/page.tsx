"use client";

import { DeviceToggle } from "@/components/device-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { timeout } from "@/lib/utils";
import React, { useState } from "react";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Span } from "next/dist/trace";

const dimensions = {
  desktop: { width: 900, height: 500 },
  tablet: { width: 768, height: 1024 },
  mobile: { width: 375, height: 667 },
};

export default function MultipleViewports() {
  const [input, setInput] = useState("");
  const [site, setSite] = useState("");
  const [scheme, setScheme] = useState<"http://" | "https://">("http://");
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
      let updatedUrl = input.trim(); // Remove any leading or trailing spaces

      // Check if the user input already contains "http://" or "https://"
      if (
        !updatedUrl.startsWith("http://") &&
        !updatedUrl.startsWith("https://")
      ) {
        // If not, add the selected scheme
        updatedUrl = `${scheme}${updatedUrl}`;
      }

      const url = new URL(updatedUrl);
      toast.success("Site updated");
      setSite(updatedUrl);
      setInput("");
    } catch {
      toast.error("Invalid URL format");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="text-center">
      {/* <div className="bg-pink-300">
        <p>schema: {scheme}</p>
        <p>input: {input}</p>
        <p>site: {site}</p>
      </div> */}
      <div className="">
        <Badge variant="secondary">Step 1</Badge> - Enter your site URL or
        localhost
        {site && <span className="ml-2">✅</span>}
        <div className="flex space-x-2 my-2">
          {/* <Select>
            <SelectTrigger className="w-[125px]">
              <SelectValue placeholder="http://" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem onClick={() => setScheme("http://")} value="http://">
                http://
              </SelectItem>
              <SelectItem
                onClick={() => setScheme("https://")}
                value="https://"
              >
                https://
              </SelectItem>
            </SelectContent>
          </Select> */}
          {/* <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">http://</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">https://</Label>
            </div>
          </RadioGroup> */}
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
        or choose from the list below:
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
      </div>
      <code>{site}</code>
      <br />

      <div className="m-4">
        <span className="mt-8">
          <Badge variant="secondary">Step 2</Badge> - Choose your device(s)
        </span>
        {devices.length > 0 && <span className="ml-2">✅</span>}
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
