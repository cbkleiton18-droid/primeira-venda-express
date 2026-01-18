import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FooterCTA = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Sua Vida Pode Mudar Hoje
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          A diferença entre quem alcança resultados e quem fica na mesma é a decisão de agir. 
          O botão abaixo é o seu primeiro passo.
        </p>
        
        <Button size="hero" className="group" asChild>
          <a href="https://api.whatsapp.com/message/P7RK3VSNND5EN1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">
            AINDA TENHO DÚVIDAS
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>

        <footer className="mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2024 Todos os direitos reservados. Este site não é afiliado ao Facebook, Google ou qualquer entidade do Facebook Inc ou Alphabet Inc.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default FooterCTA;
