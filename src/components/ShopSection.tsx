import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Package, Shirt, Dumbbell, ShoppingBag, Truck, CreditCard } from "lucide-react";

export function ShopSection() {
  const categories = [
    {
      name: "Integratori",
      icon: Package,
      description: "Proteine, creatina, vitamine e aminoacidi per supportare i tuoi allenamenti",
      color: "primary",
      products: ["Whey Protein", "Creatina Monoidrato", "BCAA", "Multivitaminico"]
    },
    {
      name: "Abbigliamento",
      icon: Shirt,
      description: "Tute, top, leggings e abbigliamento tecnico per ogni tipo di allenamento",
      color: "secondary", 
      products: ["Tute sportive", "Top fitness", "Leggings", "Magliette tecniche"]
    },
    {
      name: "Accessori",
      icon: Dumbbell,
      description: "Fasce elastiche, shaker, accessori per l'allenamento e il recupero",
      color: "accent",
      products: ["Fasce elastiche", "Shaker premium", "Tappetini yoga", "Guanti palestra"]
    }
  ];

  const features = [
    { icon: Truck, text: "Spedizione automatica" },
    { icon: CreditCard, text: "Pagamenti Stripe/PayPal" },
    { icon: Package, text: "Prodotti selezionati" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Shop
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Prodotti Sportivi
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Integratori, abbigliamento e accessori selezionati per ottimizzare 
            i tuoi risultati e performance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur border-border/50 hover:bg-card/70 transition-all duration-300 group"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 bg-${category.color}/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className={`w-8 h-8 text-${category.color}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {category.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-center">
                    {category.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm">Prodotti disponibili:</h4>
                    <ul className="space-y-1">
                      {category.products.map((product, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {product}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="flex items-center justify-center space-x-3 bg-card/30 rounded-lg p-4">
                <IconComponent className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">{feature.text}</span>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="text-lg px-8 py-4">
            <ShoppingBag className="w-5 h-5 mr-2" />
            Entra nel negozio
          </Button>
        </div>
      </div>
    </section>
  );
}