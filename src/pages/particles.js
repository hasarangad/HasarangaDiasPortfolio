import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // Canvas loaded successfully
  };

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: 0,
      },
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            quantity: 3,
          },
          grab: {
            distance: 140,
            links: {
              opacity: 0.8,
            },
          },
        },
      },
      particles: {
        color: {
          value: "#FFFFFF",
        },
        links: {
          color: "#FFFFFF",
          distance: 140,
          enable: true,
          opacity: 0.35,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1.2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 95,
        },
        opacity: {
          value: 0.85,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1.5, max: 3.5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
      <Particles id={props.id || "tsparticles"} particlesLoaded={particlesLoaded} options={options} />
    </div>
  );
};

export default ParticlesComponent;
