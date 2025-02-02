import Clients from '@/components/Clients';
import Footer from '@/components/Footer';
import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import RecentProjects from '@/components/RecentProjects';
import { FloatingNav } from '@/components/ui/FloatingNav';
import { navItems } from '@/data';

export default function Home() {
  return (
    <main className="relative bg-backgroundTurtle-100 bg-grid-black/[0.15] flex items-center justify-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Footer />
      </div>
    </main>
  );
}
