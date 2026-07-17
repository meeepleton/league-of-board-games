

// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown } from "lucide-react";
// import rulesData from "@/data/rules.json";

// export default function Accordion() {
//   const [openSection, setOpenSection] = useState<string | null>(rulesData[0]?.section ?? null);
//   const [openItem, setOpenItem] = useState<string | null>(null);

//   return (
//     <div className="max-w-3xl mx-auto space-y-4">
//       {rulesData.map((section, i) => (
//         <motion.div
//           key={section.section}
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.4, delay: i * 0.05 }}
//           className="bg-white rounded-xl2 shadow-softer overflow-hidden"
//         >
//           <button
//             onClick={() =>
//               setOpenSection(openSection === section.section ? null : section.section)
//             }
//             className="w-full flex items-center justify-between px-6 py-4 text-left"
//           >
//             <span className="font-heading text-lg font-semibold">{section.section}</span>
//             <motion.span
//               animate={{ rotate: openSection === section.section ? 180 : 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <ChevronDown size={20} />
//             </motion.span>
//           </button>

//           <AnimatePresence initial={false}>
//             {openSection === section.section && (
//               <motion.div
//                 initial={{ height: 0, opacity: 0 }}
//                 animate={{ height: "auto", opacity: 1 }}
//                 exit={{ height: 0, opacity: 0 }}
//                 transition={{ duration: 0.3, ease: "easeInOut" }}
//                 className="overflow-hidden"
//               >
//                 <div className="px-6 pb-4 space-y-2">
//                   {section.items.map((item) => {
//                     const key = `${section.section}-${item.q}`;
//                     return (
//                       <div key={key} className="border-t border-ink/10 pt-3">
//                         <button
//                           onClick={() => setOpenItem(openItem === key ? null : key)}
//                           className="w-full text-left flex justify-between items-center gap-4"
//                         >
//                           <span className="text-sm font-medium">{item.q}</span>
//                           <motion.span
//                             animate={{ rotate: openItem === key ? 180 : 0 }}
//                             transition={{ duration: 0.25 }}
//                             className="shrink-0"
//                           >
//                             <ChevronDown size={16} />
//                           </motion.span>
//                         </button>
//                         <AnimatePresence initial={false}>
//                           {openItem === key && (
//                             <motion.p
//                               initial={{ height: 0, opacity: 0 }}
//                               animate={{ height: "auto", opacity: 1 }}
//                               exit={{ height: 0, opacity: 0 }}
//                               transition={{ duration: 0.25, ease: "easeInOut" }}
//                               className="text-sm text-ink/60 overflow-hidden"
//                             >
//                               <span className="block pt-2">{item.a}</span>
//                             </motion.p>
//                           )}
//                         </AnimatePresence>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </motion.div>
//       ))}
//     </div>
//   );
// }




"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import rulesData from "@/data/rules.json";

const SECTION_COLORS = ["border-forest", "border-cherry", "border-sky", "border-tangerine", "border-gold"];

export default function Accordion() {
  const [openSection, setOpenSection] = useState<string | null>(rulesData[0]?.section ?? null);
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {rulesData.map((section, i) => (
        <motion.div
          key={section.section}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className={`bg-white rounded-xl2 shadow-softer overflow-hidden border-l-4 ${SECTION_COLORS[i % SECTION_COLORS.length]}`}
        >
          <button
            onClick={() =>
              setOpenSection(openSection === section.section ? null : section.section)
            }
            className="w-full flex items-center justify-between px-6 py-4 text-left"
          >
            <span className="font-heading text-lg font-semibold">{section.section}</span>
            <motion.span
              animate={{ rotate: openSection === section.section ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={20} />
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {openSection === section.section && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
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
                          <motion.span
                            animate={{ rotate: openItem === key ? 180 : 0 }}
                            transition={{ duration: 0.25 }}
                            className="shrink-0"
                          >
                            <ChevronDown size={16} />
                          </motion.span>
                        </button>
                        <AnimatePresence initial={false}>
                          {openItem === key && (
                            <motion.p
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="text-sm text-ink/60 overflow-hidden"
                            >
                              <span className="block pt-2">{item.a}</span>
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
