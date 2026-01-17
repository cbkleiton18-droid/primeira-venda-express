import { CheckCircle, Users, TrendingUp, Award } from "lucide-react";

const AuthoritySection = () => {
  const stats = [
    { icon: Users, value: "+50.000", label: "Alunos Formados" },
    { icon: TrendingUp, value: "R$10M+", label: "Faturamento dos Alunos" },
    { icon: Award, value: "5 Anos", label: "De Método Validado" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-card border border-border"
            >
              <stat.icon className="w-10 h-10 text-accent mx-auto mb-4" />
              <p className="text-3xl md:text-4xl font-black text-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Method explanation */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            O Método Que <span className="text-accent">Já Transformou Milhares</span> de Vidas
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Este não é mais um curso genérico. É um treinamento focado em uma coisa: 
            te levar da estaca zero até suas primeiras vendas reais na internet, 
            com um passo a passo testado e comprovado.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {[
              "Estrutura validada por especialistas",
              "Resultados comprovados por alunos reais",
              "Atualizações constantes do método",
              "Suporte direto com a equipe",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
