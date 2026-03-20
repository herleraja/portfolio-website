import { useEffect, useRef } from 'react';

export default function RainEffect() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create rain drops
    const createRainDrop = () => {
      const drop = document.createElement('div');
      drop.className = 'rain-drop';

      // Random horizontal position
      const left = Math.random() * 100;
      drop.style.left = `${left}%`;

      // Random animation duration (speed)
      const duration = Math.random() * 3 + 2; // 2-5 seconds
      drop.style.animationDuration = `${duration}s`;

      // Random delay
      const delay = Math.random() * 5;
      drop.style.animationDelay = `${delay}s`;

      // Random opacity
      const opacity = Math.random() * 0.3 + 0.1;
      drop.style.opacity = opacity.toString();

      container.appendChild(drop);

      // Remove drop after animation completes
      setTimeout(
        () => {
          if (container.contains(drop)) {
            container.removeChild(drop);
          }
        },
        (duration + delay) * 1000
      );
    };

    // Create initial rain drops
    const dropCount = 50;
    for (let i = 0; i < dropCount; i++) {
      setTimeout(() => createRainDrop(), i * 100);
    }

    // Continuously create new drops
    const interval = setInterval(() => {
      createRainDrop();
    }, 300);

    return () => {
      clearInterval(interval);
      // Clean up drops
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef} className="rain-container" />;
}
