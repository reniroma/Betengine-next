"use client";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050509]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div>
          <p className="text-sm font-semibold text-indigo-400">BetEngine</p>
          <h1 className="text-2xl font-bold tracking-tight text-slate-100">
            Smart betting analytics platform
          </h1>
        </div>
        <nav className="flex gap-4 text-sm font-medium text-slate-200">
          <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
            Docs
          </a>
          <a href="https://tailwindcss.com/docs" target="_blank" rel="noreferrer">
            Tailwind
          </a>
        </nav>
      </div>
    </header>
  );
}
