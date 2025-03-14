export const SectionHeader = ({ title, eyebrow, description }) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-red-500 to-rose-400 text-transparent bg-clip-text">
          REAL-WORLD RESULTS
        </p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
        Featured Projects
      </h2>
      <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
        See how I transformed concepts into user-friendly solutions.
      </p>
    </>
  );
};
