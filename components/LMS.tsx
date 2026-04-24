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
    <section className="bg-lms-bg py-16 px-4 my-[40px] pt-6 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8 flex flex-col md:flex-row items-center gap-10">
        <div className="shrink-0 justify-start hidden md:flex">
          <div className="w-[480px] h-[480px] rounded-full overflow-hidden">
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
          <h2 className="text-[20px] md:text-4xl font-[600] text-brand-plum font-nunito">
            Learning Management System
          </h2>

          <div className="w-72 h-72 rounded-full overflow-hidden mx-auto md:hidden">
            <Image
              src="/lms.jpg"
              alt="Two professionals smiling"
              width={288}
              height={288}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="rounded-[8px] bg-[#5712441A] p-[24px] flex flex-col gap-[20px] w-full min-w-0">
            <p className="font-nunito-sans font-[400] text-[18px] leading-[150%] tracking-[0%] text-[#151515]">
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

            <p className="font-nunito-sans font-[700] text-[18px] leading-[150%] tracking-[0%] text-[#571244]">
              Some of our courses include:
            </p>
            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-1">
              {courses.map((course) => (
                <li
                  key={course}
                  className="flex items-center gap-1 font-nunito-sans font-[400] text-[16px] leading-[150%] tracking-[0%] text-[#151515]"
                >
                  <span className="text-[#151515]">•</span> {course}
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
