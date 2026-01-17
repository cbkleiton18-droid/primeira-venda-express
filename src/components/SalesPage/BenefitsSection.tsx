import { Play, BookOpen, Users, HeadphonesIcon, Gift, Zap } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Play,
      title: "Aulas Passo a Passo",
      description: "Vídeos objetivos e práticos que vão direto ao ponto, sem enrolação",
    },
    {
      icon: BookOpen,
      title: "Conteúdo 100% Prático",
      description: "Nada de teoria excessiva. Você aprende fazendo e aplicando",
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte com Mentor",
      description: "Tire suas dúvidas diretamente com quem já faz acontecer",
    },
    {
      icon: Users,
      title: "Comunidade Exclusiva",
      description: "Acesso ao grupo de alunos para networking e trocas de experiência",
    },
    {
      icon: Gift,
      title: "Bônus Exclusivos",
      description: "Materiais extras para acelerar ainda mais seus resultados",
    },
    {
      icon: Zap,
      title: "Atualizações Vitalícias",
      description: "Todo conteúdo novo que for adicionado, você terá acesso gratuito",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tudo o Que Você <span className="text-accent">Vai Receber</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Um arsenal completo para suas primeiras vendas online
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Daily cost highlight */}
        <div className="mt-12 text-center">
          <div className="inline-block p-6 rounded-2xl bg-accent/10 border border-accent/30">
            <p className="text-lg text-foreground">
              Tudo isso por menos de <span className="text-accent font-bold text-2xl">R$1,00 por dia</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
