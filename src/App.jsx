import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    // Animation frame loop
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);
  
  return (
    <>
    <div className="bg-zinc-900 min-h-screen flex justify-center items-center">
      <p  className="text-white
      ">Lenis Smooth Scroll with React</p>
    </div>
    <div className="bg-zinc-600 min-h-screen flex justify-center items-center">
      <p  className="text-white
      ">Lenis Smooth Scroll with React</p>
    </div>
    <div className="bg-zinc-400 min-h-screen flex justify-center items-center">
      <p className="text-white
      ">Lenis Smooth Scroll with React</p>
    </div>
    </>
  );
}

export default App;
