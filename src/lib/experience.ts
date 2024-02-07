interface Project {
  project_name: string;
  project_description: string;
  used_stack: string[];
}

interface Experience {
  company_name: string;
  work_years: string;
  projects: Project[];
}

export const experiences: Experience[] = [
  {
    company_name: "TeraByte-Software",
    work_years: "2021 – PRESENT",
    projects: [
      {
        project_name: "InsightsRadar",
        project_description:
          "I have worked on a data-driven API for InsightsRadar, helping businesses gain insights into customers and operations for better decision-making.",
        used_stack: ["C#", ".NET 6", "SQL Server", "Azure SQL Database"],
      },
      {
        project_name: "EnviDan",
        project_description:
          "Engaged in the development of a monolithic solution for EnviDan, widely used by many Danish municipalities. I played a key role in implementing new features and fixing existing bugs, ensuring the seamless operation of services related to septic tank management, water operations, wastewater, and other environmental sectors.",
        used_stack: [
          "C#",
          ".NET Framework 4.8",
          "SQL Server",
          "Azure SQL Database",
        ],
      },
      {
        project_name: "Momentum Solutions",
        project_description:
          "Played a key role in migrating the EnviRen project and its database from EnviDan to Momentum Solutions. This involved creating a new cloud architecture and making significant codebase changes to ensure the project's successful transition and functionality.",
        used_stack: [
          "C#",
          ".NET Framework 4.8",
          ".NET Core 3.1",
          "SQL Server",
          "Azure VM",
          "Azure SQL Database",
          "Cosmos DB",
        ],
      },
      {
        project_name: "EcoScore",
        project_description:
          "I spearheaded the development of a new API, EcoScore, within the EcoCure solution. This API focuses on calculating vehicle emissions and assigning scores based on ESG guidelines and regulations.",
        used_stack: [
          "C#",
          ".NET 8",
          "SQL Server",
          "SQL Lite",
          "Azure SQL Database",
          "Azure App Service",
        ],
      },
      {
        project_name: "TeraByteIoT",
        project_description:
          "I contributed to the development of a microservice, encompassing both frontend and backend components, within the TeraByte IoT system. This microservice functions as a customer portal for businesses utilizing IOT devices in their operations.",
        used_stack: [
          "C#",
          ".NET 8",
          "SQL Server",
          "Redis",
          "Docker",
          "Keycloak",
          "TypeScript",
          "React",
        ],
      },
    ],
  },
];
