import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Clock, 
  AlertCircle,
  CheckCircle2,
  Timer,
  ArrowRight
} from "lucide-react";

const cronograma = [
  {
    fecha: "25 septiembre",
    evento: "Información Admisión 2026",
    descripcion: "Publicación Oferta Definitiva de Carreras, Vacantes y Ponderaciones, Admisión 2026",
    estado: "activo",
    icono: Calendar,
    color: "bg-primary"
  },
  {
    fecha: "8 octubre",
    evento: "Demre",
    descripcion: "Apertura del Simulador de Postulaciones",
    estado: "proximo",
    icono: Clock,
    color: "bg-secondary"
  },
  {
    fecha: "20 noviembre",
    evento: "Demre",
    descripcion: "Publicación oficial Servicios y Beneficios Universitarios",
    estado: "proximo",
    icono: CheckCircle2,
    color: "bg-accent"
  },
  {
    fecha: "1 diciembre",
    evento: "PAES - Día 1",
    descripcion: "Rendición PAES Competencia Matemática 2 (M2) 15:00",
    estado: "proximo",
    icono: CheckCircle2,
    color: "bg-primary"
  },
  {
    fecha: "2 diciembre ",
    evento: "PAES - Día 2",
    descripcion: "Rendición PAES Competencia Lectora 09:00",
    estado: "futuro",
    icono: Calendar,
    color: "bg-secondary"
  },
  {
    fecha: "2 diciembre",
    evento: "PAES - Día 3",
      descripcion: "Rendición PAES electiva de Ciencias 15:00",
    estado: "futuro",
    icono: Clock,
    color: "bg-secondary"
  },
  {
    fecha: "3 diciembre",
    evento: "PAES - Día 3",
      descripcion: "Rendición PAES Competencia Matemática 1 (M1) 09:00",
    estado: "futuro",
    icono: Clock,
    color: "bg-secondary"
  },
  {
    fecha: "5 enero 2026",
      evento: "Resultados PAES",
      descripcion: "Resultados de Puntajes PAES Regular e inicio de las postulaciones",
      estado: "futuro",
      icono: Clock,
      color: "bg-secondary"
  }
];
const linkPostulacion="https://admision.usm.cl/Account/Login/Register?returnUrl=%2Fpostulacion-new%2F"
const getEstadoBadge = (estado: string) => {
  switch (estado) {
    case 'activo':
      return <Badge className="bg-primary text-primary-foreground">En curso</Badge>;
    case 'proximo':
      return <Badge className="bg-secondary text-secondary-foreground">Próximamente</Badge>;
    case 'futuro':
      return <Badge variant="outline" className="border-muted-foreground text-muted-foreground">Futuro</Badge>;
    default:
      return null;
  }
};

const Fechas = () => {
  return (
    <section id="fechas" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Fechas
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Importantes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mantente al día con nuestro cronograma de admisión. 
            No pierdas ninguna fecha importante y planifica tu postulación.
          </p>
        </div>

        {/* Alerta de fecha activa */}
        <Card className="max-w-4xl mx-auto mb-12 border-primary bg-primary/5">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground">
                  ¡Postulaciones Abiertas Ahora!
                </h3>
                <p className="text-muted-foreground">
                  Las postulaciones para el proceso de admisión están activas!.
                </p>
              </div>
              <Button className="bg-primary hover:bg-primary-light text-primary-foreground shadow-glow"
                onClick={() => window.open(linkPostulacion, '_blank')}
                >
                Postular Ahora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
            
            <div className="space-y-8">
              {cronograma.map((item, index) => {
                const Icon = item.icono;
                return (
                  <div key={index} className="relative flex items-start space-x-6">
                    {/* Timeline dot */}
                    <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center relative z-10 shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <Card className="flex-1 hover:shadow-card transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-xl font-semibold text-foreground">
                                {item.evento}
                              </h3>
                              {getEstadoBadge(item.estado)}
                            </div>
                            <div className="flex items-center space-x-2 text-muted-foreground mb-3">
                              <Timer className="h-4 w-4" />
                              <span className="font-medium">{item.fecha}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {item.descripcion}
                        </p>
          
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fechas;