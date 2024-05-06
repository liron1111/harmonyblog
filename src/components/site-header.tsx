import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { Profile } from "@/components/profile";

export function SiteHeader() {
  return (
    <header className="z-10 sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MobileNav />
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center gap-2">
            <Profile />
          </nav>
        </div>
      </div>
    </header>
  );
}
