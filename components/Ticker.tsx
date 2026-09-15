import { CONTRACT_ADDRESS } from "@/lib/constants";

const ITEMS = [
  "MEMECAT $AMC",
  "NOW SHOWING ON ROBINHOOD",
  CONTRACT_ADDRESS,
  "POPCORN ALWAYS READY",
  "RATED F FOR FEATURE PRESENTATION",
];

export default function Ticker() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden border-y-2 border-marquee-ink bg-marquee-ink py-3">
      <div className="ticker-track">
        {loop.map((item, i) => (
          <span
            key={i}
            className="mx-6 flex items-center gap-6 whitespace-nowrap font-marquee text-sm tracking-[0.15em] text-marquee-gold sm:text-base"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-marquee-red" />
          </span>
        ))}
      </div>
    </div>
  );
}
