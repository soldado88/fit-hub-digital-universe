import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Users, MessageCircle, Heart, ArrowRight } from "lucide-react";

export function SocialProofSection() {
  const testimonials = [
    {
      name: "Marco R.",
      result: "-12kg in 3 mesi",
      text: "Incredibile! Il supporto H24 su WhatsApp ha fatto la differenza. Luca e Martina sono sempre disponibili.",
      rating: 5
    },
    {
      name: "Sofia L.", 
      result: "Tonificazione completa",
      text: "Programma personalizzato fantastico. Ho finalmente raggiunto la forma che volevo da anni.",
      rating: 5
    },
    {
      name: "Andrea M.",
      result: "+8kg massa magra",
      text: "Coaching 1-to-1 di altissimo livello. Consigli nutrizionali perfetti per i miei obiettivi.",
      rating: 5
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "100+",
      label: "Clienti online seguiti",
      color: "text-primary"
    },
    {
      icon: MessageCircle,
      number: "24/7",
      label: "Supporto reale WhatsApp",
      color: "text-secondary"
    },
    {
      icon: Heart,
      number: "1-to-1",
      label: "Coaching personalizzato",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Social Proof
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Fiducia e Risultati
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Testimonianze reali di chi ha trasformato il proprio corpo e stile di vita con noi.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-card/50 backdrop-blur border border-border/50 rounded-lg p-8 hover:bg-card/70 transition-colors">
                  <IconComponent className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
                  <div className="text-4xl font-bold text-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-card/50 backdrop-blur border-border/50 hover:bg-card/70 transition-colors">
              <CardContent className="p-0 space-y-4">
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground italic text-center">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="text-center">
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-primary font-medium text-sm">
                    {testimonial.result}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            <Users className="w-5 h-5 mr-2" />
            Scopri le storie di chi ce l'ha fatta
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}