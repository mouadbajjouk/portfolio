import { Badge } from "@/components/ui/badge";
import { ExperienceType } from "@/lib/types";

export default function ExperienceCard({
  experience,
}: {
  experience: ExperienceType;
}) {
  return (
    <div className="flex flex-col p-2 border rounded-lg bg-background">
      <h1>{experience.company_name}</h1>
      <span className="pb-2 text-sm">{experience.work_years}</span>
      <div className="w-full md:columns-3">
        {experience.projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col h-auto col-span-4 p-2 mb-1 border-[2px] border-foreground rounded-lg bg-background break-inside-avoid"
          >
            <Badge className="mb-2 bg-foreground">{project.project_name}</Badge>
            <p>{project.project_description}</p>
            <Badge className="my-2 bg-foreground">Stack used</Badge>
            <ul className="pl-6 space-y-1 list-disc">
              {project.used_stack.map((stack, index) => (
                <li key={index}>{stack}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
