import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Heart, Calendar, MapPin } from "lucide-react";
import brunoPhoto from "@/assets/bruno-gigliotti.jpg";
import francescaPhoto from "@/assets/francesca-gigliotti.jpg";
export function BioSection() {
  return <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Il Nostro Team</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Chi Siamo
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professionisti qualificati dedicati al tuo successo nel fitness e benessere.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Personal Trainer Bio */}
          <Card className="p-8 hover:shadow-card transition-all duration-300">
            <CardContent className="p-0">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <img src={brunoPhoto} alt="Bruno Gigliotti" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Bruno Gigliotti</h3>
                  <p className="text-primary font-semibold">Personal Trainer Certificato</p>
                </div>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>Personal trainer con oltre 10 anni di esperienza, specializzato in ricomposizione corporea e preparazione atletica. Attualmente ricopro il ruolo di primo preparatore atletico in uno staff tecnico calcistico, con 2 anni di esperienza diretta nel settore. Ho un background solido nel mondo del fitness e della palestra, maturato in più di 8 anni di attività sul campo.

Vanto una carriera sportiva di 15 anni nell’atletica leggera, con partecipazioni a competizioni di livello internazionale, che mi ha permesso di sviluppare una profonda conoscenza del corpo umano e delle sue potenzialità. Ho inoltre maturato un anno di esperienza professionale nel settore fitness a Londra, ampliando le mie competenze in un contesto internazionale.</p>
                <p>
                  Il mio approccio combina scienza e pratica per creare programmi che 
                  trasformano il corpo e lo stile di vita in modo duraturo.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center text-sm">
                    <Award className="w-4 h-4 mr-2 text-primary" />
                    Certificato
                  </div>
                  <div className="flex items-center text-sm">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    +10 anni esperienza
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Nutrizionist Bio */}
          <Card className="p-8 hover:shadow-card transition-all duration-300">
            <CardContent className="p-0">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <img src="/lovable-uploads/f8deb0bc-b19a-4641-a0f9-ada6f2d813b4.png" alt="Dott.ssa Francesca Gigliotti" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Dott.ssa Francesca Gigliotti</h3>
                  <p className="text-secondary font-semibold">Dietologa Biologa</p>
                </div>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>laureata in Biologia Cellulare
e Molecolare all'Università di Torino. In seguito ho conseguito un Master di
Il livello in Nutrizione Clinica e un Master in Medicina della Riproduzione presso la Facoltà di
Medicina e Chirurgia di Torino. Partecipo costantemente a convegni e workshop per essere sempre aggiornata e fornire ai miei pazienti
consulenze efficaci e innovative.</p>
                <p>
                  Creo piani alimentari che rispettano le tue esigenze nutrizionali 
                  e si integrano perfettamente con il tuo stile di vita e obiettivi.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center text-sm">
                    <Heart className="w-4 h-4 mr-2 text-secondary" />
                    Biologia Nutrizione
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="w-4 h-4 mr-2 text-secondary" />
                    Consulenze Online/Studio
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quote Section */}
        <div className="text-center mt-16 mb-8">
          <div className="bg-card/50 backdrop-blur border border-border/50 rounded-lg p-8 max-w-3xl mx-auto">
            <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-4">
              "Abbiamo aiutato oltre 100 persone a cambiare corpo e stile di vita con metodo e passione."
            </blockquote>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100+</div>
            <div className="text-muted-foreground">Clienti Trasformati</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">95%</div>
            <div className="text-muted-foreground">Risultati Raggiunti</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Supporto WhatsApp</div>
          </div>
        </div>
      </div>
    </section>;
}