import '../styles/globals.css';

export const metadata = {
  title: 'Betengine Next',
  description: 'Next.js 14 App Router setup with Tailwind CSS.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        <div className="mx-auto flex min-h-screen max-w-4xl flex-col px-6 py-10">
          <header className="mb-12 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-indigo-600">Betengine</p>
              <h1 className="text-3xl font-bold tracking-tight">Next.js Starter</h1>
            </div>
            <nav className="flex gap-4 text-sm font-medium text-slate-600">
              <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
                Docs
              </a>
              <a href="https://tailwindcss.com/docs" target="_blank" rel="noreferrer">
                Tailwind
              </a>
            </nav>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="mt-12 border-t border-slate-200 pt-6 text-sm text-slate-500">
            <p>Get started by editing src/app/page.js</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
