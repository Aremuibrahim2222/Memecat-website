import { LINKS } from "@/lib/constants";

const CHANNELS = [
  {
    name: "X",
    copy: "Trailers, drops, and the loudest reactions.",
    href: LINKS.x,
    handle: "@aiminicat",
  },
  {
    name: "Telegram",
    copy: "Where the audience actually talks to each other.",
    href: LINKS.telegram,
    handle: "ArtificialMiniCat",
  },
  {
    name: "Dexscreener",
    copy: "Live chart, live price, no popcorn required.",
    href: LINKS.dexscreener,
    handle: "AMC / SOL pair",
  },
];

export default function Community() {
  return (
    <section className="relative overflow-hidden bg-marquee-red py-20 sm:py-28">
      <div className="grain-overlay" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="font-marquee text-4xl leading-tight text-marquee-paper sm:text-5xl">
          Join the audience
        </h2>
        <p className="mt-4 max-w-lg text-lg text-marquee-paper/90">
          No membership card required — just a wallet and a taste for chaos.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {CHANNELS.map((c) => (
            <a
              key={c.name}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col justify-between rounded-sm border-2 border-marquee-ink bg-marquee-ink/90 p-6 transition-transform hover:-translate-y-1"
            >
              <div>
                <h3 className="font-marquee text-2xl text-marquee-gold">
                  {c.name}
                </h3>
                <p className="mt-2 text-sm text-marquee-paper/80">{c.copy}</p>
              </div>
              <span className="mt-6 font-mono text-xs text-solana-teal">
                {c.handle} ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
