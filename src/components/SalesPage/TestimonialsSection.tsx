import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import proof1 from "@/assets/testimonials/proof-1.png";
import proof2 from "@/assets/testimonials/proof-2.png";
import proof3 from "@/assets/testimonials/proof-3.png";
import proof4 from "@/assets/testimonials/proof-4.png";
import proof5 from "@/assets/testimonials/proof-5.png";
import proof6 from "@/assets/testimonials/proof-6.png";
import proof7 from "@/assets/testimonials/proof-7.png";
import proof8 from "@/assets/testimonials/proof-8.png";
import proof9 from "@/assets/testimonials/proof-9.png";

const testimonials = [
  { id: 1, image: proof1 },
  { id: 2, image: proof2 },
  { id: 3, image: proof3 },
  { id: 4, image: proof4 },
  { id: 5, image: proof5 },
  { id: 6, image: proof6 },
  { id: 7, image: proof7 },
  { id: 8, image: proof8 },
  { id: 9, image: proof9 },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Quem Aplicou, <span className="text-accent">Transformou Sua Vida</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de pessoas comuns que decidiram mudar de vida
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-lg">
                    <img
                      src={testimonial.image}
                      alt={`Depoimento de aluno ${testimonial.id}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Deslize para ver mais resultados reais dos nossos alunos →
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
