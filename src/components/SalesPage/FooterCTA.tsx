import { Button } from "@/components/ui/button";
import { MessageCircle, Heart, Shield, Users, Zap } from "lucide-react";

const FooterCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Emotional headline */}
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-6">
            <Heart className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-sm font-medium text-accent">
              Sua transformação começa agora
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Sua Vida Pode <span className="text-accent">Mudar Hoje</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            A diferença entre quem alcança resultados e quem fica na mesma é a 
            <span className="text-foreground font-medium"> decisão de agir</span>. 
            O botão abaixo é o seu primeiro passo para uma nova realidade.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm">Garantia de 30 dias</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-5 h-5 text-accent" />
              <span className="text-sm">+50.000 alunos</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Zap className="w-5 h-5 text-accent" />
              <span className="text-sm">Acesso imediato</span>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-8 mb-8 shadow-2xl shadow-accent/5">
            <p className="text-muted-foreground mb-4">
              Ainda tem dúvidas? Fale diretamente comigo no WhatsApp:
            </p>
            
            <Button size="hero" className="w-full sm:w-auto px-12" asChild>
              <a 
                href="https://api.whatsapp.com/message/P7RK3VSNND5EN1?autoload=1&app_absent=0" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                FALAR NO WHATSAPP
              </a>
            </Button>

            <p className="text-xs text-muted-foreground mt-4">
              Respondo em até 24 horas
            </p>
          </div>

          {/* Motivational closing */}
          <p className="text-foreground font-medium mb-2">
            "O melhor momento para começar foi ontem. O segundo melhor é agora."
          </p>
          <p className="text-sm text-muted-foreground mb-12">
            — Arthur, Mentor MJM
          </p>
        </div>

        {/* Footer */}
        <footer className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2024 MJM - Método Jovem Milionário. Todos os direitos reservados.</p>
            <p className="text-xs max-w-md text-center md:text-right">
              Este site não é afiliado ao Facebook, Google ou qualquer entidade do Facebook Inc ou Alphabet Inc.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default FooterCTA;
