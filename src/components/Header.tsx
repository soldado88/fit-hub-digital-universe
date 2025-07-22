import { Button } from "@/components/ui/button";
import { Dumbbell, User, ShoppingBag } from "lucide-react";

export function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-md border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Dumbbell className="w-8 h-8 text-primary" />
          <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            F&Bfisicalbuilding
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-foreground hover:text-primary transition-colors">
            Home
          </a>
          <a href="/schede-e-diete" className="text-foreground hover:text-primary transition-colors">
            Schede & Diete
          </a>
          <a href="/consulenze" className="text-foreground hover:text-primary transition-colors">
            Consulenze
          </a>
          <a href="/prodotti" className="text-foreground hover:text-primary transition-colors">
            Prodotti
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
    </header>
  );
}