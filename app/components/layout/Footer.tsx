import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/logo.svg';
import { Container } from '../ui/Container';

export function Footer() {
  return (
    <footer className="py-12 bg-background text-muted-foreground border-t border-border">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 mb-8">
          {/* Company Info */}
          <div className="md:max-w-xs">
            <div className="flex items-center gap-3 mb-4">
              <Image src={logo} alt="Cotersus Logo" className="w-10 h-10" />
              <h3 className="font-fjalla text-2xl bg-gradient-brand bg-clip-text text-transparent">
                Cotersus
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Your reliable partner for full-stack software development solutions
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <p>Cotersus BV</p>
              <p>Beigemsesteenweg 387, 1852 Beigem, Belgium</p>
              <p>VAT: BE 0791.547.318</p>
              <p>
                <a
                  href="mailto:info@cotersus.be"
                  className="hover:text-brand-orange transition-colors"
                >
                  info@cotersus.be
                </a>
              </p>
            </div>
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://www.linkedin.com/company/88920103"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-gradient-brand transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://x.com/CotersusIT"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-gradient-brand transition-all duration-300 transform hover:scale-110"
                aria-label="X (Twitter)"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://bsky.app/profile/cotersus.be"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-gradient-brand transition-all duration-300 transform hover:scale-110"
                aria-label="Bluesky"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.038.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.018.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" />
                </svg>
              </a>
            </div>
            <div className="text-sm space-y-2">
              <Link
                href="/privacy"
                className="block hover:text-brand-orange transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Cotersus BV. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
