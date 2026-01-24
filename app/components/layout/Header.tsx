import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/logo.svg';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Container } from '../ui/Container';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <Container className="py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <Image src={logo} alt="Cotersus Logo" className="w-10 h-10 group-hover:opacity-80 transition-opacity" />
          <div>
            <span className="font-fjalla text-2xl bg-gradient-brand bg-clip-text text-transparent block">
              Cotersus
            </span>
            <p className="text-xs text-muted-foreground">
              IT Consulting
            </p>
          </div>
        </Link>
        <ThemeToggle />
      </Container>
    </header>
  );
}
