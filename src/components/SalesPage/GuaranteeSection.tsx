import { Shield, CheckCircle } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border-2 border-green-500/30 rounded-3xl p-8 md:p-12">
            <div className="text-center">
              {/* Shield icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 mb-6">
                <Shield className="w-10 h-10 text-green-500" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Garantia <span className="text-green-500">Incondicional</span> de 30 Dias
              </h2>

              <p className="text-lg text-muted-foreground mb-8">
                Eu confio tanto no método que ofereço uma garantia de 30 dias sem perguntas. 
                Se por qualquer motivo você não ficar satisfeito, basta enviar um e-mail e 
                devolvemos 100% do seu investimento. Simples assim.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  "Sem burocracia",
                  "Devolução total",
                  "Sem perguntas",
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-center gap-2 p-4 rounded-xl bg-green-500/5">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-foreground font-semibold">
                O risco é todo meu. Você não tem nada a perder.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
