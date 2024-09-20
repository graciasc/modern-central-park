// entry point for the app
import { type LinksFunction } from "@remix-run/node";
import { Links } from "@remix-run/react";
import "./styles/tailwind.css";
import { cssBundleHref } from "@remix-run/css-bundle";

// used for adding global styles, cdn and scripts
// TODO: fix typescript so I don't have to cast
export const links: LinksFunction = () => {
  // picocss
  return [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css",
    },
    cssBundleHref && { rel: "stylesheet", href: cssBundleHref },
  ].filter(Boolean) as { rel: string; href: string }[];
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
          <form>
            <fieldset>
              <label>
                First name
                <input name="first_name" placeholder="First name" />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="Email" />
              </label>
            </fieldset>

            <input type="submit" value="Subscribe" />
          </form>
        </div>
      </body>
    </html>
  );
}
