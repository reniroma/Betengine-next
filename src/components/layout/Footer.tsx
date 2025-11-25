export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-slate-600 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} BetEngine. All rights reserved.
      </div>
    </footer>
  );
}
