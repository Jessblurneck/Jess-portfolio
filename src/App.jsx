import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Tecnologies from "./components/Technologies";
import Project from "./components/Project";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact"; // ✅ Add this line

const App = () => {
  return (
    <div className="relative overflow-x-hidden text-stone-300 antialiased flex flex-col min-h-screen">
      {/* Outer Space Galaxy Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black via-[#0b0c29] to-black">
        <div className="absolute top-[-10%] left-1/2 transform -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)] blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 flex-grow">
        <Navbar />

        <section id="hero">
          <Hero />
        </section>

        <section id="skills">
          <Tecnologies />
        </section>

        <section id="projects">
          <Project />
        </section>

        <section id="certificates">
          <Certificates />
        </section>

        {/* ✅ Contact Section */}
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App;
