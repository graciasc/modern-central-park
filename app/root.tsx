// entry point for the app
import { type LinksFunction } from "@remix-run/node";
import { Links, Outlet } from "@remix-run/react";
import "./styles/tailwind.css";
// import { cssBundleHref } from "@remix-run/css-bundle";

// used for adding global styles, cdn and scripts
// TODO: fix typescript so I don't have to cast
export const links: LinksFunction = () => {
  // picocss
  return [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css",
    },
  ];
  //   cssBundleHref ? { rel: "stylesheet", href: cssBundleHref } : null,
  // ].filter(Boolean) as any;
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Links />
      </head>
      <body>
        <div>
          <h1 className="text-teal-400">Hello Remix World</h1>
          <Outlet />
        </div>
      </body>
    </html>
  );
}
