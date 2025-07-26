import { Button } from "@/components/ui/button";
import { User, ShoppingBag } from "lucide-react";
export function Header() {
  return <header className="bg-background/80 backdrop-blur-md border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/lovable-uploads/7de606fb-2965-43b6-9a53-12ad3b87dae4.png" alt="TimeToUp Logo" className="w-8 h-8" />
          <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            TimeToUp
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-foreground hover:text-primary transition-colors">
            Home
          </a>
          <a href="/chi-siamo" className="text-foreground hover:text-primary transition-colors">Bio</a>
          <a href="/protocolli" className="text-foreground hover:text-primary transition-colors">
            Protocolli
          </a>
          <a href="/challenge" className="text-foreground hover:text-primary transition-colors"> Challenge</a>
          <a href="/shop" className="text-foreground hover:text-primary transition-colors">
            Shop
          </a>
          <a href="/blog" className="text-foreground hover:text-primary transition-colors">Blog </a>
          <a href="/prenota" className="text-foreground hover:text-primary transition-colors">
            Prenota
          </a>
          <a href="/contatti" className="text-foreground hover:text-primary transition-colors">
            Contatti
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <ShoppingBag className="w-5 h-5" />
          </Button>
          <Button variant="outline">
            <User className="w-4 h-4 mr-2" />
            Accedi
          </Button>
          <Button variant="hero" className="hidden md:inline-flex">
            Inizia Ora
          </Button>
        </div>
      </div>
    </header>;
}