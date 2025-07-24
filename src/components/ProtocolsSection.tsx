import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Star, Crown } from "lucide-react";

export function ProtocolsSection() {
  const protocols = [
    {
      name: "Protocollo BASE",
      price: "€26,99",
      duration: "6 settimane",
      workouts: "3 allenamenti a settimana",
      features: [
        "Accesso a sistema Tracking Progressi",
        "Schede allenamento personalizzate",
        "Video tutorial esercizi",
        "Supporto email"
      ],
      badge: "Popolare",
      badgeVariant: "secondary" as const,
      icon: Zap,
      color: "primary"
    },
    {
      name: "Protocollo INTERMEDIO", 
      price: "€52,99",
      duration: "6 settimane",
      workouts: "4 allenamenti a settimana",
      features: [
        "Dieta personalizzata via questionario",
        "Video consulenza con personal trainer",
        "Accesso Tracking + Supporto WhatsApp",
        "Piano alimentare dettagliato",
        "Monitoraggio progressi settimanale"
      ],
      badge: "Consigliato",
      badgeVariant: "default" as const,
      icon: Star,
      color: "primary"
    },
    {
      name: "Protocollo AVANZATO",
      price: "€132,99", 
      duration: "12 settimane",
      workouts: "5 allenamenti a settimana",
      features: [
        "Dieta + coaching in call live (online o in studio)",
        "Supporto WhatsApp H24",
        "Programma ultra personalizzato",
        "Consulenze settimanali 1-a-1",
        "Accesso prioritario al team",
        "Analisi completa composizione corporea"
      ],
      badge: "Premium",
      badgeVariant: "secondary" as const,
      icon: Crown,
      color: "secondary"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            I Nostri Protocolli
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Coaching Strutturato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Scegli il protocollo più adatto ai tuoi obiettivi e al tuo livello di esperienza.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {protocols.map((protocol, index) => {
            const IconComponent = protocol.icon;
            return (
              <Card 
                key={index}
                className={`relative p-6 bg-card/50 backdrop-blur border-border/50 hover:bg-card/70 transition-all duration-300 hover:scale-105 ${
                  index === 1 ? 'ring-2 ring-primary/50' : ''
                }`}
              >
                {protocol.badge && (
                  <Badge 
                    variant={protocol.badgeVariant}
                    className="absolute -top-3 left-6"
                  >
                    {protocol.badge}
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 bg-${protocol.color}/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className={`w-8 h-8 text-${protocol.color}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {protocol.name}
                  </CardTitle>
                  <div className="text-3xl font-bold text-primary">
                    {protocol.price}
                  </div>
                  <p className="text-muted-foreground">
                    {protocol.duration} • {protocol.workouts}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {protocol.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full mt-6" 
                    variant={index === 1 ? "default" : "outline"}
                  >
                    Acquista {protocol.name.split(' ')[1]}
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