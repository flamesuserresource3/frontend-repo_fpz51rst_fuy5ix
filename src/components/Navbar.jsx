import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <a href="#" className="font-semibold tracking-tight">Abiizar Hakim</a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/80 transition hover:text-white">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="rounded-full border border-white/20 px-3 py-1.5 text-sm text-white/90 transition hover:bg-white/10">Work with me</a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Toggle menu">
          <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </div>

      {open && (
        <div className="mx-auto block max-w-7xl px-6 pb-4 md:hidden">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-1 block rounded-lg border border-white/20 px-3 py-2 text-center text-sm text-white/90 transition hover:bg-white/10">Work with me</a>
          </div>
        </div>
      )}
    </header>
  );
}
