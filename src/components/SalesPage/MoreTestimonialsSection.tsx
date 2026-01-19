import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import proof10 from "@/assets/testimonials/proof-10.png";
import proof11 from "@/assets/testimonials/proof-11.png";

const testimonials = [
  { id: 10, image: proof10 },
  { id: 11, image: proof11 },
];

const MoreTestimonialsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Mais <span className="text-accent">Resultados Reais</span> dos Alunos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Veja o que a comunidade MJM está conquistando
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-12">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[
              Autoplay({ delay: 3000, stopOnInteraction: false }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2">
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
      </div>
    </section>
  );
};

export default MoreTestimonialsSection;
