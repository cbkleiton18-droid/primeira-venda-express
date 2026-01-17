import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import arthurHero from "@/assets/arthur-hero.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${arthurHero})` }}
      />
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
      
      <div className="container relative z-10 px-4 py-20 text-center">
        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-6 max-w-4xl mx-auto">
          MJM - <span className="text-accent">Mentoria Jornada Milionária</span>
        </h1>

        <p className="text-xl md:text-2xl text-foreground font-semibold mb-4">
          Faça Suas Primeiras Vendas na Internet em Até 7 Dias
        </p>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Método validado por <span className="text-foreground font-semibold">+50.000 alunos</span> para gerar renda extra online, 
          investindo apenas <span className="text-foreground font-semibold">1 hora por dia</span>, mesmo começando do absoluto zero.
        </p>

        {/* CTA Button */}
        <Button size="hero" className="group mb-6">
          QUERO COMEÇAR AGORA
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>

        {/* Trust elements */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span>Acesso Imediato</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span>Garantia de 30 Dias</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span>Suporte Exclusivo</span>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
