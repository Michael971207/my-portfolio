import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4 text-center">
        <h1 className="text-4xl font-bold">Velkommen til Michael's Portfolio</h1>
        <p className="mt-4 text-gray-700">
          Jeg er en IT-utvikler med lidenskap for teknologi og problemløsning.
        </p>
      </main>
      <Footer />
    </div>
  );
}
