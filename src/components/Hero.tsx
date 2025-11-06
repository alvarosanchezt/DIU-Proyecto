import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, MapPin } from "lucide-react";
import heroImage from "@/assets/utfsmFrontis.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Campus universitario moderno"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Tu Futuro
            <span className="block bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              Comienza Aquí
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Descubre una educación de excelencia que transformará tu carrera profesional. 
            Más de 40 carreras, 5 sedes y oportunidades de becas esperándote.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent-light shadow-glow text-lg px-8 py-4 h-auto"
            >
              Explorar Carreras
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              className="bg-blue-600 text-white hover:bg-blue-700 border-0 text-lg px-8 py-4 h-auto"
            >
              Solicitar Información
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary-foreground">19,000+</h3>
              <p className="text-primary-foreground/80">Estudiantes</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary-foreground">30+</h3>
              <p className="text-primary-foreground/80">Carreras</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary-foreground">5</h3>
              <p className="text-primary-foreground/80">Sedes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;