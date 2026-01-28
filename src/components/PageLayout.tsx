import Hero from "./Hero";

interface PageLayoutProps {
  title?: string;
  children: React.ReactNode;
  showHero?: boolean;
}

export default function PageLayout({
  title,
  children,
  showHero = true,
}: PageLayoutProps) {
  const navLinks = [
    { label: "home", href: "/" },
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
        
        {showHero && (
          <>
            <div className="mb-8">
              <Hero
                name="bashneko"
                title="building simple, reliable software."
                navLinks={navLinks}
                description="I work across dev, cloud, and systems—building simple, reliable software. This is where I share my experiments, tools, and lessons learned."
                contacts={contactLinks}
              />
            </div>

            <div className="border-t border-dashed border-[#31748f] my-6"></div>

            {title && (
              <div className="mb-8">
                <h2 className="text-2xl font-mono text-[#e0def4]">
                  {title}
                </h2>
              </div>
            )}
          </>
        )}

        {children}
      </div>
    </div>
  );
}
