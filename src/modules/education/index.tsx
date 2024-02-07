import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <div className="flex flex-col p-2">
      <h1 className="text-2xl font-bold">EDUCATION</h1>
      <ol className="items-center mt-4 sm:flex">
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-pastel ring-0 ring-white sm:ring-8 shrink-0">
              <GraduationCap />
            </div>
            <div className="hidden sm:flex w-full bg-foreground h-0.5"></div>
          </div>
          <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-foreground">
              Bachelor of Applied Mathematics and Informatics
            </h3>
            <h4 className="mb-2">Ibn Tofail University</h4>
            <time className="block mb-2 text-sm font-normal leading-none rounded-full text-foreground">
              2016 – 2019
            </time>
          </div>
        </li>
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-pastel ring-0 ring-white sm:ring-8 shrink-0">
              <GraduationCap />
            </div>
            <div className="hidden sm:flex w-full bg-foreground h-0.5"></div>
          </div>
          <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-foreground">
              MSc in Software Engineering
            </h3>
            <h4 className="mb-2">APU University</h4>
            <time className="block mb-2 text-sm font-normal leading-none text-foreground">
              2019 – 2020
            </time>
          </div>
        </li>
      </ol>
    </div>
  );
}
