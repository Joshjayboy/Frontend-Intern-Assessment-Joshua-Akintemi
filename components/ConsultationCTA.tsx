export function ConsultationCTA() {
  return (
    <section className="py-[20px] px-[89px] bg-[#f9f9f9]">
      <div className="font-nunito mx-auto max-w-6xl rounded-md bg-brand-plum py-14 px-8 flex flex-col items-center gap-6 text-center">
        <p className="font-nunito text-white text-base md:text-lg leading-relaxed">
          <span className="md:hidden">
            Don't just dream it—let's build it! Click now and start your project
            with Tobams Group. Your journey to digital excellence begins here.
          </span>
          <span className="hidden md:inline">
            Want to accelerate professional growth and development at your
            organisation?
            <br />
            See how we can help.
          </span>
        </p>

        <a
          href="#"
          className="inline-flex items-center bg-white px-6 py-2.5 text-sm font-semibold text-brand-plum hover:bg-white/90 transition-colors rounded-xs"
        >
          Book a Consultation
        </a>
      </div>
    </section>
  );
}
