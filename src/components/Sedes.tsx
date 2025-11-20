import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, FacebookIcon, InstagramIcon, CalendarSearch } from "lucide-react";

import img_concepcion from '@/assets/fondo_concepcio╠ün.png';
import img_sanjoaquin from '@/assets/fondo_sanjoaquin.png';
import img_valparaiso from '@/assets/fondo_valparai╠üso.png';
import img_vina from '@/assets/fondo_vin╠âa.png';
import img_vitacura from '@/assets/fondo_vitacura.png';

const sedes = [
  {
    nombre: "Campus Valparaíso",
    direccion: "Avenida España 1680, Valparaíso",
    telefono: "+56 32 265 4935",
    email: "admision@usm.cl",
    FacebookIcon: "@usmvalparaiso",
    InstagramIcon: "@usmvalparaiso",
    imagen: img_valparaiso,
    tour: "https://tour360.usm.cl/casa-central-valparaiso",
    filtro:"VALPARAÍSO"
  },
  {
    nombre: "Campus San Joaquín",
    direccion: "Avenida Vicuña Mackenna 3939, San Joaquín, Santiago",
    telefono: "+56 23 203 7040 | +56 23 203 7041",
    email: "admision.santiago@usm.cl",
    FacebookIcon: "@usmsantiago",
    InstagramIcon: "@usmsanjoaquin",
    imagen: img_sanjoaquin,
    tour: "https://tour360.usm.cl/san-joaquin",
    filtro:"SAN JOAQUÍN"
  },
  {
    nombre: "Campus Vitacura",
    direccion: "Avenida Santa María 6400, Vitacura, Santiago",
    telefono: "+56 23 202 8040 | +56 23 202 8041",
    email: "admision.santiago@usm.cl",
    FacebookIcon: "@usmsantiago",
    InstagramIcon: "@usmvitacura",
    imagen: img_vitacura,
    tour: "https://tour360.usm.cl/vitacura",
    filtro:"VITACURA"
  },
  {
    nombre: "Sede Viña del Mar",
    direccion: "Avenida Federico Santa María 6090, Viña del Mar",
    telefono: "+56 32 227 7860 | +56 32 227 7862",
    email: "admision.vina@usm.cl",
    FacebookIcon: "@usmvinadelmar",
    InstagramIcon: "@usmvinadelmar",
    imagen: img_vina,
    tour: "https://tour360.usm.cl/vina-del-mar",
    filtro:"VIÑA DEL MAR"
  },
  {
    nombre: "Sede Concepción",
    direccion: "Arteaga Alemparte 943, Hualpén, Concepción",
    telefono: "+56 41 240 7528",
    email: "admision.concepcion@usm.cl",
    FacebookIcon: "@usmconcepcion",
    InstagramIcon: "@usmconcepcion",
    imagen: img_concepcion,
    tour:"https://tour360.usm.cl/concepcion",
    filtro:"CONCEPCIÓN"
  }
];
const linkEventos = "https://usm.cl/eventos";

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
            Encuentra la sede más cercana a ti y comienza tu aventura universitaria. Aprovecha de explorar nuestras sedes desde cualquier lugar con nuestro tour virtual de 360°. Conoce las instalaciones, laboratorios y espacios de estudio de forma inmersiva.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {sedes.map((sede, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border overflow-hidden flex flex-col">

              <div className="relative h-30 w-full overflow-hidden">
                <img 
                  src={sede.imagen} 
                  alt={sede.nombre} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 right-4">
                   <h3 className="text-xl font-bold text-white shadow-sm">
                      {sede.nombre}
                   </h3>
                </div>
              </div>

              <CardContent className="p-6 flex-1 flex flex-col">

                <div className="space-y-3 text-muted-foreground mb-6 flex-1">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm leading-tight">{sede.direccion}</span>
                  </div>
                    
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-secondary shrink-0" />
                    <span className="text-sm">{sede.telefono}</span>
                  </div>
                      
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-sm">{sede.email}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6 pt-4 border-t border-border">
                  <div className="flex items-center space-x-2">
                    <FacebookIcon className="h-4 w-4 text-primary" />
                    <span className="text-xs font-medium text-muted-foreground">{sede.FacebookIcon}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <InstagramIcon className="h-4 w-4 text-secondary" />
                    <span className="text-xs font-medium text-muted-foreground">{sede.InstagramIcon}</span>
                  </div>
                </div>
                {/* BOTON AGREGADO DE TOUR VIRTUAL 360°*/}
                <Button 
                  className="w-full mt-2 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
                  variant="outline"
                  onClick={() => window.open(sede.tour, '_blank')}
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Tour Virtual 360°
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="max-w-2xl mx-auto border-dashed border-2 border-muted hover:border-primary transition-colors duration-300">
            <CardContent className="p-8">
              <CalendarSearch className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                ¿Tienes tiempo libre?
              </h3>
              <p className="text-muted-foreground mb-4">
                La universidad realiza diferentes eventos y actividades para que puedas participar!
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open(linkEventos, '_blank')}
                >
                  Eventos
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Sedes;