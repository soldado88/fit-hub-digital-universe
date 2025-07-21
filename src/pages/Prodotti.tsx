import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Zap, Shirt, Pill, Star, TrendingUp } from "lucide-react";

export default function Prodotti() {
  const physicalProducts = [
    {
      id: 1,
      title: "Whey Protein Premium",
      description: "Proteine del siero del latte di alta qualità per il recupero muscolare",
      price: "€39.99",
      originalPrice: "€49.99",
      rating: 4.8,
      reviews: 156,
      image: "💪",
      badge: "Best Seller",
      category: "Integratori"
    },
    {
      id: 2,
      title: "Pre-Workout Explosive",
      description: "Formula avanzata per energia e focus durante l'allenamento",
      price: "€29.99",
      originalPrice: null,
      rating: 4.9,
      reviews: 89,
      image: "⚡",
      badge: "Nuovo",
      category: "Integratori"
    },
    {
      id: 3,
      title: "Creatina Monoidrata",
      description: "Creatina pura per aumentare forza e potenza muscolare",
      price: "€19.99",
      originalPrice: "€24.99",
      rating: 4.7,
      reviews: 203,
      image: "🔥",
      badge: "Offerta",
      category: "Integratori"
    },
    {
      id: 4,
      title: "T-Shirt FitLife Pro",
      description: "Maglietta tecnica traspirante per allenamenti intensi",
      price: "€24.99",
      originalPrice: null,
      rating: 4.6,
      reviews: 78,
      image: "👕",
      badge: null,
      category: "Abbigliamento"
    },
    {
      id: 5,
      title: "Leggings Performance",
      description: "Leggings ad alta compressione per prestazioni ottimali",
      price: "€34.99",
      originalPrice: "€44.99",
      rating: 4.8,
      reviews: 124,
      image: "🩱",
      badge: "Popolare",
      category: "Abbigliamento"
    },
    {
      id: 6,
      title: "Shaker Premium",
      description: "Shaker professionale con compartimenti per integratori",
      price: "€14.99",
      originalPrice: null,
      rating: 4.5,
      reviews: 67,
      image: "🥤",
      badge: null,
      category: "Accessori"
    }
  ];

  const categories = ["Tutti", "Integratori", "Abbigliamento", "Accessori"];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="bg-background">
      <div className="pt-20 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Shop Online</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Integratori &
              <span className="block text-secondary mt-2">Abbigliamento</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I migliori prodotti selezionati per supportare il tuo percorso fitness, 
              dalle proteine di qualità premium all'abbigliamento tecnico.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button 
                key={category} 
                variant={category === "Tutti" ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {physicalProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50">
                {product.badge && (
                  <Badge 
                    variant="default" 
                    className={`absolute top-4 left-4 z-10 ${
                      product.badge === 'Best Seller' ? 'bg-primary' :
                      product.badge === 'Nuovo' ? 'bg-accent' :
                      product.badge === 'Offerta' ? 'bg-destructive' : 'bg-secondary'
                    }`}
                  >
                    {product.badge}
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4 relative">
                  <div className="text-6xl mb-4">{product.image}</div>
                  <CardTitle className="text-lg font-bold">{product.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Rating */}
                  <div className="flex items-center justify-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews} recensioni)
                    </span>
                  </div>
                  
                  {/* Price */}
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    {product.originalPrice && (
                      <div className="flex items-center justify-center text-sm text-accent mt-1">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        Risparmi {(parseFloat(product.originalPrice.replace('€', '')) - parseFloat(product.price.replace('€', ''))).toFixed(2)}€
                      </div>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="pt-4 space-y-2">
                  <Button className="w-full group-hover:scale-105 transition-transform">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Aggiungi al Carrello
                  </Button>
                  <Button variant="outline" className="w-full">
                    Dettagli Prodotto
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Special Offer Banner */}
          <div className="mt-16 bg-gradient-secondary p-8 rounded-2xl text-white text-center">
            <Zap className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">Offerta Speciale Bundle</h3>
            <p className="text-xl mb-6 opacity-90">
              Acquista 3 integratori e ricevi il 20% di sconto + spedizione gratuita
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Crea il Tuo Bundle
              </Button>
              <span className="text-lg font-semibold">Codice: BUNDLE20</span>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}