import Image from "next/image";

export default function About() {
  return (
    <section className="bg-marquee-paper py-20 text-marquee-ink sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-3 -z-10 rotate-2 rounded-3xl bg-marquee-red" />
          <Image
            src="/memecat-pfp.jpg"
            alt="Close-up of the Memecat mascot artwork"
            width={480}
            height={480}
            className="w-full rounded-2xl border-4 border-marquee-ink object-cover"
          />
        </div>

        <div>
          <h2 className="font-marquee text-4xl leading-tight sm:text-5xl">
            The feature presentation
          </h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-marquee-ink/80">
            <p>
              Memecat is a Robinhood memecoin built around one character: an
              artificial mini cat with a serious popcorn habit. He&apos;s
              equal parts Wall Street folk hero and internet cat, stitched
              together from two cultures that were always going to collide
              eventually.
            </p>
            <p>
              One half of his DNA comes from AMC Entertainment, the theater
              chain that became a meme-stock legend when a crowd of retail
              traders turned a struggling cinema business into a
              rallying cry. The other half comes from Robinhood&apos;s own
              cat-coin scene, the corner of the chain where feline mascots
              and fast, cheap transactions have become their own kind of
              tradition.
            </p>
            <p>
              Memecat sits at the intersection: box-office energy, diamond-paw
              conviction, and a mask that says he came for the popcorn and
              stayed for the chaos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
