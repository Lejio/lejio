import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "../../lib/hooks";

export default function TimelineItem({ children, index }: {children: React.ReactNode, index: number}) {

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
      className=" max-w-[1000px]"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      { children }
    </motion.li>
)
}

