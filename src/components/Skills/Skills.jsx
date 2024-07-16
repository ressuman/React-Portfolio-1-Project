import data from "../../data/data.json";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaUniversalAccess,
  FaSass,
} from "react-icons/fa";
import { Tooltip } from "react-tooltip";

const skillIcons = {
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: FaJs,
  React: FaReact,
  Accessibility: FaUniversalAccess,
  SASS: FaSass,
};
export const Skills = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-28 border-y-2 md:border-y-0 md:border-t-2 py-16">
      {data.skills.map((skill) => {
        const Icon = skillIcons[skill];
        return (
          <div
            key={skill}
            className="flex flex-col items-center p-4 bg-raisin-black rounded-lg shadow-lg transform transition-transform hover:scale-105"
          >
            <Icon size={40} className="text-eucalyptus mb-4" />
            <h4 className="uppercase text-fs24 font-bold mb-2 text-white">
              {skill}
            </h4>
            <p className="text-white">
              {data.skillsExperience[skill]} Years Experience
            </p>
            <Tooltip
              content={`Experience in ${skill}: ${data.skillsExperience[skill]} years`}
              direction="top"
            >
              <div className="w-full h-full absolute top-0 left-0"></div>
            </Tooltip>
          </div>
        );
      })}
    </div>
  );
};
