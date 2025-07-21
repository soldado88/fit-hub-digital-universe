import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dumbbell, Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Dumbbell className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold">FitLife</span>
            </div>
            <p className="text-background/70 leading-relaxed">
              La tua destinazione per un fitness completo. Trasformiamo i tuoi obiettivi 
              in risultati concreti con programmi personalizzati e supporto professionale.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Link Rapidi</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-background/70 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#prodotti-digitali" className="text-background/70 hover:text-primary transition-colors">
                  Schede & Diete
                </a>
              </li>
              <li>
                <a href="#prodotti-fisici" className="text-background/70 hover:text-primary transition-colors">
                  Prodotti
                </a>
              </li>
              <li>
                <a href="#chi-siamo" className="text-background/70 hover:text-primary transition-colors">
                  Chi Siamo
                </a>
              </li>
              <li>
                <a href="#contatti" className="text-background/70 hover:text-primary transition-colors">
                  Contatti
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contatti</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-background/70">+39 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-background/70">info@fitlife.it</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-background/70">Via Roma 123, Milano</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Newsletter</h4>
            <p className="text-background/70 text-sm">
              Ricevi consigli fitness, offerte esclusive e novità direttamente nella tua email.
            </p>
            <div className="space-y-2">
              <Input 
                type="email" 
                placeholder="La tua email" 
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button variant="default" className="w-full">
                Iscriviti
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/70 text-sm">
              © 2024 FitLife. Tutti i diritti riservati.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-background/70 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#termini" className="text-background/70 hover:text-primary transition-colors">
                Termini di Servizio
              </a>
              <a href="#cookie" className="text-background/70 hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}