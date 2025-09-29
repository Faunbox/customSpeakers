import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";



const Faq = () => {

   const t = useTranslations("Troels_faq");

   const faqData = [
  {
    question: "q1",
    answer:
      "a1",
  },
  {
    question: "q2",
    answer:
      "a2",
  },
  {
    question: "q3",
    answer:
      "a3",
  },
  {
    question: "q4",
    answer:
      "a4",
  },
  {
    question: "q5",
    answer:
      "a5",
  },
  {
    question: "q6",
    answer:
      "a6",
  },
  
];

    return (  <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">
            {t("title")}
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-gray-800 border-gray-700 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:text-purple-400">
                    {t(`${faq.question}`)}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pb-4">
                    {t(`${faq.answer}`)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section> );
}
 
export default Faq;