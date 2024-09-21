import { Button } from "~/components/ui/button";
export default function Index() {
  return (
    <div>
      <h1 className="text-red-900 text-3xl font-bold underline">
        Hello world!
      </h1>
      <Button variant={"destructive"}>Click me</Button>
    </div>
  );
}
