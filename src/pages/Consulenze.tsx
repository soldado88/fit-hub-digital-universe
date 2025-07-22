import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Stethoscope, Calendar, Clock, Video, MessageCircle, CheckCircle, Star } from "lucide-react";

export default function Consulenze() {
  const services = [
    {
      id: 1,
      title: "Consulenza Personal Training",
      description: "Consulenza privata 1-on-1 con personal trainer qualificato",
      price: "€49",
      duration: "1 ora",
      type: "Online",
      features: [
        "Analisi del tuo stato fisico attuale", 
        "Creazione piano di allenamento personalizzato",
        "Spiegazione tecnica degli esercizi",
        "Follow-up via WhatsApp"
      ],
      badge: "Personal Trainer",
      icon: User,
      color: "primary"
    },
    {
      id: 2,
      title: "Consulenza Nutrizionale",
      description: "Consulenza privata 1-on-1 con dietologa nutrizionista nel suo studio",
      price: "€49",
      duration: "1 ora", 
      type: "In Studio",
      features: [
        "Anamnesi alimentare completa",
        "Piano nutrizionale personalizzato", 
        "Educazione alimentare",
        "Follow-up professionale"
      ],
      badge: "Dietologa Certificata",
      icon: Stethoscope,
      color: "secondary"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="bg-gradient-to-b from-background to-muted/20">
      <div className="pt-20 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Consulenze Private</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Consulenze 1-a-1
              <span className="block text-primary mt-2">Personalizzate</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ricevi supporto personalizzato dai nostri esperti. Consulenze individuali 
              per creare il tuo percorso su misura.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.id} className="relative group hover:shadow-card transition-all duration-500 hover:-translate-y-2 border-border/50">
                  <Badge 
                    variant="default" 
                    className={`absolute -top-2 -right-2 z-10 ${
                      service.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                    }`}
                  >
                    {service.badge}
                  </Badge>
                  
                  <CardHeader className="text-center pb-4">
                    <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 ${
                      service.color === 'primary' ? 'bg-gradient-primary' : 'bg-gradient-secondary'
                    }`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Price and Info */}
                    <div className="text-center space-y-2">
                      <div className="text-4xl font-bold text-primary">{service.price}</div>
                      <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {service.duration}
                        </div>
                        <div className="flex items-center">
                          <Video className="w-4 h-4 mr-1" />
                          {service.type}
                        </div>
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-center">Cosa Include:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <CheckCircle className="w-4 h-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>

                  <CardFooter className="pt-4">
                    <Button 
                      className="w-full group-hover:scale-105 transition-transform text-lg py-6" 
                      variant={service.color === 'primary' ? 'default' : 'secondary'}
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Prenota Consulenza
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-hero p-8 rounded-2xl text-white text-center">
            <MessageCircle className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Hai Domande?</h3>
            <p className="text-xl mb-6 opacity-90 max-w-2xl mx-auto">
              Contattaci per maggiori informazioni sulle nostre consulenze o per 
              discutere le tue esigenze specifiche.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contatta WhatsApp
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Richiedi Info
              </Button>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-8">Cosa Dicono i Nostri Clienti</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "La consulenza con il personal trainer mi ha cambiato completamente l'approccio all'allenamento. 
                  Programma super personalizzato e risultati incredibili!"
                </p>
                <div className="font-semibold">Marco R.</div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "La dietologa è fantastica! Professionale e competente, mi ha aiutato a raggiungere 
                  i miei obiettivi con un piano nutrizionale perfetto."
                </p>
                <div className="font-semibold">Giulia M.</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}