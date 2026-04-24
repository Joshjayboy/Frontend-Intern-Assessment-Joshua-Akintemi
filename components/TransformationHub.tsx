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
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="rounded-2xl bg-brand-pink-tint p-8 md:p-12 flex flex-col gap-6">
          <div className="flex flex-col">
            <p className="font-nunito font-[600] italic text-[20px] leading-[130%] tracking-[0%] text-[#1671D9]">
              Learning With Our CEO:
            </p>
            <p className="-ml-[4px] font-nunito font-[600] italic text-[32px] leading-[130%] tracking-[0%] text-[#571244]">
              Transformation Hub With Jite Newton
            </p>
          </div>
          <p className="font-nunito-sans font-[400] text-[18px] leading-[150%] tracking-[0%] text-[#151515]">
            Transformation Hub with Jite Newton is a flagship webinar series
            curated by the CEO, Dr. Jite Newton. Designed to elevate career
            trajectories and leadership capabilities, this exclusive event
            offers invaluable insights and strategies for personal and
            professional growth. Whether you're seeking to advance your career
            or enhance your leadership skills, the Transformation Hub provides a
            transformative learning experience to unlock your full potential and
            drive success in your endeavours.
          </p>

          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-shrink-0 order-2 md:order-1">
              <Image
                src="/transformation-hub.svg"
                alt="Woman in a professional setting representing the Transformation Hub"
                width={320}
                height={260}
                className="object-cover rounded-lg w-full"
              />
            </div>

            <div className="flex-1 flex flex-col gap-6 bg-[#fde4e7] px-[20px] py-8 rounded-[8px] self-stretch justify-between order-1 md:order-2">
              <ul className="grid grid-cols-2 gap-x-6 gap-y-4">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center font-nunito-sans font-[400] gap-2 text-sm text-[#151515] bg-white rounded-lg px-4 py-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="23"
                      viewBox="0 0 19 23"
                      fill="none"
                    >
                      <path
                        d="M10.3333 1V9.16667H17.3333L8 22V13.8333H1L10.3333 1Z"
                        fill="#DDD0DA"
                        stroke="#571244"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="self-start inline-flex items-center gap-2 bg-brand-plum px-6 py-3 text-sm font-medium text-white hover:bg-brand-plum-deep transition-colors rounded-[4px]"
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
      </div>
    </section>
  );
}
