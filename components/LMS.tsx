import Image from "next/image";

const courses = [
  "Business Analysis",
  "Design Thinking",
  "Effective Communication",
  "Entrepreneurship",
  "Career Development",
  "Business Model",
];

export function LMS() {
  return (
    <section className="bg-lms-bg py-16 px-4 my-[40px]">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 flex justify-center">
          <div className="w-96 h-96 md:w-[480px] md:h-[480px] rounded-full overflow-hidden">
            <Image
              src="/lms.jpg"
              alt="Two professionals smiling"
              width={480}
              height={480}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-5">
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-plum">
            Learning Management System
          </h2>

          <div className="rounded-lg bg-[#5712441A] p-5 text-sm text-foreground/80 leading-relaxed">
            {/* <div className="rounded-lg bg-brand-pink-soft p-5 text-sm text-foreground/80 leading-relaxed"> */}
            <p>
              TG Academy is a hub of knowledge and skill-building resources
              designed to empower tech talents on their learning journey. From
              technical courses covering the latest programming languages and
              development frameworks to soft skills training in leadership,
              effective communication and project management, TG Academy offers
              a wide range of courses to cater to diverse learning needs. With
              accessible and interactive learning materials, individuals can
              enhance their skills and stay ahead in today's competitive tech
              landscape.
            </p>

            <p className="mt-4 font-semibold text-foreground">
              Some of our courses include:
            </p>

            <ul className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-1">
              {courses.map((course) => (
                <li
                  key={course}
                  className="flex items-center gap-1 whitespace-nowrap"
                >
                  <span className="text-foreground">•</span> {course}
                </li>
              ))}
            </ul>
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
      </div>
    </section>
  );
}
