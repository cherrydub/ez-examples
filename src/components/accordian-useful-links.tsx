import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const usefulLinks = [
  {
    title: "Icons",
    links: [
      {
        title: "Lucide Icons",
        description: "Lucide Icons",
        url: "https://lucide.dev/icons/",
      },
      {
        title: "Line Awesome",
        description: "Line Awesome — Free Beautiful Icon Font",
        url: "https://icons8.com/line-awesome",
      },
      {
        title: "React Icons",
        description: "React Icons",
        url: "https://react-icons.github.io/react-icons/",
      },
      {
        title: "Radix Icons",
        description: "Radix Icons",
        url: "https://www.radix-ui.com/icons",
      },
    ],
  },
  {
    title: "Animations",
    links: [
      {
        title: "npm: react-fast-marquee",
        description: "React Fast Marquee on npm",
        url: "https://www.npmjs.com/package/react-fast-marquee",
      },
      {
        title: "Components | React Spinners",
        description: "React Spinners Components",
        url: "https://mhnpd.github.io/react-loader-spinner/docs/category/components/",
      },
      {
        title: "npm: react-spinners",
        description: "React Spinners on npm",
        url: "https://www.npmjs.com/package/react-spinners",
      },
    ],
  },
  {
    title: "CV / Resume",
    links: [
      {
        title: "Reddit Resume",
        description: "AIO resume helper",
        url: "https://www.reddit.com/r/EngineeringResumes/wiki/index/#wiki_general_rules",
      },
    ],
  },
  {
    title: "Fonts",
    links: [
      {
        title: "Proto Mono",
        description: "clean font",
        url: "https://fontshub.pro/font/proto-mono-download",
      },
      {
        title: "Silkscreen",
        description: "nice blocky font, good for video games and techy stuff",
        url: "https://fontshub.pro/font/silkscreen-download",
      },
      {
        title: "Nextjs Fonts",
        description: "how to add fonts to nextjs",
        url: "https://blog.openreplay.com/adding-google-fonts-to-nextjs-apps/",
      },
    ],
  },
  {
    title: "Hooks",
    links: [
      {
        title: "useHooks",
        description:
          "A collection of modern, server-safe React hooks – from the ui.dev team",
        url: "https://usehooks.com/",
      },
      {
        title: "usehooks-ts",
        description: "TypeScript version of useHooks",
        url: "https://usehooks-ts.com/",
      },
    ],
  },
];

export default function AccordianUsefulLinks() {
  return (
    <Accordion type="single" collapsible>
      {usefulLinks.map((category, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{category.title}</AccordionTrigger>
          <AccordionContent>
            <ul>
              {category.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  {/* <i className="las la-external-link-alt"></i> */}
                  <a href={link.url} target="_blank">
                    {link.title}
                  </a>{" "}
                  - {link.description}
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
