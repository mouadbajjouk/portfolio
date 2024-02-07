import { experiences } from "@/lib/experience";
import ExperienceCard from "./experience-card";

export default function Experience() {
  return (
    <div className="flex flex-col p-2">
      <h1 className="text-2xl font-bold">EXPERIENCE</h1>
      <div className="border rounded-lg bg-foreground/[0.02] p-2 mt-2">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
}
