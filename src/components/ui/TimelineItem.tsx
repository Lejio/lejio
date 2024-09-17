import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "../../lib/hooks";

export default function TimelineItem({ children, index, href }: {children: React.ReactNode, index: number, href: string}) {

  const ref = useRef<HTMLLIElement>(null); // Correctly type the ref
  const isInView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isInView, controls]);

  return (
    <a href={href}>
      <motion.li
        key={index}
        ref={ref} // Correctly assign the ref to the motion component
        // className="mb-10 "
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      >
        <div className="absolute w-[50px] h-[50px] bg-white rounded-full -mt-3 -start-7 border-4 border-black"></div>
        { children }
      </motion.li>
    </a>
  )
}

