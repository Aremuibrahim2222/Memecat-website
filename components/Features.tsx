const FEATURES = [
  {
    label: "Reel 1",
    title: "AMC bloodline",
    copy: "Named for the theater chain that turned retail traders into folklore. Memecat carries that same stubborn, crowd-powered energy.",
  },
  {
    label: "Reel 2",
    title: "Cat-coin country",
    copy: "Solana has its own colony of cat mascots and Memecat was raised there — fast chain, low fees, feline chaos included.",
  },
  {
    label: "Reel 3",
    title: "Cinematic bit",
    copy: "Popcorn buckets, marquee lights, film reels — the whole aesthetic is one long trailer for a coin that doesn't take itself too seriously.",
  },
];

export default function Features() {
  return (
    <section className="bg-marquee-ink py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-xl font-marquee text-4xl leading-tight text-marquee-paper sm:text-5xl">
          Three reels, one cat
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="ticket flex flex-col gap-4 rounded-sm bg-marquee-paper p-6 text-marquee-ink shadow-ticket"
            >
              <span className="font-marquee text-sm tracking-widest text-marquee-redDeep">
                {f.label}
              </span>
              <h3 className="font-marquee text-2xl leading-none">{f.title}</h3>
              <p className="text-sm leading-relaxed text-marquee-ink/75">
                {f.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
