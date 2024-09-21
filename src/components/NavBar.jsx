import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ThemeButton from './ui/ThemeButton';
import { div } from 'framer-motion/client';

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const timeoutId = useRef(null);

  const handleMouseEnter = () => {
    setIsExpanded(true);
    // Clear any existing timeout to prevent premature collapse
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
      timeoutId.current = null;
    }
  };

  const handleMouseLeave = () => {
    // Set a timeout to collapse the navbar after 2 seconds
    timeoutId.current = setTimeout(() => {
      setIsExpanded(false);
    }, 2000); // Adjust the delay (in milliseconds) as needed
  };

  useEffect(() => {
    // Clean up the timeout when the component unmounts
    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, []);

  return (
    <div className=' flex w-full justify-center align-top items-center'>
        <motion.nav
        initial={{ y: -30 }}
        animate={{ y: isExpanded ? 15 : -30 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20, duration: .3 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
            position: 'fixed',
            top: 0,
            zIndex: 50,
        }}
        >
        <div className="flex justify-center items-center">
            <div className="text-white bg-black dark:bg-white dark:text-black p-2 px-5 rounded-full flex flex-row gap-5 justify-center items-center">
            <a href="/#home">Home</a>
            <a href="/#experience">Experience</a>
            <a href="/#personalprojects">Projects</a>
            <ThemeButton client:only="react" />
            </div>
        </div>
        </motion.nav>
    </div>
  );
};

export default Navbar;
