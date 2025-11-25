export default function HeaderDesktop() {
  return (
    <header className="hidden md:block rounded-xl bg-white px-8 py-6 shadow-sm">
      <div className="flex items-center gap-6 text-sm font-semibold text-slate-700">
        <a href="#" className="hover:text-indigo-600">
          Odds Comparison
        </a>
        <a href="#" className="hover:text-indigo-600">
          Community
        </a>
        <a href="#" className="hover:text-indigo-600">
          Premium
        </a>
        <a href="#" className="hover:text-indigo-600">
          Bookmakers
        </a>
      </div>
      <div className="mt-6 flex items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 text-base font-semibold text-indigo-700">
            BE
          </div>
          <div className="leading-tight">
            <p className="text-2xl font-bold text-slate-900">BetEngine</p>
            <p className="text-sm font-medium text-slate-600">
              Smart betting analytics platform
            </p>
          </div>
        </div>
        <nav className="flex items-center gap-5 text-base font-semibold text-slate-700">
          <a href="#" className="hover:text-indigo-600">
            Stats
          </a>
          <a href="#" className="hover:text-indigo-600">
            Leagues
          </a>
          <a href="#" className="hover:text-indigo-600">
            Live Scores
          </a>
          <a href="#" className="hover:text-indigo-600">
            AI Tools
          </a>
          <a href="#" className="hover:text-indigo-600">
            Value Finder
          </a>
        </nav>
      </div>
    </header>
  );
}
