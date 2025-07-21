import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Stethoscope, Award, Heart, Calendar, MapPin } from "lucide-react";

export function BioSection() {
  return (
    <section className="py-20 bg-muted/20">
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
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center">
                  <User className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Marco Fitness</h3>
                  <p className="text-primary font-semibold">Personal Trainer Certificato</p>
                </div>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Con oltre 8 anni di esperienza nel coaching online, specializzato in 
                  allenamento funzionale e bodybuilding. Certificato ISSA e costantemente 
                  aggiornato sulle ultime metodologie di allenamento.
                </p>
                <p>
                  La mia missione è aiutarti a raggiungere i tuoi obiettivi attraverso 
                  programmi personalizzati e un supporto costante durante tutto il percorso.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center text-sm">
                    <Award className="w-4 h-4 mr-2 text-primary" />
                    Certificato ISSA
                  </div>
                  <div className="flex items-center text-sm">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    8+ anni esperienza
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Nutrizionist Bio */}
          <Card className="p-8 hover:shadow-card transition-all duration-300">
            <CardContent className="p-0">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center">
                  <Stethoscope className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Dott.ssa Giulia Nutrizione</h3>
                  <p className="text-secondary font-semibold">Dietologa Nutrizionista</p>
                </div>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Laureata in Dietistica con specializzazione in nutrizione sportiva. 
                  Gestisce il suo studio privato dove offre consulenze personalizzate per 
                  ogni tipologia di cliente, dall'atleta al sedentario.
                </p>
                <p>
                  Credo in un approccio olistico alla nutrizione, creando piani alimentari 
                  sostenibili che si adattano al tuo stile di vita e alle tue preferenze.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center text-sm">
                    <Heart className="w-4 h-4 mr-2 text-secondary" />
                    Spec. Nutrizione Sportiva
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="w-4 h-4 mr-2 text-secondary" />
                    Studio Privato
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">200+</div>
            <div className="text-muted-foreground">Clienti Seguiti</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">95%</div>
            <div className="text-muted-foreground">Soddisfazione Clienti</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">24/7</div>
            <div className="text-muted-foreground">Supporto Online</div>
          </div>
        </div>
      </div>
    </section>
  );
}