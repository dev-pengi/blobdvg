import { Header, SvgCreator } from "@/components";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Toaster />
      <Header />
      <main>
        <SvgCreator />
      </main>
    </>
  );
}
