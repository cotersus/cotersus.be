import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/logo.svg';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Container } from '../ui/Container';

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="absolute inset-0 border-b border-[#d9cfbb]/80 bg-[#f3ecdf]/88 backdrop-blur-md dark:border-border/60 dark:bg-background/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#f6efe3]/90 via-[#f1e8d8]/55 to-transparent dark:from-background/70 dark:via-background/35" />

      <Container className="relative flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d6c8af] bg-[#f8f2e8]/95 backdrop-blur-sm transition-colors duration-300 group-hover:border-primary/50 dark:border-white/10 dark:bg-background/75">
            <Image
              src={logo}
              alt="Cotersus Logo"
              className="h-8 w-8 transition-opacity group-hover:opacity-80"
            />
          </div>
          <div>
            <span className="font-display block text-2xl text-foreground">
              Cotersus
            </span>
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-muted-foreground">
              IT Consulting
            </p>
          </div>
        </Link>
        <ThemeToggle />
      </Container>
    </header>
  );
}
