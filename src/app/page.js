import UpperSection from "./components/UpperSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Email from "./components/Email";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black ">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <UpperSection />
        <About />
        <Projects />
        <Email />
      </div>
    </main>
  );
}
