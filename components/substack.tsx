import Link from "next/link";
import Image from "next/image";

export type SubStackProps = {
  stack_name: string,
  stack: string[];
};

export default function SubStack({
    stack_name,
    stack,
}: SubStackProps) {
  return (
    <article className="group relative flex w-full gap-6 rounded-2xl border border-white/10 bg-linear-to-b from-white/6 to-white/2 py-10 px-5 backdrop-blur-sm">
      <div className="w-full flex flex-col items-start">
        <h1 className="text-3xl font-semibold text-white tracking-wide">
          {stack_name}
        </h1>
        <div className="w-full h-0.5 bg-gray-300 mx-auto max-w-350 my-5 "></div>
        <div className="mt-3 flex flex-wrap gap-2">
          {stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/10 bg-[#1c1c1c] px-3 py-1 text-sm sm:text-sm tracking-wide text-white/70 hover:scale-[1.1] transition text-center"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

// 416 is my mobile's width