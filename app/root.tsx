// entry point for the app
import { LinksFunction } from "@remix-run/node";

// used for adding global styles, cdn and scripts
export const links: LinksFunction = () => {
  return [];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
        />
      </head>
      <body>
        <div>
          <h1>Hello Remix World</h1>
          {
            // Pico CSS default
          }
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
