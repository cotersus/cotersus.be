import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo.svg';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Container } from '@/components/ui/Container';

interface HeaderProps {
  lang: string;
  content: {
    logoAlt: string;
    companyName: string;
    companyTagline: string;
    themeToggleLabel: string;
  };
}

export function Header({ lang, content }: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="absolute inset-0 border-b border-[#d9cfbb]/80 bg-[#f3ecdf]/88 backdrop-blur-md dark:border-border/60 dark:bg-background/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#f6efe3]/90 via-[#f1e8d8]/55 to-transparent dark:from-background/70 dark:via-background/35" />

      <Container className="relative flex items-center justify-between py-3 sm:py-4">
        <Link href={`/${lang}`} className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d6c8af] bg-[#f8f2e8]/95 backdrop-blur-sm transition-colors duration-300 group-hover:border-primary/50 dark:border-white/10 dark:bg-background/75 sm:h-12 sm:w-12">
            <Image
              src={logo}
              alt={content.logoAlt}
              className="h-6 w-6 transition-opacity group-hover:opacity-80 sm:h-8 sm:w-8"
            />
          </div>
          <div>
            <span className="font-display block text-[1.4rem] leading-none text-foreground sm:text-2xl">
              {content.companyName}
            </span>
            <p className="mt-1 text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground sm:text-[0.68rem] sm:tracking-[0.3em]">
              {content.companyTagline}
            </p>
          </div>
        </Link>
        <ThemeToggle label={content.themeToggleLabel} />
      </Container>
    </header>
  );
}
