"use client";

import { Icon } from "@/components/ui/icon";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { icons } from "lucide-react";
import { ReactNode } from "react";
import { SiReact, SiNextdotjs, SiPostgresql, SiTypescript, SiDocker } from '@icons-pack/react-simple-icons';
interface sponsorsProps {
  icon: ReactNode;
  name: string;
}

const sponsors: sponsorsProps[] = [
  {
    icon: <SiReact color="#61DAFB" />,
    name: "React",
  },
  {
    icon: <SiNextdotjs color="#1456C7" />,
    name: "Next.js",
  },
  {
    icon: <SiPostgresql color="#4169E1" />,
    name: "PostgreSQL",
  },
  {
    icon: <SiReact color="#61DAFB" />,
    name: "React Native",
  },
  {
    icon: <SiTypescript color="#3178C6" />,
    name: "TypeScript",
  },
  {
    icon: <SiDocker color="#2496ED" />,
    name: "Docker",
  },
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
      <h2 className="text-lg md:text-xl text-center mb-20">
        Technologies We Work With
      </h2>

      <div className="mx-auto">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {sponsors.map(({ icon, name }) => (
            <div
              key={name}
              className="flex items-center text-xl md:text-2xl font-medium"
            >
              {icon} &nbsp;
              {name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
