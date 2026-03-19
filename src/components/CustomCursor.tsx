import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import THEME from '../constants/theme';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring for the outer ring only
    const ringX = useSpring(mouseX, { stiffness: 400, damping: 30 });
    const ringY = useSpring(mouseY, { stiffness: 400, damping: 30 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('a, button, [role="button"], .cursor-pointer')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">

            {/* 1. Precise Core Dot - Instant */}
            <motion.div
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: isClicking ? 0.7 : 1,
                    backgroundColor: isHovering ? THEME.colors.secondary : THEME.colors.dark,
                }}
                className="w-1.5 h-1.5 rounded-full z-20 mix-blend-difference"
            />

            {/* 2. Elegant Outer Ring - Delayed/Smooth */}
            <motion.div
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: '-50%',
                    translateY: '-50%',
                    borderColor: THEME.colors.primaryAlpha(0.3)
                }}
                animate={{
                    scale: isHovering ? 2.5 : 1,
                    opacity: isHovering ? 0.8 : 0.3,
                    borderColor: isHovering ? THEME.colors.dark : THEME.colors.primaryAlpha(0.3),
                }}
                className="w-8 h-8 border rounded-full z-10 transition-colors duration-500"
            />

            {/* 3. Subtle Ambient Light - Static follow */}
            <motion.div
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: '-50%',
                    translateY: '-50%',
                    backgroundColor: THEME.colors.primaryAlpha(0.2)
                }}
                animate={{
                    scale: isHovering ? 4 : 2,
                    opacity: isHovering ? 0.05 : 0.02,
                }}
                className="w-20 h-20 rounded-full blur-3xl"
            />
        </div>
    );
};

export default CustomCursor;

