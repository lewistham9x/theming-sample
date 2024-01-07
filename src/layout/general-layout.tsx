import Link from "next/link";
import { Button } from "../components/ui/button";
import { cn } from "../lib/utils";
import { MainNav } from "../components/common/main-nav";
import { SiteFooter } from "../components/common/site-footer";
import { ModeToggle } from "../components/common/mode-toggle";

interface GeneralLayoutProps {
  children: React.ReactNode;
}

export const marketingConfig = {
  mainNav: [
    {
      title: "Features",
      href: "/#features",
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
  ],
};

export const GeneralLayout = ({ children }: GeneralLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={marketingConfig.mainNav} />
          <nav className="flex items-center gap-4">
            <ModeToggle />
            <Link href="/login" className={cn("px-4")}>
              <Button variant={"secondary"} size={"sm"}>
                Login
              </Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
};
