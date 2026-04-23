import Image from "next/image";

const trainings = [
  "Leadership Training",
  "Strategic Planning and Implementation",
  "Project Management",
  "Sustainability Training",
  "Customised Training",
];

export function CorporateTrainings() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 flex flex-col gap-5">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Corporate Trainings
          </h2>
          <p className="text-sm text-foreground/70 leading-relaxed">
            Empower your team with our customised Corporate Training programs
            designed to address the unique needs and objectives of your
            organisation. Our expert facilitators work closely with your team to
            deliver tailored learning experiences that align with your company's
            goals and values.
          </p>
          <ul className="flex flex-col gap-3 mt-2 pl-[30px]">
            {trainings.map((item) => (
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
            src="/corporate.svg"
            alt="Corporate training session with facilitator and team"
            width={560}
            height={380}
            className="object-cover rounded-lg w-full"
          />
        </div>
      </div>
    </section>
  );
}
