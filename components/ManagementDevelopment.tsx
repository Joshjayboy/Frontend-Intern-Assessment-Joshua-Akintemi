import Image from "next/image";

const benefits = [
  "Enhanced Leadership Skills",
  "Improved Employee Engagement",
  "Stronger Organisational Culture",
  "Sustainable Growth",
];

export function ManagementDevelopment() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="mx-auto max-w-6xl rounded-2xl bg-brand-plum p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 flex justify-center">
          <Image
            src="/management-development.svg"
            alt="Three professionals reviewing content on a tablet"
            width={480}
            height={500}
            className="object-cover rounded-2xl w-full h-full"
          />
        </div>

        <div className="flex-1 flex flex-col gap-5">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Management Development Program
          </h2>
          <p className="text-sm text-white/80 leading-relaxed">
            Tobams Group offers a comprehensive Management Development Program
            designed to equip corporate organisations with the high-performing
            leaders they need to thrive.
          </p>
          <p className="text-sm text-white/80 leading-relaxed">
            Our program includes workshops, seminars, coaching sessions, online
            courses, and experiential learning opportunities designed to improve
            leadership, strategic thinking, communication, and other essential
            managerial competencies for corporate organisations.
          </p>
          <ul className="flex flex-col gap-3 mt-2 pl-[16px]">
            {benefits.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 bg-[#8F6182] rounded-md px-4 py-3 text-sm text-white"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-white shrink-0"
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
