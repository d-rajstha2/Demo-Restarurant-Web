import { motion, HTMLMotionProps } from "motion/react";
import { cn } from "@/src/lib/utils";

interface FadeInProps extends HTMLMotionProps<"div"> {
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
}

export const FadeIn = ({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 20,
  ...props
}: FadeInProps) => {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1], // expo-out style
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({ children, className, ...props }: HTMLMotionProps<"div">) => (
  <motion.div
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    variants={{
      initial: {},
      animate: {
        transition: {
          staggerChildren: 0.1,
        },
      },
    }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const FloatingLeaf = ({ className, delay = 0 }: { className?: string; delay?: number }) => (
  <motion.div
    animate={{
      y: [-8, 8, -8],
    }}
    transition={{
      duration: 5,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className={cn("pointer-events-none select-none opacity-10", className)}
  >
    <svg width="120" height="120" viewBox="0 0 120 120" fill="currentColor">
      <path d="M60 10C60 10 30 40 30 70C30 85 45 100 60 100C75 100 90 85 90 70C90 40 60 10 60 10ZM60 90C50 90 40 82 40 70C40 55 60 30 60 30C60 30 80 55 80 70C80 82 70 90 60 90Z" />
      <path d="M60 35L55 45H65L60 35Z" />
      <path d="M60 55L50 65H70L60 55Z" />
      <path d="M60 75L45 85H75L60 75Z" />
    </svg>
  </motion.div>
);
