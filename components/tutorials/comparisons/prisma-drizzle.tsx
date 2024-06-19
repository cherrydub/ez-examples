"use client";

import Image from "next/image";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import shadesOfPurple from "react-syntax-highlighter/dist/cjs/styles/prism/shades-of-purple";
import { SiPrisma } from "react-icons/si";
import { prismadrizzlecomparison } from "@/lib/code";

const ComparisonSection = ({ title, prismaCode, drizzleCode }: any) => (
  <div className="mb-20 0">
    <h2 className="text-2xl font-semibold text-center">{title}</h2>
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-2">
        <h3 className="text-center mb-2 flex flex-center font-bold">
          <SiPrisma className="inline mr-2" />
          Prisma
        </h3>
        <div
          className="max-h-80 overflow-auto  p-1 h-full rounded"
          style={{ background: "darkblue", color: "white" }}
        >
          <SyntaxHighlighter
            language="javascript"
            className="h-full text-xs"
            style={shadesOfPurple}
            showLineNumbers={true}
            wrapLines={true}
            customStyle={{ background: "darkblue", color: "white" }}
          >
            {prismaCode}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-2">
        <h3 className="text-center mb-2 font-bold italic">
          {" "}
          <Image
            src="/drizzle.png"
            alt="Drizzle Logo"
            width={20}
            height={20}
            className="inline mr-2 "
          />
          drizzle
        </h3>
        <div
          className="max-h-80 overflow-auto  p-1 h-full rounded"
          style={{ background: "#2D2A55", color: "white" }}
        >
          {" "}
          <SyntaxHighlighter
            language="javascript"
            className="h-full text-xs"
            style={shadesOfPurple}
            showLineNumbers={true}
            wrapLines={true}
            customStyle={{ background: "#2D2A55", color: "white" }}
          >
            {drizzleCode}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  </div>
);

const PrismaDrizzle = () => (
  <div className="p-4">
    <ComparisonSection
      title="Schema Definition"
      prismaCode={prismadrizzlecomparison.schemaDefinition.prisma}
      drizzleCode={prismadrizzlecomparison.schemaDefinition.drizzle}
    />
    <ComparisonSection
      title="Database Queries"
      prismaCode={prismadrizzlecomparison.databaseQueries.prisma}
      drizzleCode={prismadrizzlecomparison.databaseQueries.drizzle}
    />
    <ComparisonSection
      title="Migrations"
      prismaCode={prismadrizzlecomparison.migrations.prisma}
      drizzleCode={prismadrizzlecomparison.migrations.drizzle}
    />
    <ComparisonSection
      title="Usage in Next.js"
      prismaCode={prismadrizzlecomparison.usageNextJs.prisma}
      drizzleCode={prismadrizzlecomparison.usageNextJs.drizzle}
    />
  </div>
);

export default PrismaDrizzle;
