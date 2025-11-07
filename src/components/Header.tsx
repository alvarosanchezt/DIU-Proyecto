import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoPath from "@/assets/logo-usm-color.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Carreras", href: "#carreras" },
    { name: "Postgrados", href: "#postgrados" },
    { name: "Sedes", href: "#sedes" },
    { name: "Admisión", href: "#admision" },
    { name: "Fechas", href: "#fechas" },
    { name: "Becas", href: "#becas" },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logoPath} 
              alt="Universidad Logo" 
              className="h-14 w-auto object-contain"
            />
            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Admisión USM
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            <Button 
              variant="default" 
              className="w-full bg-gradient-hero hover:opacity-90"
              onClick={() => window.open("https://admision.usm.cl/postulaciones-list", "_blank")}>
              Postular Ahora
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border border-border rounded-lg mt-2 shadow-card">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 pt-2">
                <Button 
                  variant="default" 
                  className="w-full bg-gradient-hero hover:opacity-90"
                  onClick={() => window.open("https://admision.usm.cl/postulaciones-list", "_blank")}>
                  Postular Ahora
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;