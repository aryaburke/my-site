"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import gruntBirthdayParty from "../assets/grunt-birthday-party.mp3";

export function AchievementsManager() {
  const [init, setInit] = useState(false);
  const [storage, setstorage] = useState(false);
  const [gruntBirthdayPartyAudio] = useState<HTMLAudioElement | null>(
    // Audio can be undefined on server-side, but always available on client
    typeof Audio !== "undefined" ? new Audio(gruntBirthdayParty.src) : null
  );
  console.log(init);
  console.log(storage);

  useEffect(() => {
    // init particles engine
    if (!init) {
      initParticlesEngine(async (engine) => {
        await loadFull(engine);
      }).then(() => {
        setInit(true);
      });
    }

    // set up achievement listener
    const handleStorage = () => {
      // reset the animation if it's going
      setstorage(false);
      // start the animation
      setTimeout(() => {
        gruntBirthdayPartyAudio?.play();
        setstorage(true);
      }, 100);
    };
    window.addEventListener("achievementUnlocked", handleStorage);
    return () =>
      window.removeEventListener("achievementUnlocked", handleStorage);
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        zIndex: 1,
      },
      particles: {
        number: {
          value: 0,
        },
        color: {
          value: ["#00FFFC", "#FC00FF", "#fffc00"],
        },
        shape: {
          type: ["circle", "square", "star"],
          options: {},
        },
        opacity: {
          value: {
            min: 0,
            max: 1,
          },
          animation: {
            enable: true,
            speed: 2,
            startValue: "max",
            destroy: "min",
          },
        },
        size: {
          value: {
            min: 2,
            max: 4,
          },
        },
        links: {
          enable: false,
        },
        life: {
          duration: {
            sync: true,
            value: 5,
          },
          count: 1,
        },
        move: {
          enable: true,
          gravity: {
            enable: true,
            acceleration: 10,
          },
          speed: {
            min: 10,
            max: 20,
          },
          decay: 0.1,
          direction: "none",
          straight: false,
          outModes: {
            default: "out",
            top: "none",
          },
        },
        rotate: {
          value: {
            min: 0,
            max: 360,
          },
          direction: "random",
          move: true,
          animation: {
            enable: true,
            speed: 60,
          },
        },
        tilt: {
          direction: "random",
          enable: true,
          move: true,
          value: {
            min: 0,
            max: 360,
          },
          animation: {
            enable: true,
            speed: 60,
          },
        },
        roll: {
          darken: {
            enable: true,
            value: 25,
          },
          enable: true,
          speed: {
            min: 15,
            max: 25,
          },
        },
        wobble: {
          distance: 100,
          enable: true,
          move: true,
          speed: {
            min: -15,
            max: 15,
          },
        },
      },
      emitters: {
        life: {
          count: 1,
          duration: 0.3,
          delay: 0.5,
        },
        rate: {
          delay: 0.1,
          quantity: 150,
        },
        size: {
          width: 0,
          height: 0,
        },
        position: {
          x: -10,
          y: 0,
        },
      },
    }),
    []
  );

  if (init && storage) {
    return <Particles id="tsparticles" options={options} />;
  }

  return <></>;
}
