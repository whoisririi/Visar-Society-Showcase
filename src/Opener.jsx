import opener from "./imgs/Opener.png";

const Opener = () => {
  return (
    <div className="relative w-full h-[400px] overflow-hidden z-10">
      {/* Background Image */}
      <img src={opener} alt="openerbg" className="w-full h-full object-cover" />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-start text-center pt-24 px-4">
        <h1 className="font-lemon text-white text-2xl sm:text-3xl md:text-4xl tracking-wider leading-tight">
          Welcome to Visar Society!
        </h1>
        <p className="mt-2 font-caveat text-white tracking-widest text-base sm:text-lg md:text-xl max-w-md">
          A soul family that expresses themselves through visual arts.
        </p>
        <button className="mt-5 bg-grass-green text-white font-palanquin px-5 py-2 text-base sm:text-lg rounded-lg hover:bg-hover-grass">
          Shop here!
        </button>
      </div>
    </div>
  );
};

export default Opener;
