import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does Devyte offer?",
    answer:
      "We offer a full suite of digital services including web design, web development, branding, UI/UX design, and strategic digital consulting.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity. A branding project might take 4-6 weeks, while a full-scale web development project can take 8-12 weeks.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes, we love working with bold startups. We help them establish a strong digital foundation and scale their brand effectively.",
  },
  {
    question: "What is your design process?",
    answer:
      "Our process is collaborative and iterative: Discovery -> Strategy -> Design -> Development -> Launch. We keep you involved at every stage.",
  },
  {
    question: "Can you help with post-launch support?",
    answer:
      "Absolutely. We offer ongoing maintenance and support packages to ensure your digital platform remains secure and up-to-date.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-white/10"
              >
                <AccordionTrigger className="text-left text-lg md:text-xl font-medium py-6 hover:text-blue-400 hover:no-underline transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/60 text-base md:text-lg leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
