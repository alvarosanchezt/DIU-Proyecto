import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Users, Building2, FacebookIcon, InstagramIcon } from "lucide-react";
import Carreras from "./Carreras";

const sedes = [
  {
    nombre: "Campus Valparaíso",
    direccion: "Avenida España 1680, Valparaíso",
    telefono: "+56 32 265 4935",
    email: "admision@usm.cl",
    FacebookIcon: "@usmvalparaiso",
    InstagramIcon: "@usmvalparaiso",
    imagen: "🏛️"
  },
  {
    nombre: "Campus San Joaquín",
    direccion: "Avenida Vicuña Mackenna 3939, San Joaquín, Santiago",
    telefono: "+56 23 203 7040 | +56 23 203 7041",
    email: "admision.santiago@usm.cl",
    FacebookIcon: "@usmsantiago",
    InstagramIcon: "@usmsanjoaquin",
    imagen: "🏢"
  },
  {
    nombre: "Campus Vitacura",
    direccion: "Avenida Santa María 6400, Vitacura, Santiago",
    telefono: "+56 23 202 8040 | +56 23 202 8041",
    email: "admision.santiago@usm.cl",
    FacebookIcon: "@usmsantiago",
    InstagramIcon: "@usmvitacura",
    imagen: "🏫"
  },
  {
    nombre: "Sede Viña del Mar",
    direccion: "Avenida Federico Santa María 6090, Viña del Mar",
    telefono: "+56 32 227 7860 | +56 32 227 7862",
    email: "admision.vina@usm.cl",
    FacebookIcon: "@usmvinadelmar",
    InstagramIcon: "@usmvinadelmar",
    imagen: "🎓"
  },
  {
    nombre: "Sede Concepción",
    direccion: "Arteaga Alemparte 943, Hualpén, Concepción",
    telefono: "+56 41 240 7528",
    email: "admision.concepcion@usm.cl",
    FacebookIcon: "@usmconcepcion",
    InstagramIcon: "@usmconcepcion",
    imagen: "🏫"
  }
];
const linktour = "https://tour360.usm.cl"

const Sedes = () => {
  return (
    <section id="sedes" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nuestras
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Sedes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Presencia nacional con infraestructura moderna y tecnología de vanguardia.
            Encuentra la sede más cercana a ti y comienza tu aventura universitaria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {sedes.map((sede, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{sede.imagen}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {sede.nombre}
                    </h3>
                    
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="text-sm">{sede.direccion}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-secondary" />
                        <span className="text-sm">{sede.telefono}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-accent" />
                        <span className="text-sm">{sede.email}</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-6 pt-4 border-t border-border">
                      <div className="flex items-center space-x-2">
                        <FacebookIcon className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">{sede.FacebookIcon}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <InstagramIcon className="h-4 w-4 text-secondary" />
                        <span className="text-sm font-medium">{sede.InstagramIcon}</span>
                      </div>
                    </div>

                    <Button 
                      className="w-full mt-4 bg-gradient-hero hover:opacity-90 text-primary-foreground"
                      variant="default"
                      onClick={() => {
                        const carrerasSection = document.getElementById("carreras");
                        if (carrerasSection) {
                          carrerasSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      Más Información
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="max-w-2xl mx-auto border-dashed border-2 border-muted hover:border-primary transition-colors duration-300">
            <CardContent className="p-8">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                ¿Quieres conocer nuestras instalaciones?
              </h3>
              <p className="text-muted-foreground mb-4">
                Explora nuestras sedes desde cualquier lugar con nuestro tour virtual de 360°.
                Conoce las instalaciones, laboratorios y espacios de estudio de forma inmersiva.
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open(linktour, '_blank')}
                >
                  Tour Virtual 360°
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Sedes;