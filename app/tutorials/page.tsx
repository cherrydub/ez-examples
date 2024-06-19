import Link from "next/link";
import React from "react";

export default function TutorialsPage() {
  return (
    <div>
      get ready to learn bitch
      <p>
        <Link href="/tutorials/todos">todos</Link>
        <Link href="/tutorials/comparisons">comparisons</Link>
      </p>
    </div>
  );
}
