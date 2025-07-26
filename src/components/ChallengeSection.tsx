import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Flame, Dumbbell, Calendar, Users, MessageCircle, Trophy } from "lucide-react";
export function ChallengeSection() {
  const challenges = [{
    name: "THE CHALLENGE SLIM",
    emoji: "🔥",
    description: "Dimagrimento rapido",
    icon: Flame,
    color: "text-red-500"
  }, {
    name: "THE CHALLENGE BUILD",
    emoji: "💪",
    description: "Tonificazione intensa",
    icon: Dumbbell,
    color: "text-blue-500"
  }];
  const includes = [{
    icon: Calendar,
    text: "Allenamenti giornalieri"
  }, {
    icon: Users,
    text: "Piano alimentare"
  }, {
    icon: MessageCircle,
    text: "Gruppo motivazionale"
  }, {
    icon: MessageCircle,
    text: "Supporto WhatsApp"
  }, {
    icon: Trophy,
    text: "Premio finale (opzionale)"
  }];
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
            The Challenge
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Challenge 30 Giorni</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trasforma il tuo corpo in 30 giorni con la nostra sfida intensiva. 
            Due percorsi dedicati per obiettivi specifici.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {challenges.map((challenge, index) => {
          const IconComponent = challenge.icon;
          return <Card key={index} className="p-6 bg-card/50 backdrop-blur border-border/50 hover:bg-card/70 transition-all duration-300 text-center">
                <CardHeader className="pb-4">
                  <div className="text-6xl mb-4">{challenge.emoji}</div>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {challenge.name}
                  </CardTitle>
                  <p className={`text-lg font-medium ${challenge.color}`}>
                    {challenge.description}
                  </p>
                </CardHeader>
              </Card>;
        })}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Durata: 30 giorni
              </h3>
              <p className="text-muted-foreground">
                Un mese di allenamento intensivo per risultati visibili
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Incluso nel Challenge:
                </h4>
                <ul className="space-y-3">
                  {includes.map((item, index) => {
                  const IconComponent = item.icon;
                  return <li key={index} className="flex items-center space-x-3">
                        <IconComponent className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">{item.text}</span>
                      </li>;
                })}
                </ul>
              </div>

              <div className="bg-muted/30 rounded-lg p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">
                    COMING SOON
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Prossima apertura
                  </p>
                  <div className="bg-gradient-secondary bg-clip-text text-transparent font-semibold">
                    Preparati alla sfida!
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                <Users className="w-5 h-5 mr-2" />
                Iscriviti alla lista d'attesa
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>;
}