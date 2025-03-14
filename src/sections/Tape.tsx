import StarIcon from "@/assets/icons/star.svg";

const words = [
  "Java",
  "Python",
  "Javascript",
  "React",
  "Node",
  "Express",
  "GO",
  "Next",
  "C++",
  "R",
  "MongoDB",
  "Git",
  "GitHub",
  "React Native",
  "Scikit-Learn",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-red-500 to-rose-400 overflow-x-clip -rotate-3 -mx-1">
        <div className="flex [mask-image:liner-gradient(to_right,transparent,black_10%,black_90%,transparent)">
          <div className="flex flex-none gap-4 py-3">
            {words.map((word) => (
              <div key={word} className="inline-flex gap-4 items-center">
                <span className="text-gray-900 uppercase font-extrabold text-sm">
                  {word}
                </span>
                <StarIcon className="size-6 text-gray-900 -rotate-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
