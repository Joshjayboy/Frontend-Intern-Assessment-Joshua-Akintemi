const features = [
  {
    title: "Expert-Led Learning",
    description:
      "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
  },
  {
    title: "Interactive Workshops",
    description:
      "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
  },
  {
    title: "Comprehensive Curriculum",
    description:
      "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
  },
  {
    title: "Global Recognition",
    description:
      "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
  },
];

export function TrainingConsultant() {
  return (
    <section className="py-16 px-4 bg-[#e8e1e6]">
      <div className="mx-auto max-w-6xl flex flex-col gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Training The Consultant
          </h2>
          <p className="text-sm font-medium text-brand-accent mt-1">
            Maximise Your Potential as a Certified Trainer:
          </p>
        </div>

        <p className="text-sm text-foreground/70 leading-relaxed max-w-4xl">
          With the help of our Training Consultants program, take a
          revolutionary step toward becoming a distinguished certified training
          consultant. Learn from professionals in the field, immerse yourself in
          a thorough curriculum, and hone your training methods through
          interactive workshops. Participating in our program will enable you to
          gain expertise in diverse courses while also developing the abilities
          to mentor and encourage others in their career advancement.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-brand-plum rounded-[8px]">
          {features.map((feature) => (
            <div key={feature.title} className="p-5 flex flex-col gap-2">
              <h3 className="text-sm font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

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
    </section>
  );
}
