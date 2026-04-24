import Image from "next/image";

const trainings = [
  "Leadership Development",
  "Soft Skills Development",
  "Industry Specific Knowledge",
  "Technical Skills Enhancement",
  "Time Management and Productivity",
  "Career Development",
];

export function IndividualTraining() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 flex justify-start">
          <Image
            src="/individual-training.svg"
            alt="Two professionals in a training session"
            width={560}
            height={380}
            className="object-cover rounded-lg w-full"
          />
        </div>

        <div className="flex-1 flex flex-col gap-5">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground font-nunito">
            Personalised Individual Training
          </h2>
          <p className="text-sm text-foreground/70 leading-relaxed font-nunito-sans">
            Begin a journey of lifelong learning and professional development
            with Tobams Group's diverse range of training programs for
            individuals. From technical skills mastery to soft skills
            enhancement, our courses cover a wide spectrum of topics to meet the
            evolving needs of today's professionals.
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
      </div>
    </section>
  );
}
