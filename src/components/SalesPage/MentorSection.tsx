import { Quote } from "lucide-react";
import arthurMentor from "@/assets/arthur-mentor.jpeg";

const MentorSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Arthur's photo */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src={arthurMentor} 
                  alt="Arthur Santos" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
            </div>

            {/* Story */}
            <div>
              <Quote className="w-10 h-10 text-accent mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-6">
                A História Por Trás do Método
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Iniciei no digital em <span className="text-foreground font-semibold">2021, aos 16 anos</span>. Comecei como você: sem dinheiro, sem experiência e cheio de dúvidas sobre se era possível ganhar dinheiro na internet.
                </p>
                <p>
                  Depois de muito estudo e tentativa e erro, descobri um método simples que me permitiu fazer minhas primeiras vendas online. Aos <span className="text-foreground font-semibold">19 anos, já havia faturado mais de R$2 milhões</span> no mercado digital.
                </p>
                <p>
                  Hoje, <span className="text-foreground font-semibold">aposentei meus pais</span> e vivo a verdadeira liberdade financeira. Já ajudei mais de 50.000 pessoas a alcançarem seus primeiros resultados, gerando mais de R$10 milhões em vendas para os alunos.
                </p>
                <p className="text-foreground font-medium">
                  Minha missão é ajudar novas pessoas a entrarem no mercado digital e conquistarem sua liberdade financeira.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-foreground font-semibold">Arthur Santos</p>
                <p className="text-sm text-muted-foreground">Fundador da MJM - Mentoria Jornada Milionária</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;
