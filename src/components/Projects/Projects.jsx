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

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8  py-16">
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
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16">
        <div className="max-w-sm relative rounded overflow-hidden shadow-lg bg-white transform duration-500 hover:scale-105 hover:shadow-2xl transition-shadow ease-in-out">
          <img
            className="w-full h-full object-cover object-center"
            src="../../../public/images/audiophile-e-commerce.jpg"
            alt="Card image"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300 ease-in-out">
            <p className="text-white mb-2">Show Code</p>
            <a
              href="https://github.com/your-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-eucalyptus underline"
            >
              GitHub Link
            </a>
            <p className="text-white mt-4">View Demo</p>
            <a
              href="https://your-demo-link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-eucalyptus underline"
            >
              Demo Link
            </a>
          </div>
          {/* <div className="px-6 py-4 text-raisin-black">
            <h6 className="font-bold text-xl mb-2">Card Title</h6>
            <p className="text-gray-700 text-base">
              Card description goes here.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
