import { Button } from "@/components/ui/button";
import gymHero from "@/assets/gym-hero.jpg";

export function HomePageHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${gymHero})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            VÈLOCE Studio
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
          Trasforma il tuo corpo, trasforma la tua vita.<br />
          Allenamenti personalizzati e nutrizione su misura per raggiungere i tuoi obiettivi.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="hero" className="text-lg px-8 py-4">
            Inizia il tuo percorso
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-black">
            Scopri di più
          </Button>
        </div>
      </div>
    </section>
  );
}