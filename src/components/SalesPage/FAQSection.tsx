import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Quanto tempo preciso dedicar por dia?",
      answer: "Recomendamos no mínimo 1 hora por dia para aplicar o método. Claro, quanto mais tempo você dedicar, mais rápido terá resultados.",
    },
    {
      question: "Funciona para qualquer idade?",
      answer: "Sim! Temos alunos de 18 a 70 anos obtendo resultados. O método foi desenvolvido para ser simples e acessível para qualquer pessoa.",
    },
    {
      question: "Preciso aparecer ou mostrar o rosto?",
      answer: "Não é obrigatório. Você pode aplicar estratégias que não exigem que você apareça, grave vídeos ou mostre sua identidade.",
    },
    {
      question: "Preciso investir muito dinheiro para começar?",
      answer: "Não. Você pode começar com investimento zero ou muito baixo. O método ensina estratégias que não exigem capital inicial alto.",
    },
    {
      question: "E se eu não conseguir resultados?",
      answer: "Primeiro, você tem 30 dias de garantia incondicional. Segundo, temos suporte para te ajudar a aplicar o método corretamente. Terceiro, se você seguir as aulas e aplicar, os resultados vêm.",
    },
    {
      question: "Como funciona o suporte?",
      answer: "Você terá acesso a uma comunidade exclusiva de alunos e suporte direto com a equipe para tirar suas dúvidas e receber orientação.",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas <span className="text-accent">Frequentes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tire suas últimas dúvidas antes de começar
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-accent/50"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-accent hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
