export default function Home() {
  return (
    <div className="grid gap-8 rounded-2xl bg-white/90 p-10 shadow-lg ring-1 ring-slate-200">
      <div>
        <p className="mb-2 text-sm uppercase tracking-[0.2em] text-indigo-500">Welcome</p>
        <h2 className="text-4xl font-bold tracking-tight text-slate-900">
          Next.js 14 App Router + Tailwind CSS
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          This starter is configured with ESLint, Prettier, Tailwind CSS, and PostCSS. Update the
          content in <code className="rounded bg-slate-100 px-1 py-0.5">src/app/page.js</code> to start
          building your experience.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
          <h3 className="text-lg font-semibold text-slate-900">Tailwind ready</h3>
          <p className="mt-2 text-sm text-slate-600">
            Utility classes are available globally via <code className="rounded bg-white px-1 py-0.5">globals.css</code>
            .
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
          <h3 className="text-lg font-semibold text-slate-900">ESLint &amp; Prettier</h3>
          <p className="mt-2 text-sm text-slate-600">
            Format with <code className="rounded bg-white px-1 py-0.5">npm run format</code> and lint with
            <code className="rounded bg-white px-1 py-0.5">npm run lint</code>.
          </p>
        </div>
      </div>
    </div>
  );
}
