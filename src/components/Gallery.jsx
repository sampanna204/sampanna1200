import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
} from "motion/react";

const IMGS = [
  "/assets/img1.jpeg",
  "/assets/img2.jpeg",
  "/assets/img3.jpeg",
  "/assets/img4.jpeg",
  "/assets/img5.jpeg",
  "/assets/img6.jpeg",
  "/assets/img7.jpeg",
  "/assets/img8.jpeg",
];

const RollingGallery = ({
  autoplay = false,
  pauseOnHover = false,
  images = [],
}) => {
  images = images.length > 0 ? images : IMGS;

  const [isScreenSizeSm, setIsScreenSizeSm] = useState(
    window.innerWidth <= 640,
  );
  useEffect(() => {
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cylinderWidth = isScreenSizeSm ? 2100 : 1800;
  const faceCount = images.length;
  const faceWidth = (cylinderWidth / faceCount) * 1.8;
  const radius = cylinderWidth / (2 * Math.PI);

  const dragFactor = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const transform = useTransform(
    rotation,
    (val) => `rotate3d(0,1,0,${val}deg)`,
  );

  const startInfiniteSpin = (startAngle) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  const handleUpdate = (latest) => {
    if (typeof latest.rotateY === "number") {
      rotation.set(latest.rotateY);
    }
  };

  const handleDrag = (_, info) => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);

    if (autoplay) {
      startInfiniteSpin(finalAngle);
    }
  };

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  };
  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  return (
    <section id="gallery" className="gallery-section-carousel">
      <div className="container">
        <div className="gallery-header">
          <h2 className="gallery-title">Gallery</h2>
          <p className="gallery-subtitle">
            A visual journey through my personal moments and creative projects
          </p>
        </div>

        <div className="relative h-[500px] w-full overflow-hidden">
          <div className="flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
            <motion.div
              drag="x"
              dragElastic={0}
              onDrag={handleDrag}
              onDragEnd={handleDragEnd}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              animate={controls}
              onUpdate={handleUpdate}
              style={{
                transform: transform,
                rotateY: rotation,
                width: cylinderWidth,
                transformStyle: "preserve-3d",
              }}
              className="flex min-h-[200px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
            >
              {images.map((url, i) => (
                <div
                  key={i}
                  className="group absolute flex h-fit items-center justify-center p-[8%] [backface-visibility:hidden] md:p-[6%]"
                  style={{
                    width: `${faceWidth}px`,
                    transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`,
                  }}
                >
                  <img
                    src={url}
                    alt="gallery"
                    className="pointer-events-none h-[200px] w-[150px] rounded-[15px] object-cover
                               transition-transform duration-300 ease-out group-hover:scale-105
                               xs:h-[220px] xs:w-[165px]
                               sm:h-[280px] sm:w-[210px]
                               md:h-[320px] md:w-[240px]
                               lg:h-[360px] lg:w-[270px]
                               xl:h-[400px] xl:w-[300px]"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return <RollingGallery autoplay={true} pauseOnHover={true} />;
};

export default Gallery;