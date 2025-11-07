import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Microscope, 
  TrendingUp, 
  Users, 
  LibraryBig, 
  Brain,
  Building2,
  BookOpen,
  ArrowRight
} from "lucide-react";

const postgrados = [
  {
    icon: GraduationCap,
    name: "Magíster en Economía Energética",
    tipo: "Magíster",
    duracion: "2 años",
    regimen:"Un fin de semana al mes",
    color: "from-blue-500 to-blue-600",
    sede: "Campus Santiago Vitacura",
    link:"https://postgrado.usm.cl/programas/programas-de-magister/magister-en-economia-energetica"
  },
  {
    icon: Microscope,
    name: "Magíster en Gestión de Activos y Mantenimiento",
    tipo: "Maestría",
    duracion: "2 años",
    regimen:"Un fin de semana al mes",
    color: "from-red-500 to-red-600",
    sede:"Campus Santiago Vitacura",
    link: "https://postgrado.usm.cl/programas/programas-de-magister/magister-en-gestion-de-activos"
  },
  {
    icon: TrendingUp,
    name: "MBA-Magister en Gestión Empresarial",
    tipo: "Maestría",
    duracion: "2 años",
    regimen: "Clases un fin se semana al mes",
    color: "from-yellow-500 to-yellow-600",
    sede:"Campus Santiago Vitacura y Campus Casa Central Valparaíso",
    link:"https://postgrado.usm.cl/programas/programas-de-magister/mba-magister-en-gestion-empresarial"
  },
  {
    icon: Brain,
    name: "Doctorado en Biotecnología",
    tipo: "Doctorado",
    duracion: "4 años",
    regimen: "Diurno",
    color: "from-blue-500 to-blue-600",
    sede: "Casa Central Valparaíso",
    link:"https://postgrado.usm.cl/programas/programas-de-doctorado/doctorado-en-biotecnologia"
  },
  {
    icon: Building2,
    name: "Doctorado en Ciencias Físicas",
    tipo: "Doctorado",
    duracion: "1 año",
    regimen: "Diurno",
    color: "from-red-500 to-red-600",
    sede: "Casa Central",
    link:"https://postgrado.usm.cl/programas/programas-de-doctorado/doctorado-en-ciencias-fisicas"
  },
  {
    icon: Users,
    name: "Doctorado en Ciencias, mención Química",
    tipo: "Doctorado",
    duracion: "4 años",
    regimen: "Diurno",
    color: "from-yellow-500 to-yellow-600",
    sede: "UTFSM -UV",
    link:"https://postgrado.usm.cl/programas/programas-de-doctorado/doctorado-en-ciencias-mencion-quimica"
  }
];

const Postgrados = () => {
  return (
    <section id="postgrados" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Maestrías y
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Postgrados de Excelencia
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continúa tu formación académica con nuestros programas de postgrado diseñados 
            para profesionales que buscan especializarse y liderar en sus áreas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {postgrados.map((programa, index) => {
            const Icon = programa.icon;
            return (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${programa.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-xs font-semibold px-2 py-1 bg-muted text-muted-foreground rounded-full">
                      {programa.tipo}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {programa.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {programa.sede}
                  </p>
                  
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <p>• Duración: {programa.duracion}</p>
                    <p>• Modalidad: {programa.regimen}</p>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full text-primary hover:text-primary-foreground hover:bg-primary group-hover:bg-gradient-hero group-hover:text-primary-foreground"
                    onClick={() => window.open(programa.link,'_blank')}
                  >
                    Saber más
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        {/*BOTON A DOCTORADOSS*/}
        <div className="text-center">
          <Button size="lg" 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground mr-4"
            onClick={() => window.open("https://postgrado.usm.cl/programas/programas-de-doctorado", "_blank")}
            >
            Programas de Doctorado
            <LibraryBig className="ml-2 h-5 w-5" />
          </Button>
          {/* BOTON A MAESTRIAS A TODAS*/}
          <Button size="lg" 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground mr-4"
            onClick={() => window.open("https://postgrado.usm.cl/programas/programas-de-magister", "_blank")}
            >
            Programas de Maestrías
            <BookOpen className="ml-2 h-5 w-5" />
          </Button>
          {/* BOTON A POSTULAR*/}  
          <Button size="lg" 
            className="bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => window.open("https://postgrado.usm.cl/postulacion", "_blank")}
            >
            Postulación
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          
        <p>
          Si tienes consultas puedes escribir a postgrado@usm.cl
        </p>
        </div>
        
      </div>
    </section>
  );
};

export default Postgrados;