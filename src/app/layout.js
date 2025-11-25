import '../styles/globals.css';
import HeaderMobile from '@/components/layout/HeaderMobile';
import HeaderDesktop from '@/components/layout/HeaderDesktop';

export const metadata = {
  title: 'Betengine Next',
  description: 'Next.js 14 App Router setup with Tailwind CSS.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        <div className="mx-auto flex min-h-screen max-w-4xl flex-col px-6 py-10">
          <div className="block md:hidden">
            <HeaderMobile />
          </div>
          <div className="hidden md:block">
            <HeaderDesktop />
          </div>
          <main className="flex-1">{children}</main>
          <footer className="mt-12 border-t border-slate-200 pt-6 text-sm text-slate-500">
            <p>Get started by editing src/app/page.js</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
