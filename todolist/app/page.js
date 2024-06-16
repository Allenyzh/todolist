import { Nunito, nunito } from "./ui/fonts";

export default function Page() {
  return (
    <p className={`flex min-h-screen flex-col p-6 text-xl text-gray-1000 md:text-3xl md:leading-normal ${nunito.className}`}>
      Hello World
    </p>
  );
}
