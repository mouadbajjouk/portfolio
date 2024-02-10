import AngularIcon from "./icons/AngularIcon";
import AzureIcon from "./icons/AzureIcon";
import CsharpIcon from "./icons/CsharpIcon";
import DockerIcon from "./icons/DockerIcon";
import DotnetIcon from "./icons/DotnetIcon";
import SqlServerIcon from "./icons/SqlServerIcon";
import TypescriptIcon from "./icons/TypescriptIcon";
import UnityIcon from "./icons/UnityIcon";
import { Stack } from "./types";

const stacks: Stack[] = [
  {
    name: "C#",
    icon: <CsharpIcon />,
  },
  {
    name: ".NET",
    icon: <DotnetIcon />,
  },
  {
    name: "SQL Server",
    icon: <SqlServerIcon />,
  },
  {
    name: "Microsoft Azure",
    icon: <AzureIcon />,
  },
  {
    name: "Docker",
    icon: <DockerIcon />,
  },
  {
    name: "Typescript",
    icon: <TypescriptIcon />,
  },
  {
    name: "Angular",
    icon: <AngularIcon />,
  },
  {
    name: "Unity",
    icon: <UnityIcon/>,
  },
];

const Stacks = () => {
  return stacks;
};

export default Stacks;
