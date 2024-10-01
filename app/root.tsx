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
    <html lang="en">
      <head>
        <Links />
      </head>
      <body className="p-4 h-screen bg-gray-800">
        <div>
          {
            // make a navigation menu
          }
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className={navigationMenuTriggerStyle()}
                >
                  <SunIcon className="mx-2 h-4 w-4" />
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/main"
                  className={navigationMenuTriggerStyle()}
                >
                  Main
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Outlet />
        </div>
      </body>
    </html>
  );
}
