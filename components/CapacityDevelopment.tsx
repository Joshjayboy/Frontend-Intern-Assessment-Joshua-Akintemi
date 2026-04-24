import Image from "next/image";

const benefits = [
  "Tailored Training Programs",
  "Expert-Led Workshops",
  "Personalized Mentorship",
  "Technical Skills Enhancement",
  "Collaborative Learning Environment",
  "Ongoing Support and Resources",
];

export function CapacityDevelopment() {
  return (
    <section className="bg-[#f9f9f9] pb-10">
      <div className="bg-white rounded-b-[16px] py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 flex flex-col gap-5">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground font-nunito">
              Capacity Development
            </h2>
            <p className="text-sm text-foreground/70 leading-relaxed font-nunito-sans">
              At Tobams Group, we empower individuals and organizations through
              tailored training programs, expert-led workshops, and personalized
              mentorship. We are committed to your success and growth. We are
              dedicated to providing a comprehensive suite of benefits designed
              to foster your development and success:
            </p>
            <ul className="flex flex-col gap-3 mt-2 pl-[30px]">
              {benefits.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-foreground/80"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-brand-plum shrink-0"
                  >
                    <path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 flex justify-center">
            <Image
              src="/capacity-development.svg"
              alt="Facilitator presenting to a team in a workshop"
              width={560}
              height={380}
              className="object-cover rounded-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
