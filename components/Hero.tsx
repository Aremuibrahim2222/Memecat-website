import Image from "next/image";
import CopyAddress from "./CopyAddress";
import { LINKS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-marquee-red">
      <div className="grain-overlay" />
      <div className="h-3 bulb-strip" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-16 text-center sm:py-20 lg:flex-row lg:items-center lg:gap-16 lg:py-28 lg:text-left">
        <div className="flex-1">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-marquee-ink bg-marquee-ink/90 px-3 py-1 text-xs font-semibold tracking-wide text-solana-teal">
            <span className="h-1.5 w-1.5 rounded-full bg-solana-teal" />
            Live on Solana
          </span>

          <h1 className="mt-5 font-marquee text-[3.4rem] leading-[0.95] text-marquee-paper drop-shadow-[0_4px_0_rgba(23,15,12,0.9)] sm:text-7xl lg:text-8xl">
            MEMECAT
          </h1>
          <p className="mt-1 font-marquee text-2xl tracking-wide text-marquee-gold sm:text-3xl">
            ( $AMC )
          </p>

          <p className="mx-auto mt-6 max-w-md text-balance text-lg text-marquee-paper/90 lg:mx-0">
            An artificial mini cat with a popcorn habit, headlining Solana&apos;s
            meme-stock revival. Part AMC Entertainment folklore, part cat-coin
            chaos, one hundred percent feature presentation.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href={LINKS.dexscreener}
              target="_blank"
              rel="noreferrer"
              className="rounded-sm bg-marquee-ink px-6 py-3 font-marquee text-lg tracking-wide text-marquee-gold shadow-ticket transition-transform hover:-translate-y-0.5"
            >
              Buy $AMC
            </a>
            <a
              href={LINKS.telegram}
              target="_blank"
              rel="noreferrer"
              className="rounded-sm border-2 border-marquee-ink bg-transparent px-6 py-3 font-marquee text-lg tracking-wide text-marquee-paper transition-transform hover:-translate-y-0.5 hover:bg-marquee-ink/20"
            >
              Telegram
            </a>
            <a
              href={LINKS.x}
              target="_blank"
              rel="noreferrer"
              className="rounded-sm border-2 border-marquee-ink bg-transparent px-6 py-3 font-marquee text-lg tracking-wide text-marquee-paper transition-transform hover:-translate-y-0.5 hover:bg-marquee-ink/20"
            >
              Follow on X
            </a>
          </div>

          <div className="mx-auto mt-8 max-w-sm lg:mx-0">
            <CopyAddress />
          </div>
        </div>

        <div className="relative shrink-0">
          <div className="absolute inset-0 -z-10 rounded-full bg-marquee-gold/40 blur-3xl" />
          <div className="relative rounded-2xl border-4 border-marquee-ink bg-marquee-ink p-2 shadow-ticket">
            <Image
              src="/memecat-pfp.jpg"
              alt="Memecat, the artificial mini cat mascot of $AMC, wearing a glowing red bandit mask"
              width={340}
              height={340}
              priority
              className="h-64 w-64 rounded-xl object-cover sm:h-80 sm:w-80"
            />
          </div>
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border-2 border-marquee-ink bg-marquee-gold px-4 py-1 font-marquee text-sm tracking-wide text-marquee-ink">
            Now Showing
          </span>
        </div>
      </div>

      <div className="h-3 bulb-strip bulb-strip--dim" />
    </section>
  );
}
