import type { ReactNode } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}
