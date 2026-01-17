import { X, Check } from "lucide-react";

const QualificationSection = () => {
  const notFor = [
    "Quem quer ganhar dinheiro fácil sem esforço",
    "Quem não está disposto a dedicar 1 hora por dia",
    "Quem espera resultados do dia para a noite",
    "Quem não segue instruções simples",
    "Quem desiste na primeira dificuldade",
  ];

  const isFor = [
    "Quem quer uma renda extra real e consistente",
    "Quem está disposto a aprender e aplicar",
    "Quem busca independência financeira",
    "Quem segue um método comprovado à risca",
    "Quem tem paciência para construir algo sólido",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Isso <span className="text-accent">É Para Você?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Vou ser direto: esse treinamento não é para todo mundo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Not for */}
          <div className="p-6 rounded-2xl bg-destructive/5 border border-destructive/20">
            <h3 className="text-xl font-bold text-destructive mb-6 flex items-center gap-2">
              <X className="w-6 h-6" />
              NÃO é para você se...
            </h3>
            <ul className="space-y-4">
              {notFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Is for */}
          <div className="p-6 rounded-2xl bg-green-500/5 border border-green-500/20">
            <h3 className="text-xl font-bold text-green-500 mb-6 flex items-center gap-2">
              <Check className="w-6 h-6" />
              É para você se...
            </h3>
            <ul className="space-y-4">
              {isFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationSection;
