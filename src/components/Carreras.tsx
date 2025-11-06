import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { 
  Computer, 
  Building, 
  Calculator, 
  ArrowRight,
  MapPin,
  Clock,
  Calendar,
  ExternalLink,
  Search,
} from "lucide-react";

const carrerasPorSede = {
  "VALPARAÍSO": [
    { name: "Ingeniería Civil Informática", duracion: "5 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/ingenieria-civil-informatica", icon: Computer, color: "from-blue-500 to-blue-600" },
    { name: "Arquitectura", duracion: "5 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/arquitectura", icon: Building, color: "from-purple-500 to-purple-600" },
    { name: "Construcción civil", duracion: "5 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/construccion-civil", icon: Building, color: "from-orange-500 to-orange-600" },
    { name: "Ingeniería Civil", duracion: "5 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/ingenieria-civil", icon: Calculator, color: "from-green-500 to-green-600" },
    { name: "Ingeniería Civil Ambiental", duracion: "5 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/ingenieria-civil-ambiental", icon: Calculator, color: "from-teal-500 to-teal-600" },
    { name: "Ingeniería Civil Eléctrica", duracion: "5 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/ingenieria-civil-electrica", icon: Calculator, color: "from-yellow-500 to-yellow-600" },
    { name: "Ingeniería Civil Electrónica", duracion: "5 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/ingenieria-civil-electronica", icon: Computer, color: "from-indigo-500 to-indigo-600" },
    { name: "Ingeniería Civil en Biotecnología", duracion: "5 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/ingenieria-civil-en-biotecnologia", icon: Calculator, color: "from-pink-500 to-pink-600" },
    { name: "Ingeniería Civil Física", duracion: "5 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/ingenieria-civil-fisica", icon: Calculator, color: "from-cyan-500 to-cyan-600" },
    { name: "Ingeniería Civil Matemática", duracion: "5 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/ingenieria-civil-matematica", icon: Calculator, color: "from-red-500 to-red-600" },
    { name: "Ingeniería Civil Mecánica", duracion: "5 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/ingenieria-civil-mecanica", icon: Calculator, color: "from-gray-500 to-gray-600" },
    { name: "Ingeniería Civil Metalúrgica", duracion: "5 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/ingenieria-civil-metalurgica", icon: Calculator, color: "from-amber-500 to-amber-600" },
    { name: "Ingeniería Civil Plan Común", duracion: "2 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/ingenieria-civil-plan-comun", icon: Calculator, color: "from-blue-500 to-blue-600" },
    { name: "Ingeniería Civil Química", duracion: "5 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/ingenieria-civil-quimica", icon: Calculator, color: "from-green-500 to-green-600" },
    { name: "Ingeniería Civil Telemática", duracion: "5 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/ingenieria-civil-telematica", icon: Computer, color: "from-purple-500 to-purple-600" },
    { name: "Ingeniería Comercial", duracion: "5 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/ingenieria-comercial", icon: Calculator, color: "from-orange-500 to-orange-600" },
    { name: "Ingeniería en Diseño de Productos", duracion: "5 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/ingenieria-en-diseno-de-productos", icon: Building, color: "from-pink-500 to-pink-600" },
    { name: "Licenciatura en Astrofísica", duracion: "4 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/licenciatura-en-astrofisica", icon: Calculator, color: "from-indigo-500 to-indigo-600" },
    { name: "Licenciatura en Ciencias, mención Química", duracion: "4,5 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/licenciatura-en-ciencias-mencion-quimica", icon: Calculator, color: "from-teal-500 to-teal-600" },
    { name: "Licenciatura en Física", duracion: "4 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/licenciatura-en-fisica", icon: Calculator, color: "from-cyan-500 to-cyan-600" },
    { name: "Químico", duracion: "4,5 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/quimico", icon: Calculator, color: "from-green-500 to-green-600" }
  ],
  "SAN JOAQUÍN": [
    { name: "Ingeniería Civil Informática", duracion: "5 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/ingenieria-civil-informatica", icon: Computer, color: "from-blue-500 to-blue-600" },
    { name: "Arquitectura", duracion: "5 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/arquitectura", icon: Building, color: "from-purple-500 to-purple-600" },
    { name: "Ingeniería Civil", duracion: "5 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/ingenieria-civil", icon: Calculator, color: "from-green-500 to-green-600" },
    { name: "Ingeniería Civil de Minas", duracion: "5 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/ingenieria-civil-de-minas", icon: Calculator, color: "from-amber-500 to-amber-600" },
    { name: "Ingeniería Civil Eléctrica", duracion: "5 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/ingenieria-civil-electrica", icon: Calculator, color: "from-yellow-500 to-yellow-600" },
    { name: "Ingeniería Civil Física", duracion: "5 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/ingenieria-civil-fisica", icon: Calculator, color: "from-cyan-500 to-cyan-600" },
    { name: "Ingeniería Civil Matemática", duracion: "5 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/ingenieria-civil-matematica", icon: Calculator, color: "from-red-500 to-red-600" },
    { name: "Ingeniería Civil Mecánica", duracion: "5 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/ingenieria-civil-mecanica", icon: Calculator, color: "from-gray-500 to-gray-600" },
    { name: "Ingeniería Civil Plan Común", duracion: "2 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/ingenieria-civil-plan-comun", icon: Calculator, color: "from-blue-500 to-blue-600" },
    { name: "Ingeniería Civil Química", duracion: "5 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/ingenieria-civil-quimica", icon: Calculator, color: "from-green-500 to-green-600" },
    { name: "Ingeniería Civil Telemática", duracion: "5 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/ingenieria-civil-telematica", icon: Computer, color: "from-purple-500 to-purple-600" },
    { name: "Ingeniería en Diseño de Productos", duracion: "5 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/ingenieria-en-diseno-de-productos", icon: Building, color: "from-pink-500 to-pink-600" },
    { name: "Licenciatura en Astrofísica", duracion: "4 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/licenciatura-en-astrofisica", icon: Calculator, color: "from-indigo-500 to-indigo-600" },
    { name: "Licenciatura en Física", duracion: "4 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/licenciatura-en-fisica", icon: Calculator, color: "from-cyan-500 to-cyan-600" },
    { name: "Técnico Universitario en Mantenimiento Aeronáutico", duracion: "2 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/tecnico-universitario-en-mantenimiento-aeronautico", icon: Calculator, color: "from-orange-500 to-orange-600" }
  ],
  "VITACURA": [
    { name: "Ingeniería Comercial", duracion: "5 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/ingenieria-comercial", icon: Calculator, color: "from-orange-500 to-orange-600" },
    { name: "Ingeniería en Aviación Comercial", duracion: "5 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/ingenieria-en-aviacion-comercial", icon: Calculator, color: "from-blue-500 to-blue-600" }
  ],
  "VIÑA DEL MAR": [
    { name: "Ingeniería en Biotecnología", duracion: "4 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/ingenieria-en-biotecnologia", icon: Calculator, color: "from-pink-500 to-pink-600" },
    { name: "Ingeniería en Informática", duracion: "4 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/ingenieria-en-informatica", icon: Computer, color: "from-blue-500 to-blue-600" },
    { name: "Ingeniería en Fabricación y Diseño Industrial", duracion: "4 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/ingenieria-en-fabricacion-y-diseno-industrial", icon: Building, color: "from-purple-500 to-purple-600" },
    { name: "Ingeniería en Mantenimiento Industrial", duracion: "4 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/ingenieria-en-mantenimiento-industrial", icon: Calculator, color: "from-orange-500 to-orange-600" },
    { name: "Ingeniería en Prevención de Riesgos Laborales y Ambientales", duracion: "4 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/ingenieria-en-prevencion-de-riesgos-laborales-y-ambientales", icon: Calculator, color: "from-green-500 to-green-600" },
    { name: "Técnico Universitario en Alimentos", duracion: "2 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/tecnico-universitario-en-alimentos", icon: Calculator, color: "from-red-500 to-red-600" },
    { name: "Técnico Universitario en Biotecnología", duracion: "2 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/tecnico-universitario-en-biotecnologia", icon: Calculator, color: "from-pink-500 to-pink-600" },
    { name: "Técnico Universitario en Ciencia de Datos", duracion: "2 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/tecnico-universitario-en-ciencia-de-datos", icon: Computer, color: "from-blue-500 to-blue-600" },
    { name: "Técnico Universitario en Construcción", duracion: "2 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/tecnico-universitario-en-construccion", icon: Building, color: "from-orange-500 to-orange-600" },
    { name: "Técnico Universitario en Control del Medio Ambiente", duracion: "2 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/tecnico-universitario-en-control-del-medio-ambiente", icon: Calculator, color: "from-green-500 to-green-600" },
    { name: "Técnico Universitario en Electricidad", duracion: "2 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/tecnico-universitario-en-electricidad", icon: Calculator, color: "from-yellow-500 to-yellow-600" },
    { name: "Técnico Universitario en Electrónica", duracion: "2 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/tecnico-universitario-en-electronica", icon: Computer, color: "from-indigo-500 to-indigo-600" },
    { name: "Técnico Universitario en Energías Renovables", duracion: "2 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/tecnico-universitario-en-energias-renovables", icon: Calculator, color: "from-teal-500 to-teal-600" },
    { name: "Técnico Universitario en Informática", duracion: "2 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/tecnico-universitario-en-informatica", icon: Computer, color: "from-blue-500 to-blue-600" },
    { name: "Técnico Universitario en Mantenimiento Industrial", duracion: "2 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/tecnico-universitario-en-mantenimiento-industrial", icon: Calculator, color: "from-gray-500 to-gray-600" },
    { name: "Técnico Universitario en Mecánica Automotriz", duracion: "2 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/tecnico-universitario-en-mecanica-automotriz", icon: Calculator, color: "from-red-500 to-red-600" },
    { name: "Técnico Universitario en Mecánica Industrial", duracion: "2 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/tecnico-universitario-en-mecanica-industrial", icon: Calculator, color: "from-gray-500 to-gray-600" },
    { name: "Técnico Universitario en Minería y Metalurgia", duracion: "2 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/tecnico-universitario-en-mineria-y-metalurgia", icon: Calculator, color: "from-amber-500 to-amber-600" },
    { name: "Técnico Universitario en Proyectos de Ingeniería", duracion: "2 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/tecnico-universitario-en-proyectos-de-ingenieria", icon: Building, color: "from-purple-500 to-purple-600" },
    { name: "Técnico Universitario en Química, mención Química Analítica", duracion: "2 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/tecnico-universitario-en-quimica-mencion-quimica-analitica", icon: Calculator, color: "from-green-500 to-green-600" },
    { name: "Técnico Universitario en Telecomunicaciones y Redes", duracion: "2 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/tecnico-universitario-en-telecomunicaciones-y-redes", icon: Computer, color: "from-purple-500 to-purple-600" }
  ],
  "CONCEPCIÓN": [
    { name: "Ingeniería en Biotecnología", duracion: "4 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/ingenieria-en-biotecnologia", icon: Calculator, color: "from-pink-500 to-pink-600" },
    { name: "Ingeniería en Informática", duracion: "4 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/ingenieria-en-informatica", icon: Computer, color: "from-blue-500 to-blue-600" },
    { name: "Ingeniería en Mantenimiento Industrial", duracion: "4 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/ingenieria-en-mantenimiento-industrial", icon: Calculator, color: "from-orange-500 to-orange-600" },
    { name: "Ingeniería en Prevención de Riesgos Laborales y Ambientales", duracion: "4 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/ingenieria-en-prevencion-de-riesgos-laborales-y-ambientales", icon: Calculator, color: "from-green-500 to-green-600" },
    { name: "Técnico Universitario Dibujante Proyectista", duracion: "2 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/tecnico-universitario-dibujante-proyectista", icon: Building, color: "from-purple-500 to-purple-600" },
    { name: "Técnico Universitario en Administración de Empresas", duracion: "2 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/tecnico-universitario-en-administracion-de-empresas", icon: Calculator, color: "from-orange-500 to-orange-600" },
    { name: "Técnico Universitario en Automatización y Control", duracion: "2 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/tecnico-universitario-en-automatizacion-y-control", icon: Calculator, color: "from-teal-500 to-teal-600" },
    { name: "Técnico Universitario en Biotecnología", duracion: "2 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/tecnico-universitario-en-biotecnologia", icon: Calculator, color: "from-pink-500 to-pink-600" },
    { name: "Técnico Universitario en Ciencia de Datos", duracion: "2 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/tecnico-universitario-en-ciencia-de-datos", icon: Computer, color: "from-blue-500 to-blue-600" },
    { name: "Técnico Universitario en Construcción", duracion: "2 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/tecnico-universitario-en-construccion", icon: Building, color: "from-orange-500 to-orange-600" },
    { name: "Técnico Universitario en Control del Medio Ambiente", duracion: "2 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/tecnico-universitario-en-control-del-medio-ambiente", icon: Calculator, color: "from-green-500 to-green-600" },
    { name: "Técnico Universitario en Electricidad", duracion: "2 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/tecnico-universitario-en-electricidad", icon: Calculator, color: "from-yellow-500 to-yellow-600" },
    { name: "Técnico Universitario en Electrónica", duracion: "2 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/tecnico-universitario-en-electronica", icon: Computer, color: "from-indigo-500 to-indigo-600" },
    { name: "Técnico Universitario en Informática", duracion: "2 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/tecnico-universitario-en-informatica", icon: Computer, color: "from-blue-500 to-blue-600" },
    { name: "Técnico Universitario en Mantenimiento Industrial", duracion: "2 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/tecnico-universitario-en-mantenimiento-industrial", icon: Calculator, color: "from-gray-500 to-gray-600" },
    { name: "Técnico Universitario en Mecánica Automotriz", duracion: "2 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/tecnico-universitario-en-mecanica-automotriz", icon: Calculator, color: "from-red-500 to-red-600" },
    { name: "Técnico Universitario en Mecánica Industrial", duracion: "2 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/tecnico-universitario-en-mecanica-industrial", icon: Calculator, color: "from-gray-500 to-gray-600" },
    { name: "Técnico Universitario en Química, mención Química Industrial", duracion: "2 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/tecnico-universitario-en-quimica-mencion-quimica-industrial", icon: Calculator, color: "from-green-500 to-green-600" },
    { name: "Técnico Universitario en Robótica y Mecatrónica", duracion: "2 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/tecnico-universitario-en-robotica-y-mecatronica", icon: Computer, color: "from-purple-500 to-purple-600" },
    { name: "Técnico Universitario en Telecomunicaciones y Redes", duracion: "2 años", regimen: "Diurno", link: "https://usm.cl/admision/carreras/tecnico-universitario-en-telecomunicaciones-y-redes", icon: Computer, color: "from-purple-500 to-purple-600" }
  ]
};

const removeAccents = (str: string): string => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const Carreras = () => {
  const [sedeSeleccionada, setSedeSeleccionada] = useState<string>("TODAS");
  const [mostrarTodas, setMostrarTodas] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); 
  
  const sedes = Object.keys(carrerasPorSede);
  const todasLasCarreras = Object.values(carrerasPorSede).flat();
  
  // Obtener lista base por sede
  const listaBasePorSede = sedeSeleccionada === "TODAS" 
    ? todasLasCarreras 
    : carrerasPorSede[sedeSeleccionada as keyof typeof carrerasPorSede];

  // Aplicar filtro de búsqueda sobre la lista base
  const carrerasFiltradas = listaBasePorSede.filter(carrera => {
    // Comparación sin acentos ni mayúsculas/minúsculas
    const nombreNormalizado = removeAccents(carrera.name.toLowerCase());
    const busquedaNormalizada = removeAccents(searchTerm.toLowerCase());
    return nombreNormalizado.includes(busquedaNormalizada);
  });

  const carrerasAMostrar = mostrarTodas ? carrerasFiltradas : carrerasFiltradas.slice(0, 8);
  
  // Función para resetear la vista y búsqueda al cambiar de sede
  const handleSedeChange = (sede: string) => {
    setSedeSeleccionada(sede);
    setMostrarTodas(false);
    setSearchTerm("");
  };

  return (
    <section id="carreras" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* ... Títulos ... */}
        </div>

        {/* Filtro por Sedes */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Button
            variant={sedeSeleccionada === "TODAS" ? "default" : "outline"}
            onClick={() => handleSedeChange("TODAS")} 
            className={`${sedeSeleccionada === "TODAS" ? "bg-primary text-primary-foreground" : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"}`}
          >
            <MapPin className="h-4 w-4 mr-2" />
            Todas las Sedes
          </Button>
          {sedes.map((sede) => (
            <Button
              key={sede}
              variant={sedeSeleccionada === sede ? "default" : "outline"}
              onClick={() => handleSedeChange(sede)} 
              className={`${sedeSeleccionada === sede ? "bg-primary text-primary-foreground" : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"}`}
            >
              <MapPin className="h-4 w-4 mr-2" />
              {sede}
            </Button>
          ))}
        </div>

        {/* BARRA DE BÚSQUEDA */}
        <div className="mb-12 relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
                type="text"
                placeholder={`Buscar entre ${carrerasFiltradas.length} carreras...`}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-card text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition duration-150 shadow-sm"
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setMostrarTodas(true); // Mostrar todas las coincidencias al buscar
                }}
            />
        </div>
        
        {/* Manejo de No Resultados */}
        {carrerasAMostrar.length === 0 && (
            <div className="text-center py-10 bg-card rounded-lg border border-border mb-12">
                <p className="text-xl font-medium text-muted-foreground">
                    No se encontraron carreras que coincidan con "<strong className="text-foreground">{searchTerm}</strong>".
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                    Intenta buscar con otra sede o un término diferente.
                </p>
            </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {carrerasAMostrar.map((carrera, index) => {
            const Icon = carrera.icon;
            return (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${carrera.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {carrera.name}
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>Duración: {carrera.duracion}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-secondary" />
                      <span>Régimen: {carrera.regimen}</span>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full text-primary hover:text-primary-foreground hover:bg-primary group-hover:bg-gradient-hero group-hover:text-primary-foreground"
                    onClick={() => window.open(carrera.link, '_blank')}
                  >
                    Ver más
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        {/* Botones Ver Todas/Ver Menos */}
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