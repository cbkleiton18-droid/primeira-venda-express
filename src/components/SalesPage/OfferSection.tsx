import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock } from "lucide-react";

const OfferSection = () => {
  return (
    <section className="py-20 bg-gradient-offer relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 bg-destructive/20 border border-destructive/40 rounded-full px-4 py-2 mb-8">
            <Clock className="w-4 h-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">
              PROMOÇÃO TERMINA EM BREVE
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Chegou a Hora de <span className="text-accent">Decidir</span>
          </h2>

          {/* Pricing card */}
          <div className="bg-card border border-border rounded-3xl p-8 mb-8">
            {/* Original price */}
            <p className="text-muted-foreground mb-2">De</p>
            <p className="text-3xl font-bold text-muted-foreground line-through mb-4">
              R$ 497,00
            </p>

            {/* Promotional price */}
            <p className="text-accent font-semibold mb-2">Por apenas</p>
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="text-xl text-foreground">12x de</span>
              <span className="text-5xl md:text-6xl font-black text-accent">R$12,42</span>
            </div>
            <p className="text-muted-foreground mb-6">
              ou <span className="text-foreground font-semibold">R$ 127,00</span> à vista
            </p>

            {/* Savings highlight */}
            <div className="inline-block bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-8">
              <span className="text-green-500 font-medium">
                Você economiza R$ 370,00 hoje!
              </span>
            </div>

            {/* CTA */}
            <Button size="hero" className="w-full group mb-4">
              QUERO GARANTIR MINHA VAGA
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Security badges */}
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4" />
                <span>Pagamento Seguro</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4" />
                <span>Garantia de 30 dias</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            Aceitamos cartão de crédito, boleto e Pix
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
