import { ReactNode } from "react";

export type Project = {
  project_name: string;
  project_description: string;
  used_stack: string[];
};

export type ExperienceType = {
  company_name: string;
  work_years: string;
  projects: Project[];
};

export type Stack = {
  name: string;
  icon: ReactNode;
};
