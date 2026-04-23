import Image from "next/image";

const skills = [
  "Strategic Career Guidance",
  "Leadership Development",
  "CV Development",
  "Sustainability Leadership",
  "Communication Skills",
  "Business Model",
];

export function TransformationHub() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="mx-auto max-w-6xl rounded-2xl bg-brand-pink-tint p-8 md:p-12 flex flex-col gap-6">
        <div>
          <p className="text-sm font-medium text-[#1671D9] italic">
            Learning With Our CEO:
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Transformation Hub With Jite Newton
          </h2>
        </div>

        <p className="text-sm text-foreground/70 leading-relaxed max-w-4xl">
          Transformation Hub with Jite Newton is a flagship webinar series
          curated by the CEO, Dr. Jite Newton. Designed to elevate career
          trajectories and leadership capabilities, this exclusive event offers
          invaluable insights and strategies for personal and professional
          growth. Whether you're seeking to advance your career or enhance your
          leadership skills, the Transformation Hub provides a transformative
          learning experience to unlock your full potential and drive success in
          your endeavours.
        </p>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="flex-shrink-0">
            <Image
              src="/transformation-hub.svg"
              alt="Woman in a professional setting representing the Transformation Hub"
              width={320}
              height={260}
              className="object-cover rounded-lg w-full"
            />
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-4">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 text-sm text-foreground/80"
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
                  {skill}
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="self-start inline-flex items-center gap-2 bg-brand-plum px-6 py-3 text-sm font-medium text-white hover:bg-brand-plum-deep transition-colors rounded-xs"
            >
              Learn More
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
