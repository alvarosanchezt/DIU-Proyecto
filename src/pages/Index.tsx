import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Carreras from "@/components/Carreras";
import Postgrados from "@/components/Postgrados";
import Sedes from "@/components/Sedes";
import Admision from "@/components/Admision";
import Fechas from "@/components/Fechas";
import Becas from "@/components/Becas";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Carreras />
      <Postgrados />
      <Sedes />
      <Admision />
      <Fechas />
      <Becas />
      <Footer />
    </div>
  );
};

export default Index;
