import './globals.css';

export const metadata = {
  title: 'BetEngine',
  description: 'BetEngine Next.js application scaffold',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <div className="text-lg font-semibold tracking-tight text-sky-400">BetEngine</div>
            <nav className="text-sm text-slate-300">App Scaffold</nav>
          </div>
        </header>
        <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950">
          {children}
        </main>
        <footer className="border-t border-slate-800 bg-slate-900/60">
          <div className="mx-auto max-w-5xl px-6 py-6 text-xs text-slate-400">
            Ready for future pages and components.
          </div>
        </footer>
      </body>
    </html>
  );
}
