import { CONTRACT_ADDRESS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-marquee-ink py-12 text-marquee-paper/70">
      <div className="mx-auto max-w-6xl px-6">
        <div className="filmstrip mb-10 opacity-60" />
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-marquee text-xl text-marquee-paper">
              MEMECAT ($AMC)
            </p>
            <p className="mt-2 max-w-sm text-xs leading-relaxed">
              {CONTRACT_ADDRESS}
            </p>
          </div>
          <p className="max-w-md text-xs leading-relaxed">
            Memecat is a community memecoin with no intrinsic value or
            expectation of financial return. It is not affiliated with AMC
            Entertainment Holdings, Inc. Nothing here is financial advice —
            do your own research before buying any token.
          </p>
        </div>
        <p className="mt-10 text-xs">
          © {new Date().getFullYear()} Memecat. Grab some popcorn.
        </p>
      </div>
    </footer>
  );
}
