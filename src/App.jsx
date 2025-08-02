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
      <div className="w-full">
        <section className="w-full min-h-screen flex flex-col justify-center p-8 md:p-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-center"></h1>
        <ImageGrid />
      </section>
      <div className="fixed font-['Helvetica_Now_Display'] top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
        <h1 className="text-6xl uppercase mb-4">And so, the void began to paint...</h1>
        <h2 className="text-5xl mt-2">アビの宇宙創造
          <sup>©</sup>
        </h2>
      </div>
      <div className="w-full h-screen bg-[#D1D1D1] flex items-center justify-center py-[400px] relative z-[999] text-center">
          <p className="text-5xl w-3/4 leading-[4.2rem] text-black font-regular text-left">
              暗きキャンバスに、宇宙は待ち受ける、
            「 アビの宇宙創造」— 運命に封じられし世界。

              天才の影、姫君の眼差し、
              混乱の日々、伝説の力。

              虚無は描く、忍と力の世を、
              アビの宇宙を、燃ゆる光で満たして。
          </p>
      </div>
      </div>
    </>
  );
}

export default App;
