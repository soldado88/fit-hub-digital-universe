import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Trophy, Heart, Download, Star } from "lucide-react";

export default function SchedeEDiete() {
  const products = [
    {
      id: 1,
      title: "Protocollo Base",
      description: "Per chi inizia - programma pensato per principianti",
      price: "€25",
      features: ["6 settimane di allenamento", "3 giorni a settimana", "Tracking progressi", "Supporto WhatsApp"],
      badge: "Principianti",
      icon: Users,
      color: "primary"
    },
    {
      id: 2,
      title: "Protocollo Intermedio",
      description: "Programma completo con supporto personalizzato",
      price: "€50",
      features: ["6 settimane", "4 volte a settimana", "Consulenza dietologo 1-on-1", "Consulenza personal trainer 1-on-1", "Tracking progressi", "Supporto WhatsApp"],
      badge: "Più Completo",
      icon: Trophy,
      color: "secondary"
    },
    {
      id: 3,
      title: "Protocollo Avanzato",
      description: "Programma intensivo completamente personalizzato",
      price: "€99",
      features: ["12 settimane", "5 allenamenti a settimana", "Dieta personalizzata con dietologo", "Programma personalizzato con personal trainer", "Consulenze 1-on-1", "Tracking progressi", "Assistenza WhatsApp"],
      badge: "Premium",
      icon: Heart,
      color: "accent"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="bg-gradient-to-b from-background to-muted/20">
      <div className="pt-20 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Coaching Online</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Schede & Piani Nutrizionali
              <span className="block text-primary mt-2">Personalizzati</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Raggiungi i tuoi obiettivi con i nostri programmi scientificamente provati, 
              creati da professionisti qualificati per il coaching online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => {
              const IconComponent = product.icon;
              return (
                <Card key={product.id} className="relative group hover:shadow-card transition-all duration-500 hover:-translate-y-2 border-border/50">
                  {product.badge && (
                    <Badge 
                      variant="default" 
                      className={`absolute -top-2 -right-2 z-10 ${
                        product.color === 'primary' ? 'bg-primary' : 
                        product.color === 'secondary' ? 'bg-secondary' : 'bg-accent'
                      }`}
                    >
                      {product.badge}
                    </Badge>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                      product.color === 'primary' ? 'bg-gradient-primary' :
                      product.color === 'secondary' ? 'bg-gradient-secondary' : 'bg-gradient-accent'
                    }`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold">{product.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {product.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <span className="text-3xl font-bold text-primary">{product.price}</span>
                      <span className="text-muted-foreground ml-1">/una tantum</span>
                    </div>
                    
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <Star className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="pt-4">
                    <Button 
                      className="w-full group-hover:scale-105 transition-transform" 
                      variant={product.color === 'primary' ? 'default' : 
                              product.color === 'secondary' ? 'secondary' : 'accent'}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Acquista Ora
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}