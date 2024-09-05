// ParticleBackground.js
import React from 'react';
import Particles from 'react-tsparticles';

const ParticleBackground = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "#000000",
          },
        },
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 5 },
            anim: {
              enable: true,
              speed: 3,
              size_min: 0.1,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            outModes: {
              default: "bounce",
            },
            random: false,
            straight: false,
            vibrate: false,
            warp: false,
          },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          collisions: {
            enable: true,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;
