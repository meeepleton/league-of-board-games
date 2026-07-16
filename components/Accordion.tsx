"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import rulesData from "@/data/rules.json";

export default function Accordion() {
  const [openSection, setOpenSection] = useState<string | null>(rulesData[0]?.section ?? null);
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {rulesData.map((section) => (
        <div key={section.section} className="bg-white rounded-xl2 shadow-softer overflow-hidden">
          <button
            onClick={() =>
              setOpenSection(openSection === section.section ? null : section.section)
            }
            className="w-full flex items-center justify-between px-6 py-4 text-left"
          >
            <span className="font-heading text-lg font-semibold">{section.section}</span>
            <ChevronDown
              className={`transition-transform ${openSection === section.section ? "rotate-180" : ""}`}
              size={20}
            />
          </button>

          {openSection === section.section && (
            <div className="px-6 pb-4 space-y-2">
              {section.items.map((item) => {
                const key = `${section.section}-${item.q}`;
                return (
                  <div key={key} className="border-t border-ink/10 pt-3">
                    <button
                      onClick={() => setOpenItem(openItem === key ? null : key)}
                      className="w-full text-left flex justify-between items-center gap-4"
                    >
                      <span className="text-sm font-medium">{item.q}</span>
                      <ChevronDown
                        size={16}
                        className={`shrink-0 transition-transform ${openItem === key ? "rotate-180" : ""}`}
                      />
                    </button>
                    {openItem === key && (
                      <p className="text-sm text-ink/60 mt-2">{item.a}</p>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
