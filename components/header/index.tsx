import { CommandMenu } from "@/components/cmdk";
import { cn } from "@/lib/cn";

import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 grid w-full place-items-center from-5% from-[--iris-1] to-50% px-4 py-3 lg:my-6 dark:bg-gradient-to-b">
      <div
        className={cn(
          "gradient-card flex w-full items-center justify-between gap-4 rounded-xl border border-iris-4 px-4 py-3 backdrop-blur-md",
          "sm:w-fit",
          "[--gradient-from:var(--white-a11)] [--gradient-to:var(--white-a9)] [--shadow-accent-color:var(--white-a12)] [--shadow-base-color:var(--iris-a5)]",
          "dark:border-0 dark:backdrop-brightness-[0.2] dark:[--gradient-from:var(--iris-a4)] dark:[--gradient-to:var(--iris-a3)] dark:[--shadow-accent-color:var(--iris-a4)] dark:[--shadow-base-color:var(--iris-a2)]",
        )}
      >
        <Link className="transition" href="/">
          <div
            className="size-7 animate-move-background bg-[length:600%] bg-gradient-to-br from-50% from-[--iris-8] via-[--iris-9] to-90% to-[--iris-10]"
            style={{
              maskImage: "url(/assets/images/logo.svg)",
              WebkitMaskImage: "url(/assets/images/logo.svg)",
              maskPosition: "center",
              WebkitMaskPosition: "center",
              maskSize: "contain",
              WebkitMaskSize: "contain",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
            }}
          />
          <div className="sr-only">osgsm.io</div>
        </Link>
        <div className="flex items-center">
          {[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Notes", href: "/notes" },
            { label: "About", href: "/about" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              className="~text-sm/base rounded-lg px-2 py-0.5 transition hover:bg-[--iris-4] hover:text-white hover:opacity-100"
              href={href}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
      <CommandMenu />
    </header>
  );
};

export { Header };
