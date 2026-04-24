import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full">
      <Image
        src="/hero.jpg"
        alt="Training and development background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative mx-auto max-w-5xl px-4 py-20 md:py-28 text-center">
        <span className="inline-flex items-center justify-center rounded-[100px] bg-[#221e1c] px-12 py-3 gap-[10px] text-xs tracking-widest text-white">
          WHAT WE DO
        </span>

        <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
          Training and Development
        </h1>
        <p className="mx-auto mt-5 max-w-full text-base md:text-lg text-white/85">
          Our comprehensive range of programs and resources is designed to
          enhance skills, broaden knowledge, and propel careers forward in
          today's ever-evolving landscape.
        </p>
        <a
          href="#"
          className="mt-8 inline-flex items-center rounded-md bg-brand-plum px-6 py-3 text-sm font-medium text-white hover:bg-brand-plum-deep transition-colors"
        >
          Book a Consultation
        </a>
      </div>
    </section>
  );
}
