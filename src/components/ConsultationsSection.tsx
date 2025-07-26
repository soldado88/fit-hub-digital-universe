import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, GraduationCap, Clock, MapPin } from "lucide-react";
export function ConsultationsSection() {
  const consultations = [{
    title: "Consulenza con Personal Trainer",
    price: "€34,99",
    professional: "Luca",
    icon: User,
    description: "Analisi completa del tuo stato fisico, definizione obiettivi e creazione piano allenamento personalizzato.",
    duration: "60 minuti",
    modality: "Online o in studio",
    color: "primary"
  }, {
    title: "Consulenza con Dietologa",
    price: "€49,99",
    professional: "Dott.ssa Martina",
    icon: GraduationCap,
    description: "Valutazione nutrizionale completa, piano alimentare personalizzato e educazione alimentare.",
    duration: "90 minuti",
    modality: "Online o in studio",
    color: "secondary"
  }];
  return <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Consulenze Private
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Consulenza Online</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Prenota la tua consulenza privata tramite calendario integrato. 
            Ricevi conferma via email e WhatsApp.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {consultations.map((consultation, index) => {
          const IconComponent = consultation.icon;
          return <Card key={index} className="p-6 bg-card/50 backdrop-blur border-border/50 hover:bg-card/70 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 bg-${consultation.color}/20 rounded-full flex items-center justify-center mb-4`}>
                    <IconComponent className={`w-8 h-8 text-${consultation.color}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">
                    {consultation.title}
                  </CardTitle>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {consultation.price}
                  </div>
                  
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {consultation.description}
                  </p>
                  
                  <div className="space-y-2">
                    
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>Modalità: {consultation.modality}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    Prenota ora
                  </Button>
                </CardContent>
              </Card>;
        })}
        </div>

        <div className="text-center">
          <div className="bg-card/50 backdrop-blur border border-border/50 rounded-lg p-6 max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Processo di Prenotazione
            </h3>
            <p className="text-muted-foreground text-sm">
              📅 Seleziona la data → 📧 Ricevi conferma via email → 📱 Conferma WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>;
}