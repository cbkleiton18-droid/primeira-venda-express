import { 
  Brain, 
  Lightbulb, 
  Bot, 
  Award, 
  Target, 
  TrendingUp, 
  Settings, 
  Megaphone, 
  Repeat, 
  EyeOff, 
  Users, 
  MessageCircle, 
  DollarSign,
  Sparkles
} from "lucide-react";

const modules = [
  { icon: Brain, title: "Mentalidade", description: "Desenvolva a mentalidade de sucesso" },
  { icon: Lightbulb, title: "Conhecimento Essencial", description: "Base sólida para começar" },
  { icon: Bot, title: "Inteligência Artificial", description: "Ganhe dinheiro usando IA" },
  { icon: Award, title: "Módulo Top Afiliado", description: "Estratégias avançadas de afiliação" },
  { icon: Target, title: "Conversão", description: "Transforme leads em vendas" },
  { icon: TrendingUp, title: "Tráfego Orgânico", description: "Atraia clientes sem investir" },
  { icon: Settings, title: "Automações", description: "Automatize seus processos" },
  { icon: Megaphone, title: "Tráfego Pago", description: "Escale com anúncios" },
  { icon: Repeat, title: "Vendas no Automático", description: "Sistema que vende 24h" },
  { icon: EyeOff, title: "Anonimato", description: "Venda sem aparecer" },
  { icon: Users, title: "Networking em Tempo Real", description: "Conecte-se com outros alunos" },
  { icon: MessageCircle, title: "Servidor do Discord", description: "Comunidade exclusiva" },
  { icon: DollarSign, title: "Como Ganhar em Dólar", description: "Mercado internacional" },
  { icon: Sparkles, title: "E Muito Mais!", description: "Conteúdo em constante atualização" },
];

const ModulesSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O Que Você Vai <span className="text-accent">Aprender</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conteúdo completo para você dominar as vendas online do zero ao avançado
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {modules.map((module, index) => (
            <div
              key={index}
              className="p-4 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all hover:scale-105 group text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors">
                <module.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">
                {module.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
