import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

// Custom hook to detect if an element is in view
function useInView(ref: React.RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );
    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
}

const Timeline: React.FC = () => {
  const timelineItems = [
    {
      date: "February 2022",
      title: "Application UI code in Tailwind CSS",
      description:
        "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
    },
    {
      date: "March 2022",
      title: "Marketing UI design in Figma",
      description:
        "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
    },
  ];

  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
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
          <motion.li
            key={index}
            ref={ref} // Correctly assign the ref to the motion component
            className="mb-10 "
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="absolute w-3 h-3 bg-red-600 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 mx-3 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {item.date}
            </time>
            <div id="professional-experience-card">
              <div id="professional-experience-card-content" className=" w-full rounded-2xl border-solid border-2 p-5 m-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-base font-normal text-gray-500">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.li>
        );
      })}
    </ol>
  );
};

export default Timeline;
