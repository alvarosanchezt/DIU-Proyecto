import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { 
  Clock, 
  MapPin, 
  GraduationCap, 
  ExternalLink, 
  LibraryBig, 
  Search,
  Filter,
  ArrowRight
} from "lucide-react";

import { postgrados } from "@/data/postgradosData";

const tiposPostgrado = ["Doctorado", "Magíster Científico-Tecnológicos", "Magíster Profesional"];



const Postgrados = () => {
  const [tipoSeleccionado, setTipoSeleccionado] = useState("TODOS");
  const [filtroNombre, setFiltroNombre] = useState("");

  // Lógica de Filtrado
  const programasFiltrados = postgrados.filter(programa => {
    // 1. Filtro por Tipo (Categoría)
    const coincideTipo = tipoSeleccionado === "TODOS" || programa.tipo === tipoSeleccionado;
    // 2. Filtro por Nombre (Buscador)
    const coincideNombre = programa.name.toLowerCase().includes(filtroNombre.toLowerCase());
    
    return coincideTipo && coincideNombre;
  });

  return (
    <section id="postgrados" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-snug">
            Postgrados y <span className="text-primary">Educación Continua</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Especialízate y lidera la innovación. Filtra según tu perfil profesional o académico.
          </p>
        </div>

        {/* --- BARRA DE FILTROS --- */}
        <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto mb-12 items-center">
          
          {/* 1. Buscador de Texto */}
          <div className="relative w-full md:flex-1">
            <Input 
              placeholder="Buscar programa..." 
              className="pl-10"
              value={filtroNombre}
              onChange={(e) => setFiltroNombre(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>

          {/* 2. Filtros por Tipo (Botones) */}
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              variant={tipoSeleccionado === "TODAS" ? "default" : "outline"}
              onClick={() => setTipoSeleccionado("TODOS")}
              className="rounded-full"
            >
              Todos
            </Button>
            {tiposPostgrado.map((tipo) => (
              <Button
                key={tipo}
                variant={tipoSeleccionado === tipo ? "default" : "outline"}
                onClick={() => setTipoSeleccionado(tipo)}
                className="rounded-full"
              >
                {tipo}
              </Button>
            ))}
          </div>
        </div>

        {/* GRID DE TARJETAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programasFiltrados.length > 0 ? (
            programasFiltrados.map((programa, index) => {
              const Icon = programa.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border overflow-hidden flex flex-col h-full">
                  
                  {/* Imagen de Cabecera */}
                  <div className="relative h-40 w-full overflow-hidden">
                      <img 
                        src={programa.imagen} 
                        alt={programa.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                      
                      {/* Badge del Tipo (Importante para distinguir visualmente) */}
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold text-white backdrop-blur-md border border-white/20 
                          ${programa.tipo === 'Doctorado' ? 'bg-purple-600/80' : 
                            programa.tipo === 'Magíster Académico' ? 'bg-blue-600/80' : 'bg-orange-600/80'}`}>
                          {programa.tipo}
                        </span>
                      </div>

                      <div className="absolute bottom-4 left-4">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${programa.color} text-white shadow-lg inline-block`}>
                              <Icon className="h-6 w-6" />
                          </div>
                      </div>
                  </div>

                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                      {programa.name}
                    </h3>
                    
                    <div className="space-y-3 mb-6 flex-1">
                      <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-2 text-primary shrink-0" />
                          {programa.duracion} • {programa.regimen}
                      </div>
                      <div className="flex items-start text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-2 mt-0.5 text-primary shrink-0" />
                          {programa.sedes.join(", ")}
                      </div>
                      
                      {/* Precio Destacado */}
                      <div className="flex items-center text-sm font-medium text-foreground mt-2 bg-muted/50 p-2 rounded border border-border">
                          <GraduationCap className="h-4 w-4 mr-2 text-primary" />
                          Arancel: {programa.arancel}
                      </div>
                    </div>

                    <Button 
                      className="w-full mt-auto"
                      variant="outline"
                      onClick={() => window.open(programa.link, '_blank')}
                    >
                      Ver Programa Oficial
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                <Filter className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold">No se encontraron programas</h3>
              <p className="text-muted-foreground">Prueba cambiando los filtros o la búsqueda.</p>
              <Button 
                variant="link" 
                onClick={() => {setTipoSeleccionado("TODOS"); setFiltroNombre("")}}
                className="mt-2"
              >
                Limpiar filtros
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Postgrados;