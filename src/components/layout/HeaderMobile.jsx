export default function HeaderMobile() {
  return (
    <header className="block md:hidden rounded-lg bg-white px-4 py-3 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700">
            BE
          </div>
          <div className="leading-tight">
            <p className="text-xs font-semibold text-slate-600">BetEngine</p>
            <p className="text-sm font-bold text-slate-900">Smart Bets</p>
          </div>
        </div>
        <nav className="flex items-center gap-3 text-xs font-medium text-slate-700">
          <a href="#" className="hover:text-indigo-600">
            Odds Comparison
          </a>
          <a href="#" className="hover:text-indigo-600">
            Community
          </a>
          <a href="#" className="hover:text-indigo-600">
            Premium
          </a>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-lg text-slate-700 hover:border-indigo-200 hover:text-indigo-600"
            aria-label="Open menu"
          >
            ☰
          </button>
        </nav>
      </div>
    </header>
  );
}
