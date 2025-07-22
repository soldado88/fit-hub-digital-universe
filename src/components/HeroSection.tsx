import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Star } from "lucide-react";
import { QuestionnaireModal } from "@/components/QuestionnaireModal";
import gymHero from "@/assets/gym-hero.jpg";

export function HeroSection() {
  const [isQuestionnaireOpen, setIsQuestionnaireOpen] = useState(false);

  return (
    <>
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${gymHero})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8 animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">Coach Online #1 in Italia</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Il Tuo Coach
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Fitness Online
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Coaching personalizzato, consulenze 1-a-1 con personal trainer e dietologa qualificata. 
            Raggiungi i tuoi obiettivi ovunque tu sia.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => setIsQuestionnaireOpen(true)}
            >
              Inizia il Tuo Percorso
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white hover:text-black">
              <Play className="w-5 h-5 mr-2" />
              Guarda il Video
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">200+</div>
              <div className="text-white/80 mt-2">Clienti Online</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary">1-a-1</div>
              <div className="text-white/80 mt-2">Consulenze Private</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent">24/7</div>
              <div className="text-white/80 mt-2">Supporto WhatsApp</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
      </section>
      
      <QuestionnaireModal 
        isOpen={isQuestionnaireOpen} 
        onClose={() => setIsQuestionnaireOpen(false)} 
      />
    </>
  );
}