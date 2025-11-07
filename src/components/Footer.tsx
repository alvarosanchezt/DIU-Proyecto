import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Youtube, 
  Twitter,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const enlaces = {
    admision: [
      { nombre: "Proceso de Admisión", href: "#admision" },
      { nombre: "Fechas Importantes", href: "#fechas" },
      { nombre: "Becas y Beneficios", href: "#becas" },
    ],
    universidad: [
      { nombre: "Nuestras Carreras", href: "#carreras" },
      { nombre: "Sedes", href: "#sedes" },
      { nombre: "Investigación", href: "https://dgiie.usm.cl/investigacion" },
      { nombre: "Cultura USM", href: "https://cultura.usm.cl"},
      { nombre: "USM TV", href:"https://tv.usm.cl"}
    ],
    servicios: [
      { nombre: "Biblioteca USM", href: "https://biblioteca.usm.cl/inicio" },
      { nombre: "Campus Virtual", href: "#sedes" },
      { nombre: "Intercambios", href: "https://oai.usm.cl/movilidad/desde-la-usm-internacional/intercambio-internacional" },
    ]
  };

  const contacto = [
    {
      icon: MapPin,
      titulo: "Casa Central",
      info: "Avenida España 1680, Valparaíso, Chile. "
    },
    {
      icon: Phone,
      titulo: "Teléfono",
      info: "+56 32 265 4935"
    },
    {
      icon: Mail,
      titulo: "Email",
      info: "admision@usm.cl"
    }
  ];

  const redesSociales = [
    { icon: Facebook, href: "https://www.facebook.com/usantamaria", name: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/usantamaria", name: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/channel/UCr5rEvayXIC0YnJxDAWuWtQ", name: "YouTube" },
    { icon: Twitter, href: "https://www.linkedin.com/school/usantamaria", name: "Twitter" },
  ];

  return (
    
    <footer className="bg-primary text-primary-foreground">
      {/*Newsletter Section */}
       <div className="border-b border-primary-foreground/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Mantente informado sobre admisiones
            </h3>
            <p className="text-primary-foreground/80 mb-6 text-lg">
              Bienvenido a la USM, regístrate para recibir más información sobre otras actividades, carreras, eventos y novedades que tenemos preparados para ti.
              Síguenos en @admisionusm para más información.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <Button className="bg-accent text-accent-foreground hover:bg-accent-light px-6"
                onClick={() => window.open("https://marketingusm.microsoftcrmportals.com/event/registration?id=Formulario_de_contacto_USM_Ingreso_Centralizado", "_blank")}
                >
                Contacto Admisión USM
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-accent-foreground" />
              </div>
              <span className="text-2xl font-bold">Admisión USM</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-md">
              Formando líderes del futuro con excelencia académica y valores sólidos. 
              Tu éxito profesional comienza aquí.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              {contacto.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium">{item.titulo}</p>
                      <p className="text-sm text-primary-foreground/70">{item.info}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Enlaces de Admisión */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Admisión</h4>
            <ul className="space-y-3">
              {enlaces.admision.map((enlace, index) => (
                <li key={index}>
                  <a 
                    href={enlace.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {enlace.nombre}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enlaces de Universidad */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Universidad</h4>
            <ul className="space-y-3">
              {enlaces.universidad.map((enlace, index) => (
                <li key={index}>
                  <a 
                    href={enlace.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {enlace.nombre}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enlaces de Servicios */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Servicios</h4>
            <ul className="space-y-3">
              {enlaces.servicios.map((enlace, index) => (
                <li key={index}>
                  <a 
                    href={enlace.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {enlace.nombre}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Social Media */}
            <div className="mt-8">
              <h5 className="font-medium mb-4">Síguenos</h5>
              <div className="flex space-x-3">
                {redesSociales.map((red, index) => {
                  const Icon = red.icon;
                  return (
                    <a
                      key={index}
                      href={red.href}
                      className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                      aria-label={red.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/70 text-sm">
              © 2025 Admisión USM. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-primary-foreground/70 hover:text-accent text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent text-sm transition-colors">
                Términos de Uso
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent text-sm transition-colors">
                Soporte
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;