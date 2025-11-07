import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Trophy, 
  Users, 
  Star,
  CheckCircle,
  Clock,
  Target
} from "lucide-react";

const viasAdmision = [
  {
    icon: GraduationCap,
    nombre: "Admisión Centralizada - PAES",
    descripcion: "El ingreso tradicional a primer año de las carreras ofrecidas por la Universidad Técnica Federico Santa María se realiza anualmente.",
    requisitos: ["No existen máximo de postulaciones ni exclusión por preferencias.", 
                 "Puntaje Promedio entre las pruebas de Competencia Lectora y Competencia M1 igual o superior a 485 puntos.",
                 "La prueba M2 es obligatoria para todas las ingenierías y licenciaturas, excepto para ingeniería comercial.",
                "Se considera a la prueba optativa de mayor puntaje."],
    vacantes: "-",
    fecha: "Marzo & Agosto",
    color: "from-blue-500 to-blue-600",
    popularidad: "Más popular",
    link:"https://usm.cl/admision/admision-centralizada-paes"
  },
  {
    icon: Trophy,
    nombre: "Admisión Especial",
    descripcion: "ingreso de chilenos o extranjeros que hayan concluido sus estudios de Enseñanza Media (o equivalentes) en el extranjero y de personas que hayan logrado una participación destacada en programas o actividades que den garantías de sobrellevar con éxito estudios universitarios.",
    requisitos: ["Postular mediante el portal admision.usm.cl",
                 "Cédula de identidad vigente.",
                 "Certificado de Notas de Enseñanza Media.",
                 "Certificado Ubicación de Egreso de Educación Media.",
                "Licencia de enseñanza media, o copia legalizada ante notario.",
                "Copia Tarjeta Inscripción Prueba de Acceso a la Educación Superior (PAES).",
                 "No ser estudiante regular de la USM."
,
                 "Estos son los requisitos fundamentales para acceder a la admisión especial; no obstante, es importante que verifiques los detalles, requisitos y condiciones específicos de cada Vía de Ingreso Especial, ya que algunos de ellos pueden requerir documentos adicionales según la admisión a la que desees postularte." 
               ],
    
    vacantes: "admision.especial@usm.cl",
    fecha: "Con antelación",
    color: "from-yellow-500 to-yellow-600",
    popularidad: "Excelencia",
    link:"https://usm.cl/admision/admision-especial"
  },
  {
    icon: Users,
    nombre: "Admisión Ingreso Directo a Carreras Técnicas Universitarias",
    descripcion: "En esta vía de ingreso no exige puntaje mínimo en la PAES.",
    requisitos: ["Ser egresado de Enseñanza Media", 
                 "NEM igual o mayor a 5,0 (escala 1 a 7)",
                 "Cédula de Identidad o Pasaporte Vigente",
                "Licencia de Educación Media",
                "Prueba de Acceso a la Educación Superior, PAES, optativa *",
                "Los requisitos y condiciones pueden variar de un periodo a otro. Te invitamos a mantenerte informado visitando periódicamente usm.cl"],
    vacantes: "-",
    fecha: "Consultar",
    color: "from-red-500 to-red-600",
    popularidad: "Técnicos",
    link:"https://usm.cl/admision/admision-ingreso-directo"
  },
  {
    icon: Star,
    nombre: "Ingreso Mujeres Líderes",
    descripcion: "Con el objetivo de fomentar la admisión de mujeres en el área de la ingeniería, la ciencia y la tecnología.",
    requisitos: ["Egreso Enseñanza Media 2024 o 2025.", 
                 "Copia de Cédula de Identidad por ambos lados. ", 
                 "Certificación de concentración de notas de enseñanza media y/o Certificado de ubicación de egreso de Educación Media.*",
                "Licencia de Educación Media.",
                "Copia de la tarjeta de inscripción a Prueba de Acceso a la Educación Superior (PAES) vigente.",
                "Carta Motivacional",
                "Curriculum con identificación de principales logros alcanzados",
                "Certificados o diplomas que acrediten logros alcanzados",
                "No ser estudiante regular de la USM."],
    vacantes: "-",
    fecha: "Consultar",
    color: "from-purple-500 to-purple-600",
    popularidad: "Mujeres",
    link:"https://usm.cl/admision/admision-especial"
  }
];

const Admision = () => {
  return (
    <section id="admision" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Vías de
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Admisión
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Múltiples caminos para ingresar a nuestra universidad. 
            Elige la modalidad que mejor se adapte a tu perfil académico.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {viasAdmision.map((via, index) => {
            const Icon = via.icon;
            return (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${via.color}`}></div>
                <CardContent className="p-8 pl-12">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-r ${via.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <Badge variant="secondary" className="bg-accent/10 text-accent-foreground">
                      {via.popularidad}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {via.nombre}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {via.descripcion}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-medium text-foreground mb-2 flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Requisitos:
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                        {via.requisitos.map((req, i) => (
                          <li key={i}>• {req}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-border">
                      <div className="flex items-center space-x-2">
                        <Target className="h-4 w-4 text-secondary" />
                        <span className="text-sm font-medium">{via.vacantes} vacantes</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-accent" />
                        <span className="text-sm font-medium">{via.fecha}</span>
                      </div>
                    </div>
                  </div>

                  <Button 
                    className={`w-full bg-gradient-to-r ${via.color} hover:opacity-90 text-white shadow-glow`}
                    variant="default"
                    onClick={() => window.open(via.link, '_blank')}
                  >
                    Más información
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Card className="max-w-3xl mx-auto bg-gradient-hero text-primary-foreground border-none">
            <CardContent className="p-8">
              <GraduationCap className="h-16 w-16 mx-auto mb-4 opacity-80" />
              <h3 className="text-2xl font-bold mb-4">
                ¿Necesitas ayuda para elegir?
              </h3>
              <p className="text-primary-foreground/90 mb-6 text-lg leading-relaxed">
                Nuestros asesores académicos están listos para orientarte en el proceso de admisión.
                Para más información escribe un email a admision@usm.cl, indicando tu nombre, RUT, teléfono, Carrera, Campus o Sede de interés y consulta.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Admision;