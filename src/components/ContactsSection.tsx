import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Instagram, 
  Facebook, 
  Clock,
  MessageCircle
} from "lucide-react";

export function ContactsSection() {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Sede Fisica",
      value: "Via Fitness 123, Milano",
      subtext: "Studio privato con attrezzature professionali"
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@velocestudio.it",
      subtext: "Rispondiamo entro 24 ore"
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+39 123 456 7890",
      subtext: "Supporto clienti H24"
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: "Instagram", handle: "@velocestudio" },
    { icon: Facebook, name: "Facebook", handle: "VÈLOCE Studio" }
  ];

  const studioHours = [
    { day: "Lunedì - Venerdì", hours: "7:00 - 21:00" },
    { day: "Sabato", hours: "8:00 - 19:00" },
    { day: "Domenica", hours: "9:00 - 18:00" }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Contatti & Info
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Parliamo del Tuo Obiettivo
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Siamo qui per rispondere alle tue domande e aiutarti a iniziare 
            il tuo percorso di trasformazione.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <Card key={index} className="p-6 bg-card/50 backdrop-blur border-border/50 hover:bg-card/70 transition-colors">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground">
                    {contact.label}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <div className="font-semibold text-foreground">
                    {contact.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {contact.subtext}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Studio Hours */}
          <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-secondary" />
              </div>
              <CardTitle className="text-xl font-bold text-foreground">
                Orari Studio
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {studioHours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-muted-foreground">{schedule.day}</span>
                  <span className="font-semibold text-foreground">{schedule.hours}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Social Media */}
          <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Instagram className="w-8 h-8 text-accent" />
              </div>
              <CardTitle className="text-xl font-bold text-foreground">
                Seguici sui Social
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <IconComponent className="w-5 h-5 text-primary" />
                      <span className="font-medium text-foreground">{social.name}</span>
                    </div>
                    <span className="text-muted-foreground text-sm">{social.handle}</span>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-4">
            <MessageCircle className="w-5 h-5 mr-2" />
            Contattaci su WhatsApp
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-4">
            <Mail className="w-5 h-5 mr-2" />
            Richiedi più info
          </Button>
        </div>
      </div>
    </section>
  );
}