// entry point for the app
import { type LinksFunction } from "@remix-run/node";
import { Links, Outlet } from "@remix-run/react";
import { SunIcon } from "@radix-ui/react-icons";
import "./styles/tailwind.css";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuTrigger,
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
    <html lang="en" className="h-screen">
      <head>
        <Links />
      </head>
      <body className="flex flex-col p-4 h-full bg-orange-500 ">
        <Nav />
        <div className="h-full">
          <Outlet />
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
            href="/about"
            className={navigationMenuTriggerStyle()}
          >
            About
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
