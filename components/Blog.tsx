import Link from "next/link";
import Image from "next/image";

export type SubStackProps = {
  blog_name: string,
  read_time: string;
  href: string;
};

export default function Blog({
    blog_name,
    read_time,
    href,
}: SubStackProps) {
  return (
    <article className="group relative flex w-full max-w-5xl gap-6 rounded-2xl border border-white/10 bg-linear-to-b from-white/6 to-white/2 py-4 px-5 backdrop-blur-sm">
      <div className="flex flex-col items-start justify-center">
        <h1 className="text-2xl text-white tracking-wide">
          {blog_name}
        </h1>
        <p className="text-s font-light text-white/20 tracking-wide mt-4">
          {read_time}
        </p>
      </div>
      <div className="absolute bottom-4 right-5">
        <a
            href={href}
            className="px-4 py-1.5 rounded-md border border-white/20 text-base text-white/80 
            bg-white/[0.05] hover:bg-white/[0.1] hover:scale-[1.1] 
            transition-all duration-200"
        >
            Read
        </a>
    </div>
    </article>
  );
}

