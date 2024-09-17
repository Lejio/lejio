import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Rocket from "/src/assets/rocket_1.png";
import { useInView } from "../../lib/hooks";


const Timeline: React.FC = () => {
  const timelineItems = [
    {
      date: "August 2024 - Present",
      href: "msuirrigation",
      title: "Michigan State University",
      group: "Irrigation Laboratory",
      subtitle: "On-Call · Full Stack Software Developer",
      description:
        "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
    },
    {
      date: "May 2022 - May 2023",
      href: "johnshopkins",
      title: "Johns Hopkins University APL",
      group: "Lunar Vertex",
      subtitle: "Full-Time · Research Intern",
      description:
        "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
    },
  ];

  return (
    <div>
      <ol className="relative h-[70vh] border-s-4 border-gray-200 dark:border-gray-700 lg:mx-[5vw]">
      <h2 className="px-10 flex items-center font-bold text-6xl">
          Professional Experience
          <span className="inline-flex">
              <img className="w-32 inline-block rotate-45" src={Rocket.src} alt="Gear Icon" />
          </span>
      </h2>
      <p className=" px-10">My Journey as a Developer</p>
        <div id="separator" className=" h-24">
        </div>
        {timelineItems.map((item, index) => {
          const ref = useRef<HTMLLIElement>(null); // Correctly type the ref
          const isInView = useInView(ref);
          const controls = useAnimation();

          useEffect(() => {
            if (isInView) {
              controls.start({ opacity: 1, y: 0 });
            }
          }, [isInView, controls]);

          return (
            <a href="">
              <motion.li
                key={index}
                ref={ref} // Correctly assign the ref to the motion component
                // className="mb-10 "
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="absolute w-[50px] h-[50px] bg-white rounded-full -mt-3 -start-7 border-4 border-black"></div>
                <time className="mb-1 mx-7 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {item.date}
                </time>
                <div id="professional-experience-card">
                  <div id="professional-experience-card-content" className=" w-[60vw] flex flex-col gap-5 rounded-2xl border-solid border-2 p-5 m-5 mb-40">
                    <div id="professional-experience-title">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.title} | {item.group}
                      </h3>
                      <p className="text-base font-normal text-gray-500">
                        {item.subtitle}
                      </p>
                    </div>
                    <div>
                      {item.description}
                    </div>
                  </div>
                </div>
              </motion.li>
            </a>
          );
        })}
      </ol>
    </div>
  );
};

export default Timeline;