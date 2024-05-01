import { timeout } from "@/lib/utils";
import React from "react";

export default async function ProjectsPage() {
  await timeout(1000);

  return <div>projects</div>;
}
