import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  ArrowRight,
  MapPin,
  Clock,
  Calendar,
  ExternalLink,
  Search
} from "lucide-react";

import { carreras } from "@/data/carrerasData";

const sedesDisponibles = ["VALPARAÍSO", "SAN JOAQUÍN", "VITACURA", "VIÑA DEL MAR", "CONCEPCIÓN"];

const Carreras = () => {
  const navigate = useNavigate();
  const [sedeSeleccionada, setSedeSeleccionada] = useState<string>("TODAS");
  const [filtroNombre, setFiltroNombre] = useState("");
  const [mostrarTodas, setMostrarTodas] = useState(false);
  
  //LÓGICA DE FILTRADO ACTUALIZADA
const carrerasFiltradas = carreras.filter(carrera => {
    const coincideSede = sedeSeleccionada === "TODAS" || carrera.sedes.includes(sedeSeleccionada);
    const coincideNombre = carrera.name.toLowerCase().includes(filtroNombre.toLowerCase());
    return coincideSede && coincideNombre;
  }).sort((a, b) => a.name.localeCompare(b.name));

  const carrerasAMostrar = mostrarTodas ? carrerasFiltradas : carrerasFiltradas.slice(0, 8);

  return (
    <section id="carreras" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Carreras que
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Transforman Vidas
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre nuestra amplia oferta académica diseñada para prepararte para el futuro.
            Cada programa está diseñado con los más altos estándares de calidad educativa.
          </p>
        </div>

        {/* Filtro por Sedes */}
        <div className="w-full max-w-6xl mx-auto mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center gap-3">
            
            {/* Botón "Todas las Sedes" */}
            <Button
              variant={sedeSeleccionada === "TODAS" ? "default" : "outline"}
              onClick={() => setSedeSeleccionada("TODAS")}
              className={`col-span-2 sm:col-span-1 lg:w-auto ${sedeSeleccionada === "TODAS" ? "bg-primary text-primary-foreground" : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"}`}
            >
              <MapPin className="h-4 w-4 mr-2" />
              Todas las Sedes
            </Button>
            
            {/* Botones de cada Sede */}
            {sedesDisponibles.map((sede) => (
              <Button
                key={sede}
                variant={sedeSeleccionada === sede ? "default" : "outline"}
                onClick={() => setSedeSeleccionada(sede)}
                className={`lg:w-auto ${sedeSeleccionada === sede ? "bg-primary text-primary-foreground" : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"}`}
              >
                <MapPin className="h-4 w-4 mr-2" />
                {sede}
              </Button>
            ))}
          </div>
        </div>
        
        {/* --- BUSCADOR --- */}
        <div className="relative max-w-lg mx-auto mb-12">
          <Input
            type="text"
            placeholder={`Buscar entre ${carreras.length} carreras...`}
            className="pl-10 text-base"
            value={filtroNombre}
            onChange={(e) => setFiltroNombre(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {carrerasAMostrar.length > 0 ? (
            carrerasAMostrar.map((carrera, index) => {
              return (
                <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border overflow-hidden flex flex-col h-full">
                   <div className="relative h-48 w-full overflow-hidden">
                    <img 
                      src={carrera.imagen} 
                      alt={carrera.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
                    
                    {/* Ícono flotante sobre la imagen */}
                    <div className={`absolute bottom-4 right-4 w-10 h-10 bg-gradient-to-r ${carrera.color} rounded-lg flex items-center justify-center shadow-lg backdrop-blur-sm`}>
                      <carrera.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>

                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {carrera.name}
                    </h3>
                    
                    <div className="space-y-2 text-sm text-muted-foreground mb-6 flex-1">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-primary shrink-0" />
                        <span>{carrera.duracion}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-secondary shrink-0" />
                        <span>{carrera.regimen}</span>
                      </div>
                      
                      {/* Visualización de Sedes */}
                      <div className="flex items-start space-x-2 pt-1">
                        <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span className="leading-snug line-clamp-2">
                          {carrera.sedes.join(', ')}
                        </span>
                      </div>
                    </div>

                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full text-primary hover:text-primary-foreground hover:bg-primary group-hover:bg-gradient-hero group-hover:text-primary-foreground mt-auto"
                      onClick={() => window.open(carrera.link, '_blank')}
                    >
                      Ver más
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })
          ) : (
            <div className="col-span-full text-center py-10 text-muted-foreground">
              No se encontraron carreras con esos filtros.
            </div>
          )}
        </div>

        <div className="text-center">
          {!mostrarTodas && carrerasFiltradas.length > 8 && (
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => setMostrarTodas(true)}
            >
              Ver Todas las Carreras ({carrerasFiltradas.length})
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          )}
          {mostrarTodas && (
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => setMostrarTodas(false)}
            >
              Ver Menos Carreras
              <ArrowRight className="ml-2 h-5 w-5 rotate-180" />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Carreras;