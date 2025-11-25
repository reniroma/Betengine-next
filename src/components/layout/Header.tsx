export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="text-lg font-semibold text-slate-900">BetEngine</div>
        <nav className="space-x-4 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-slate-900">
            Home
          </a>
          <a href="#" className="hover:text-slate-900">
            Dashboard
          </a>
          <a href="#" className="hover:text-slate-900">
            Settings
          </a>
        </nav>
      </div>
    </header>
  );
}
