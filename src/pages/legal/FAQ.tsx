import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import faqData from "./faq.json";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsToShow, setItemsToShow] = useState(10);

  // Filter FAQs by search term (case-insensitive)
  const filteredFAQs = faqData.filter((faq: FAQItem) => {
    const query = searchTerm.toLowerCase();
    return (
      faq.question.toLowerCase().includes(query) ||
      faq.answer.toLowerCase().includes(query)
    );
  });

  // Slice FAQs to show limited number, support "Load More"
  const visibleFAQs = filteredFAQs.slice(0, itemsToShow);

  // Prepare structured data for SEO FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": visibleFAQs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <PageLayout
      title="Frequently Asked Questions"
      description="Find answers to commonly asked questions about our services, hiring, internships, and company."
      breadcrumbs={[{ name: "FAQ", href: "/faq", current: true }]}
    >
      {/* Inject JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="container max-w-5xl mx-auto px-4 py-16">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold text-tech-blue mb-4">
            Sofixs FAQs
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            We’ve got answers to your most common questions.
          </p>
        </header>

        <section aria-label="Search FAQs" className="mb-10">
          <Input
            type="search"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-describedby="search-faqs"
            className="w-full md:w-1/2 mx-auto block border border-gray-300 rounded-md shadow-sm focus:ring-tech-blue focus:border-tech-blue"
          />
        </section>

        <section aria-label="Frequently Asked Questions" role="region">
          <Accordion type="multiple" className="space-y-6">
            {visibleFAQs.length > 0 ? (
              visibleFAQs.map((faq: FAQItem, index: number) => (
                <AccordionItem
                  key={index}
                  value={`faq-item-${index}`}
                  className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <AccordionTrigger className="text-left font-semibold text-xl text-tech-blue hover:text-tech-orange transition-colors duration-200">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base leading-relaxed mt-3">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))
            ) : (
              <p className="text-center text-gray-500">No FAQs found for your search.</p>
            )}
          </Accordion>
        </section>

        {itemsToShow < filteredFAQs.length && (
          <div className="text-center mt-12">
            <button
              className="bg-tech-orange text-white font-semibold px-8 py-3 rounded-md shadow-md hover:bg-orange-600 transition duration-200 focus:outline-none focus:ring-4 focus:ring-orange-400"
              onClick={() => setItemsToShow((prev) => prev + 10)}
              aria-label="Load more FAQs"
            >
              Load More
            </button>
          </div>
        )}
      </main>
    </PageLayout>
  );
};

export default FAQ;
