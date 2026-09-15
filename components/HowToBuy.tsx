import CopyAddress from "./CopyAddress";
import { LINKS } from "@/lib/constants";

const STEPS = [
  {
    frame: "01",
    title: "Get a wallet",
    copy: "Install a Solana wallet like Phantom or Solflare on your phone or browser.",
  },
  {
    frame: "02",
    title: "Fund it with SOL",
    copy: "Buy SOL on an exchange and send it to your wallet to cover the swap.",
  },
  {
    frame: "03",
    title: "Paste the contract",
    copy: "Open Dexscreener, search the pair, and confirm the address matches the one below.",
  },
  {
    frame: "04",
    title: "Swap and hold",
    copy: "Trade SOL for $AMC, stash it in your wallet, and enjoy the show.",
  },
];

export default function HowToBuy() {
  return (
    <section className="bg-marquee-paper py-20 text-marquee-ink sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-marquee text-4xl leading-tight sm:text-5xl">
            How to get tickets
          </h2>
          <a
            href={LINKS.dexscreener}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center rounded-sm bg-marquee-red px-5 py-2.5 font-marquee text-base tracking-wide text-marquee-paper transition-transform hover:-translate-y-0.5"
          >
            Open Dexscreener
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.frame} className="border-l-4 border-marquee-red pl-5">
              <span className="font-marquee text-3xl text-marquee-redDeep">
                {s.frame}
              </span>
              <h3 className="mt-2 font-marquee text-xl">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-marquee-ink/75">
                {s.copy}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-md">
          <CopyAddress />
        </div>
      </div>
    </section>
  );
}
