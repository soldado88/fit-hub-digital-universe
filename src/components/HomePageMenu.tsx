import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, Award, Phone, Dumbbell, Calendar } from "lucide-react";

export function HomePageMenu() {
  const menuItems = [
    {
      title: "Chi Siamo",
      description: "Scopri il nostro team di professionisti e la nostra filosofia",
      icon: Users,
      href: "/chi-siamo",
      color: "text-blue-500"
    },
    {
      title: "Protocolli",
      description: "Programmi di allenamento personalizzati per ogni obiettivo",
      icon: Dumbbell,
      href: "/protocolli", 
      color: "text-green-500"
    },
    {
      title: "Blog & News",
      description: "Articoli, consigli e novità dal mondo del fitness e benessere",
      icon: BookOpen,
      href: "/blog",
      color: "text-purple-500"
    },
    {
      title: "Consulenze",
      description: "Consulenze personalizzate online con i nostri esperti",
      icon: Calendar,
      href: "/consulenze",
      color: "text-orange-500"
    },
    {
      title: "Fiducia e Risultati",
      description: "Testimonianze e storie di successo dei nostri clienti",
      icon: Award,
      href: "/risultati",
      color: "text-yellow-500"
    },
    {
      title: "Contatti e Info",
      description: "Mettiti in contatto con noi per iniziare il tuo percorso",
      icon: Phone,
      href: "/contatti",
      color: "text-red-500"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Esplora i nostri servizi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Scegli la sezione che ti interessa per scoprire tutto quello che possiamo fare per te
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Card key={item.title} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-muted ${item.color} bg-opacity-10`}>
                      <IconComponent className={`w-6 h-6 ${item.color}`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    onClick={() => window.location.href = item.href}
                  >
                    Scopri di più
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}