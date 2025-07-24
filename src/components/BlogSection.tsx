import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, ArrowRight } from "lucide-react";

export function BlogSection() {
  const categories = [
    { name: "Alimentazione", color: "bg-primary/10 text-primary" },
    { name: "Allenamento", color: "bg-secondary/10 text-secondary" },
    { name: "Consigli rapidi", color: "bg-accent/10 text-accent" },
    { name: "News & Eventi", color: "bg-destructive/10 text-destructive" }
  ];

  const articles = [
    {
      title: "5 errori che ti impediscono di dimagrire",
      category: "Alimentazione",
      excerpt: "Scopri gli errori più comuni che sabotano i tuoi sforzi di perdita di peso e come evitarli.",
      readTime: "5 min",
      featured: true
    },
    {
      title: "Cardio prima o dopo i pesi?",
      category: "Allenamento", 
      excerpt: "La scienza dietro l'ordine degli esercizi per massimizzare i risultati del tuo workout.",
      readTime: "3 min",
      featured: false
    },
    {
      title: "La dieta perfetta non esiste, ma la tua sì",
      category: "Alimentazione",
      excerpt: "Come creare un piano alimentare personalizzato che si adatta al tuo stile di vita.",
      readTime: "7 min",
      featured: false
    },
    {
      title: "THE CHALLENGE in arrivo!",
      category: "News & Eventi",
      excerpt: "Tutto quello che devi sapere sulla nostra sfida di trasformazione di 30 giorni.",
      readTime: "2 min",
      featured: true
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Blog & News
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Educazione e Motivazione
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Articoli, consigli e aggiornamenti per il tuo percorso di trasformazione.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <Badge key={index} variant="secondary" className={category.color}>
              {category.name}
            </Badge>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {articles.map((article, index) => (
            <Card 
              key={index}
              className={`p-6 bg-card/50 backdrop-blur border-border/50 hover:bg-card/70 transition-all duration-300 cursor-pointer group ${
                article.featured ? 'md:col-span-2' : ''
              }`}
            >
              <CardHeader className="p-0 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {article.category}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="w-3 h-3 mr-1" />
                    {article.readTime}
                  </div>
                </div>
                <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="p-0">
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center text-primary text-sm font-medium group-hover:underline">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Leggi articolo
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            <BookOpen className="w-5 h-5 mr-2" />
            Vai al Blog
          </Button>
        </div>
      </div>
    </section>
  );
}