// entry point for the app
import { type LinksFunction } from "@remix-run/node";
import { Links, Outlet, Scripts } from "@remix-run/react";
import { SunIcon } from "@radix-ui/react-icons";
import "./styles/tailwind.css";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  // NavigationMenuContent,
  // NavigationMenuTrigger,
} from "~/components/ui/navigation-menu";
import { cssBundleHref } from "@remix-run/css-bundle";

// used for adding global styles, cdn and scripts
// TODO: fix typescript so I don't have to cast
export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css",
    },
    cssBundleHref ? { rel: "stylesheet", href: cssBundleHref } : null,
  ].filter(Boolean);
};

export default function App() {
  return (
    <html lang="en" className="h-screen font-thin">
      <head>
        <Links />
      </head>
      <body className="flex flex-col p-4 h-full bg-gradient-to-r from-orange-700 to-sky-400 ">
        <Nav />

        <div className="h-full" id="root">
          <Outlet />
          {/* Needed to load scripts */}
          <Scripts />
        </div>
      </body>
    </html>
  );
}

function Nav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            href="/morty"
            className={navigationMenuTriggerStyle()}
          >
            Morty
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
