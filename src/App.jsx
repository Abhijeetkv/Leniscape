import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import ImageGrid from './components/ImageGrid.jsx';

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  
  return (
    <>
      <section className="w-full min-h-screen flex flex-col justify-center p-8 md:p-16">
      <h1 className="text-5xl md:text-7xl font-bold mb-8 text-center">Image Gallery</h1>
      <ImageGrid />
      </section>
    </>
  );
}

export default App;
