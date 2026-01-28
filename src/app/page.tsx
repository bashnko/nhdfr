import { allProjects } from "contentlayer/generated";
import Link from "next/link";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";

export default function HomePage() {
  const featuredProjects = allProjects
    .filter(project => project.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6);

  const navLinks = [
    { label: "blog", href: "/blog" },
    { label: "projects", href: "/project" },
  ];

  const contactLinks = [
    { label: "email", url: "mailto:hi@bashneko.dev" },
    { label: "github", url: "https://github.com/bashnko" },
    // { label: "x.com", url: "https://x.com/bashnko" },
    // { label: "discord", url: "https://discord.com/users/bashneko" },
  ];

  return (
    <div className="min-h-screen bg-[#191724] p-8">
      <div className="w-full max-w-3xl mx-auto">
        <div className="mb-8">
          <Hero
            name="bashneko"
            title="building simple, reliable software."
            navLinks={navLinks}
            description="I work across dev, cloud, and systems, building simple, reliable software. This is where I share my experiments, tools, and lessons learned."
            contacts={contactLinks}
          />
        </div>

        <div className="border-t border-dashed border-[#31748f] my-6"></div>

        {featuredProjects.length > 0 && (
          <div>
            <h2 className="text-xl font-mono text-[#e0def4] mb-4">
              some projects
            </h2>
            <ProjectGrid projects={featuredProjects} columns={2} />

            <div className="mt-6">
              <p className="text-[#908caa] text-sm">
                check all of them{" "}
                <Link
                  href="/project"
                  className="text-[#9ccfd8] hover:text-[#eb6f92] transition-colors underline"
                >
                  here
                </Link>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
