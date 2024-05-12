import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { usefulLinks } from "@/lib/data";

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
