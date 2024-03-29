import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#5DC9A8] min-h-screen flex flex-col xl:flex-row items-center justify-center gap-10">
      <Image
        src="https://bytegrad.com/course-assets/react-nextjs/petsoft-preview.png"
        alt="PetSoft Preview"
        width={519}
        height={472}
      />

      <div>
        <Logo />

        <h1 className="text-5xl font-semibold my-6 max-w-[500px]">
          Manage your <span className="font-extrabold">pet daycare</span> with
          ease!
        </h1>

        <p className="text-xl max-w-[600px]">
          PetSoft is a pet daycare and boarding service. We offer a variety of
          services to keep your pet happy and healthy. For a one time payment of
          only $299, you can get started today for a lifetime access!
        </p>

        <div className="mt-10 space-x-3">
          <Button asChild>
            <Link href="/signup">Get Started</Link>
          </Button>

          <Button variant="secondary" asChild>
            <Link href="/login">Log In</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
