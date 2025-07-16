import Image from "next/image";
import Link from "next/link";
import { Button } from "./components/ui/button";
export default function Home() {
  return (
    <main className="flex-1 flex flex-col " >
      <section className="flex-1 grid grid-cols-1 lg:grid-cols-2" >
        <div className="bg-purple-500 flex flex-col space-y-5 justify-center items-center order-1 lg:order-1 pb-10 " >
          <Image src="/image.png" alt="My Logo" width={200} height={250} />

          <Button asChild className="px-20 bg-purple-700 p-10 text-xl" > 
            <Link href="/stories" >Explore Story Libraries</Link>
          </Button>

        </div>
      </section>
    </main>
  );
}
