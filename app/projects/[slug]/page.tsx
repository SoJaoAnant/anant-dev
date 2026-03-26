type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-wide text-white/90">
        {slug}
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60">
        This is the project details page. Replace this with your real write-up,
        screenshots, links, and architecture notes.
      </p>
    </main>
  );
}

