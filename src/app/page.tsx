import Image from "next/image";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section className="flex flex-grow">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse px-10">
            <Image
              src={"/Keyboard.png"}
              alt="Keyboard image"
              width={400}
              height={400}
            />
            <div>
              <h1 className="text-5xl font-bold">Typpo Rush</h1>
              <p className="py-6">
                Typpo rush is an onchain game that will test your speed and
                ability to type as fast as you can against a rival.
              </p>
              <button className="btn btn-primary">Play now</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
