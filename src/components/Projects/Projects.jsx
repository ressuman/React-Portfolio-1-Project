import { Button } from "../Button/Button";
import data from "../../data/data.json";

export default function Projects() {
  return (
    <div className="mt-16">
      <div className="flex items-center justify-between">
        <h3 className="text-fs36 md:text-fs40 lg:text-fs48 font-bold">
          Projects
        </h3>
        <Button className="text-white uppercase border-b-2 border-eucalyptus py-2 hover:text-eucalyptus hover:border-white transition transform ease-in-out duration-250 hover:scale-105 hover:translate-y-1">
          Contact Me
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16">
        {/* {data.projects.map((project, index) => (
          <div
            key={index}
            className="max-w-sm relative rounded overflow-hidden shadow-lg transform duration-500 hover:scale-105 hover:shadow-2xl transition-shadow ease-in-out mx-auto md:mx-0"
          >
            <div className="relative">
              <img
                className="w-full h-80 object-cover object-center"
                src={project.projectImage}
                alt={`Image of ${project.projectName}`}
              />
              <div className="absolute inset-0 bg-chinese-black bg-opacity-75 opacity-0 hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300 ease-in-out gap-10">
                <a
                  href={project.viewProject}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white uppercase border-b-2 border-eucalyptus py-2 hover:text-eucalyptus hover:border-white transition transform ease-in-out duration-250 hover:scale-105 hover:translate-y-1"
                >
                  View Project
                </a>
                <a
                  href={project.viewCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white uppercase border-b-2 border-eucalyptus py-2 hover:text-eucalyptus hover:border-white transition transform ease-in-out duration-250 hover:scale-105 hover:translate-y-1"
                >
                  View Code
                </a>
              </div>
            </div>
            <div className="px-6 py-4 text-white bg-chinese-black">
              <h6 className="font-bold text-lg mb-2">{project.projectName}</h6>
              <p className="text-sm">{project.skillsUsed.join(", ")}</p>
            </div>
          </div>
        ))} */}

        {data.projects.map((project, index) => (
          <div
            key={index}
            className="max-w-sm relative rounded overflow-hidden shadow-lg transform duration-500 hover:scale-105 hover:shadow-2xl transition-shadow ease-in-out mx-auto md:mx-0"
          >
            <div className="relative">
              <img
                className="w-full h-80 object-cover object-center"
                src={project.projectImage}
                alt={`Image of ${project.projectName}`}
              />
              <div className="hidden lg:flex absolute inset-0 bg-chinese-black bg-opacity-75 opacity-0 hover:opacity-100 flex-col justify-center items-center transition-opacity duration-300 ease-in-out gap-10">
                <a
                  href={project.viewProject}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white uppercase border-b-2 border-eucalyptus py-2 hover:text-eucalyptus hover:border-white transition transform ease-in-out duration-250 hover:scale-105 hover:translate-y-1"
                >
                  View Project
                </a>
                <a
                  href={project.viewCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white uppercase border-b-2 border-eucalyptus py-2 hover:text-eucalyptus hover:border-white transition transform ease-in-out duration-250 hover:scale-105 hover:translate-y-1"
                >
                  View Code
                </a>
              </div>
            </div>
            <div className="px-6 py-4 text-white bg-chinese-black">
              <h6 className="font-bold text-lg mb-2">{project.projectName}</h6>
              <p className="text-sm">{project.skillsUsed.join(", ")}</p>
              <div className="flex items-center justify-center gap-16 mt-4 lg:hidden">
                <a
                  href={project.viewProject}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white uppercase border-b-2 border-eucalyptus py-2 hover:text-eucalyptus hover:border-white transition transform ease-in-out duration-250 hover:scale-105 hover:translate-y-1"
                >
                  View Project
                </a>
                <a
                  href={project.viewCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white uppercase border-b-2 border-eucalyptus py-2 hover:text-eucalyptus hover:border-white transition transform ease-in-out duration-250 hover:scale-105 hover:translate-y-1"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* {data.projects.map((project, index) => (
          <div
            key={index}
            className="max-w-sm relative rounded overflow-hidden shadow-lg transform duration-500 hover:scale-105 hover:shadow-2xl transition-shadow ease-in-out mx-auto md:mx-0"
          >
            <div className="relative">
              <img
                className="w-full h-80 object-cover object-center"
                src={project.projectImage}
                alt={`Image of ${project.projectName}`}
              />
              <div className="absolute inset-0 bg-chinese-black bg-opacity-75 opacity-0 lg:opacity-0 hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300 ease-in-out gap-10">
                <a
                  href={project.viewProject}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white uppercase border-b-2 border-eucalyptus py-2 hover:text-eucalyptus hover:border-white transition transform ease-in-out duration-250 hover:scale-105 hover:translate-y-1"
                >
                  View Project
                </a>
                <a
                  href={project.viewCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white uppercase border-b-2 border-eucalyptus py-2 hover:text-eucalyptus hover:border-white transition transform ease-in-out duration-250 hover:scale-105 hover:translate-y-1"
                >
                  View Code
                </a>
              </div>
            </div>
            <div className="px-6 py-4 text-white bg-chinese-black">
              <h6 className="font-bold text-lg mb-2">{project.projectName}</h6>
              <p className="text-sm">{project.skillsUsed.join(", ")}</p>
              <div className="flex flex-col md:flex-row md:gap-4 mt-4 lg:hidden">
                <a
                  href={project.viewProject}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white uppercase border-b-2 border-eucalyptus py-2 hover:text-eucalyptus hover:border-white transition transform ease-in-out duration-250 hover:scale-105 hover:translate-y-1"
                >
                  View Project
                </a>
                <a
                  href={project.viewCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white uppercase border-b-2 border-eucalyptus py-2 hover:text-eucalyptus hover:border-white transition transform ease-in-out duration-250 hover:scale-105 hover:translate-y-1"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
}

{
  /* <div className="grid grid-cols-1 md:grid-cols-2 gap-8  py-16">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-bittersweet transform duration-500 hover:scale-105 hover:shadow-2xl transition-shadow ease-in-out">
          <img className="w-full h-48 object-cover" src="" alt="Card image" />
          <div className="px-6 py-4">
            <h6 className="font-bold text-xl mb-2">gjkhkf</h6>
            <p className="text-gray-700 text-base">dshfs</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
          <p className="text-white mb-4">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Show Code
            </a>
          </p>
          <p className="text-white">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              View Demo
            </a>
          </p>
        </div>
      </div> */
}
