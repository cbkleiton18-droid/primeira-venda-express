import { MessageSquareQuote } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Quem Aplicou, <span className="text-accent">Transformou Sua Vida</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de pessoas comuns que decidiram mudar de vida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl bg-card border border-border flex flex-col items-center justify-center min-h-[250px]"
            >
              <MessageSquareQuote className="w-12 h-12 text-muted-foreground/30 mb-4" />
              <p className="text-center text-muted-foreground italic">
                (Inserir prova social real aqui)
              </p>
              <div className="mt-4 pt-4 border-t border-border w-full">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">Foto</span>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-foreground">Nome do Aluno</p>
                    <p className="text-xs text-muted-foreground">Resultado obtido</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          ⚠️ Estes são espaços reservados para depoimentos reais dos alunos
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
