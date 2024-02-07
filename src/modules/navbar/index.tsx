import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-2 border-b">
      <div className="flex flex-col">
        <h1 className="text-xl font-bold">{siteConfig.name}</h1>
        <span className="text-sm">{siteConfig.profession}</span>
      </div>
      <div className="flex space-x-2">
        <a href={siteConfig.links.twitter}>
          <Button size={"icon"} variant={"secondary"}>
            <TwitterLogoIcon className="w-4" />
          </Button>
        </a>
        <a href={siteConfig.links.github}>
          <Button size={"icon"} variant={"secondary"}>
            <GitHubLogoIcon className="w-4" />
          </Button>
        </a>
        <a href={siteConfig.links.linked}>
          <Button size={"icon"} variant={"secondary"}>
            <LinkedInLogoIcon className="w-4" />
          </Button>
        </a>
      </div>
    </nav>
  );
}
