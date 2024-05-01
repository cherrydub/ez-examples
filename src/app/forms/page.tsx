import Link from "next/link";
import React from "react";

export default function FormsPage() {
  return (
    <div className="flex flex-col">
      <Link href="/forms/react-hook-forms">react hook form</Link>
      <Link href="/forms/server-actions">server actions</Link>
    </div>
  );
}
