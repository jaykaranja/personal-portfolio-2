import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What types of software does Littu build?",
    answer: "We specialize in custom web applications, mobile apps (iOS & Android), enterprise software solutions, API development, and SaaS products. Whether you need a simple website or a complex enterprise system, we've got you covered.",
    value: "item-1",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity. A simple web application might take 4-8 weeks, while larger enterprise solutions can take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
    value: "item-2",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We work with modern technologies including React, Next.js, Node.js, TypeScript, Python, React Native, Flutter, PostgreSQL, MongoDB, AWS, and more. We choose the best stack for each project's specific needs.",
    value: "item-3",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes! We offer comprehensive maintenance and support packages. This includes bug fixes, security updates, performance optimization, and feature enhancements to keep your software running smoothly.",
    value: "item-4",
  },
  {
    question: "How do you handle project pricing?",
    answer: "We offer flexible pricing models including fixed-price projects, time & materials, and dedicated team arrangements. During our discovery phase, we'll recommend the best approach based on your project scope and requirements.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
