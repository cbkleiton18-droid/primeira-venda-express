import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const ValueStackSection = () => {
  const items = [
    { name: "Treinamento MJM Completo", value: "R$ 497,00" },
    { name: "Estrutura de Vendas Pronta", value: "R$ 300,00" },
    { name: "Mais de 300 Produtos Vencedores", value: "R$ 197,00" },
    { name: "Suporte Personalizado com Equipe", value: "R$ 229,00" },
  ];

  const totalValue = 497 + 300 + 197 + 229; // 1223

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Quanto Será Que Vale <span className="text-accent">Tudo Isso?</span>
          </h2>

          {/* Value Stack */}
          <div className="bg-card border border-border rounded-3xl p-8 mb-8">
            <div className="space-y-4 mb-8">
              {items.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 rounded-xl bg-background/50 border border-border"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-foreground font-medium">{item.name}</span>
                  </div>
                  <span className="text-muted-foreground font-semibold">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Total crossed out */}
            <div className="border-t border-border pt-6 mb-6">
              <p className="text-muted-foreground mb-2">Valor total:</p>
              <p className="text-3xl font-bold text-muted-foreground line-through mb-4">
                R$ {totalValue.toLocaleString('pt-BR')},00
              </p>
            </div>

            {/* Actual price */}
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6">
              <p className="text-accent font-semibold mb-2">Mas você NÃO vai pagar isso!</p>
              <p className="text-foreground mb-2">Leve tudo isso por apenas:</p>
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-xl text-foreground">12x de</span>
                <span className="text-5xl md:text-6xl font-black text-accent">R$22,91</span>
              </div>
              <p className="text-muted-foreground mb-6">
                ou <span className="text-foreground font-semibold">R$ 197,00</span> à vista
              </p>

              <Button size="hero" className="w-full" asChild>
                <a href="https://pay.cakto.com.br/A5msHzH?affiliate=9wZc59rP" target="_blank" rel="noopener noreferrer">
                  QUERO GARANTIR MINHA VAGA
                </a>
              </Button>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            Você economiza mais de <span className="text-accent font-semibold">R$ 1.000,00</span> aproveitando esta oferta!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueStackSection;
