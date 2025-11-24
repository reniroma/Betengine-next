export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-10 inline-flex items-center rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-300">
        Next.js 14 App Router • Tailwind CSS • ESLint • Prettier
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">Welcome to BetEngine</h1>
      <p className="mt-4 max-w-2xl text-lg text-slate-300">
        The foundation is ready for new pages, shared components, and reusable utilities. Start
        building in <code className="rounded bg-slate-900 px-2 py-1 text-sm">src/app</code> and keep
        shared code inside <code className="rounded bg-slate-900 px-2 py-1 text-sm">src/components</code>{' '}
        or <code className="rounded bg-slate-900 px-2 py-1 text-sm">src/lib</code>.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-sky-300">App Router Ready</h2>
          <p className="mt-2 text-sm text-slate-300">
            Create new routes by adding folders and page files inside <code>src/app</code>. Layouts and
            loading states are supported out of the box.
          </p>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-sky-300">Styling with Tailwind</h2>
          <p className="mt-2 text-sm text-slate-300">
            Utility-first styling is configured. Customize themes in <code>tailwind.config.js</code> and
            global styles in <code>src/app/globals.css</code>.
          </p>
        </div>
      </div>
    </div>
  );
}
