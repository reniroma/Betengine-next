import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-[#0b0b0f]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
        {/* LEFT: Logo */}
        <div className="flex items-center gap-2">
          <div className="rounded-md bg-sky-500/10 px-2 py-1 text-xs font-semibold tracking-wide text-sky-400">
            BetEngine
          </div>
        </div>

        {/* CENTER: Two stacked rows (desktop only) */}
        <div className="hidden flex-col items-center gap-1 md:flex">
          {/* TOP ROW - meta menu, aligned right-to-left (visual order: Odds Comparison, Community, Premium, Bookmakers) */}
          <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
            <button className="transition-colors hover:text-sky-400">Odds Comparison</button>
            <button className="transition-colors hover:text-sky-400">Community</button>
            <button className="transition-colors hover:text-sky-400">Premium</button>
            <button className="transition-colors hover:text-sky-400">Bookmakers</button>
          </div>

          {/* BOTTOM ROW - main navigation */}
          <nav className="flex items-center gap-5 text-sm font-semibold text-slate-100">
            <button className="transition-colors hover:text-sky-400">Home</button>
            <button className="transition-colors hover:text-sky-400">Next Matches</button>
            <button className="transition-colors hover:text-sky-400">Dropping Odds</button>
            <button className="transition-colors hover:text-sky-400">Sure Bets</button>
            <button className="transition-colors hover:text-sky-400">In-Play Odds</button>
            <button className="transition-colors hover:text-sky-400">All Events</button>
            <button className="transition-colors hover:text-sky-400">Betting Tools</button>
          </nav>
        </div>

        {/* RIGHT: search + bell + avatar (desktop) */}
        <div className="hidden items-center gap-3 md:flex">
          <div className="relative">
            <input
              type="text"
              placeholder="Search teams, players, bookmakers, markets..."
              className="w-64 rounded-md bg-slate-900/70 px-3 py-1.5 text-xs text-slate-100 placeholder:text-slate-500 outline-none ring-1 ring-slate-800 focus:ring-sky-500"
            />
          </div>
          <button className="rounded-full bg-slate-900/70 p-2 text-slate-300 transition-colors hover:bg-slate-800 hover:text-sky-400">
            🔔
          </button>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-xs font-bold text-slate-100">
            U
          </div>
        </div>

        {/* MOBILE: logo + burger */}
        <div className="flex items-center gap-2 md:hidden">
          <button className="rounded-full bg-slate-900/70 p-2 text-slate-100">🔔</button>
          <button
            className="rounded-md bg-slate-900/80 px-2 py-1 text-sm text-slate-100"
            id="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div
        id="mobile-menu"
        className={`${isMobileMenuOpen ? 'block' : 'hidden'} border-t border-slate-800 bg-[#050509] px-4 py-3 md:hidden`}
      >
        <div className="mb-3">
          <input
            type="text"
            placeholder="Search teams, players, bookmakers, markets..."
            className="w-full rounded-md bg-slate-900/70 px-3 py-1.5 text-xs text-slate-100 placeholder:text-slate-500 outline-none ring-1 ring-slate-800 focus:ring-sky-500"
          />
        </div>

        {/* TOP ROW (meta) */}
        <div className="mb-2 flex flex-wrap gap-3 text-xs font-medium text-slate-400">
          <button className="transition-colors hover:text-sky-400">Odds Comparison</button>
          <button className="transition-colors hover:text-sky-400">Community</button>
          <button className="transition-colors hover:text-sky-400">Premium</button>
          <button className="transition-colors hover:text-sky-400">Bookmakers</button>
        </div>

        {/* MAIN NAV */}
        <div className="flex flex-wrap gap-3 text-sm font-semibold text-slate-100">
          <button className="transition-colors hover:text-sky-400">Home</button>
          <button className="transition-colors hover:text-sky-400">Next Matches</button>
          <button className="transition-colors hover:text-sky-400">Dropping Odds</button>
          <button className="transition-colors hover:text-sky-400">Sure Bets</button>
          <button className="transition-colors hover:text-sky-400">In-Play Odds</button>
          <button className="transition-colors hover:text-sky-400">All Events</button>
          <button className="transition-colors hover:text-sky-400">Betting Tools</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
