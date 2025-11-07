import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  TrendingUp, 
  Heart, 
  Users, 
  DollarSign,
  Star,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const becas = [
  {
    icon: Heart,
    nombre: "Beca Ingreso Programa Propedéutico “Ex Umbra in Solem”",
    descripcion: "Para admitidos mediante la vía de Ingreso Especial Programa Propedéutico “Ex Umbra in Solem”.",
    cobertura: "Cubre matrícula y arancel los 2 primeros años",
    requisitos: ["Postular en primera preferencia a la Universidad Técnica Federico Santa María"],
    vacantes: "-",
    color: "from-red-500 to-red-600",
    destacado: false
  },
  {
    icon: Users,
    nombre: "Beca de primer año al mérito académico para estudiantes nuevos vía admisión especial centralizada Deportista Destacado",
    descripcion: "A postulantes nuevos que obtengan el mayor puntaje de postulación Vía Admisión Especial Centralizada Deportista Destacado.",
    cobertura: "Solo cubre arancel del primer año.",
    requisitos: ["Ser egresado de Enseñanza Media del año en curso o anterior.", 
                 "Haber alcanzado el mayor puntaje ponderado en el proceso de Admisión centralizada Deportista Destacado."],
    vacantes: "-",
    color: "from-green-500 to-green-600",
    destacado: false
  },
  {
    icon: Users,
    nombre: "Beca de primer año al mérito académico para estudiantes nuevos vía admisión especial centralizada Deportista en Formación Élite.",
    descripcion: "Para postulantes nuevos que obtengan el mayor puntaje de postulación Vía Admisión Especial Centralizada Deportista en Formación Élite.",
    cobertura: "liberación de hasta un 50% del pago su arancel anual.",
    requisitos: ["Ser egresado de Enseñanza Media del año en curso o anterior.", 
                   "Haber alcanzado el mayor puntaje ponderado en el proceso de Admisión centralizada Deportista en Formación Élite."],
    vacantes: "-",
    color: "from-green-500 to-green-600",
    destacado: false
  },
  {
    icon: Users,
    nombre: "Beca de primer año al mérito académico para estudiantes nuevos vía admisión especial centralizada Deportista Élite.",
      descripcion: "Para postulantes nuevos que obtengan el mayor puntaje de postulación Vía Admisión Especial Centralizada Deportistas Élite.",
      cobertura: "Liberación total del pago del arancel y matrícula por la duración nominal de la carrera.",
      requisitos: ["Ser egresado de Enseñanza Media del año en curso o anterior.", 
                   "Haber alcanzado el mayor puntaje ponderado en el proceso de Admisión centralizada Deportista Élite."],
      vacantes: "-",
      color: "from-green-500 to-green-600",
      destacado: false
  }
  
];

const beneficios = [
  {
    icon: DollarSign,
    titulo: "Beneficios estatales (se postula a través del FUAS)",
    descripcion: "Puedes tener gratuidad, Beca de Arancel, Fondo Solidario de Crédito Universitario o Crédito con Garantía Estatal (CAE)."
  },
  {
    icon: Star,
    titulo: "Programas de Intercambio",
    descripcion: "Oportunidades de estudiar en universidades partner internacionales, incluso con la posibilidad de doble titulación con instituciones de Francia."
  },
  {
    icon: CheckCircle,
    titulo: "Beneficios internos y socioeconómicos",
    descripcion: "La universidad tiene becas internas como la Beca de Alimentación USM, Beca de Residencia/Movilidad,Beca Daniel Alkalay y Beca para estudiantes padres y madres, entre otros."
  }
];

const Becas = () => {
  return (
    <section id="becas" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Becas y
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Beneficios
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tu talento merece reconocimiento. Descubre los beneficios estatales que se aceptan 
            y las becas internas que tenemos para ti.
          </p>
        </div>

        {/* Becas principales */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {becas.map((beca, index) => {
            const Icon = beca.icon;
            return (
              <Card 
                key={index} 
                className={`group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border relative overflow-hidden ${
                  beca.destacado ? 'ring-2 ring-accent ring-offset-2' : ''
                }`}
              >
                {beca.destacado && (
                  <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-3 py-1 text-sm font-medium">
                    Más Popular
                  </div>
                )}
                
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${beca.color}`}></div>
                
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${beca.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {beca.vacantes} vacantes
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {beca.nombre}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {beca.descripcion}
                  </p>

                  <div className="bg-muted/50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <Star className="h-4 w-4 text-accent mr-2" />
                      Cobertura:
                    </h4>
                    <p className="text-primary font-medium text-lg">{beca.cobertura}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-foreground mb-3 flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Requisitos:
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {beca.requisitos.map((req, i) => (
                        <li key={i} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button 
                    variant="default"
                    onClick={() => window.open("https://usm.cl/admision/becas", "_blank")}
                  >
                    Saber más
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        {/* Beneficios adicionales */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Beneficios Adicionales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {beneficios.map((beneficio, index) => {
              const Icon = beneficio.icon;
              return (
                <Card key={index} className="text-center hover:shadow-card transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{beneficio.titulo}</h4>
                    <p className="text-sm text-muted-foreground">{beneficio.descripcion}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Becas;