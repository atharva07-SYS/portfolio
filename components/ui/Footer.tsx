const year = new Date().getFullYear();

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/atharva-padalghare-967814370" },
  { label: "GitHub", href: "https://github.com/atharva07-SYS" },
  { label: "Email", href: "mailto:the.real.atharva@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-10 px-6">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        {/* Left */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-[11px] tracking-[0.2em] text-foreground/20 uppercase font-medium">
            Atharva Padalghare
          </span>
          <span className="text-[11px] text-foreground/15 font-light">
            © {year} — All rights reserved.
          </span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="text-[11px] tracking-[0.15em] text-foreground/25 uppercase hover:text-foreground/50 transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
