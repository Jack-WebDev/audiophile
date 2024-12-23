import Image from "next/image";
import Link from "next/link";

export default function Speaker1() {
  return (
    <div className="grid place-items-center text-center gap-y-8 text-white bg-primary bg-[url('/assets/home/desktop/pattern-circles.svg')] bg-no-repeat bg-contain bg-center p-6 mx-4 md:mx-12 rounded-xl mt-20 lg:grid-cols-2 lg:w-1/2 lg:mx-auto">
      <Image
        src="/assets/home/mobile/image-speaker-zx9.png" // Default mobile image
        alt="Speaker"
        width={100}
        height={100}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="md:hidden"
      />
      <Image
        src="/assets/home/tablet/image-speaker-zx9.png" // Tablet image
        alt="Speaker"
        width={240}
        height={240}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="hidden md:block lg:hidden"
      />
      <Image
        src="/assets/home/desktop/image-speaker-zx9.png" // Desktop image
        alt="Speaker"
        width={400}
        height={400}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="hidden lg:block"
      />
      <div className="grid gap-y-8">
        <h2 className="text-3xl font-semibold">ZX9 SPEAKER</h2>
        <p className="text-xs font-light">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound
        </p>
        <Link
          href={"/"}
          className="bg-black text-white py-4 px-8 rounded-lg md:w-fit md:justify-self-center"
        >
          SEE PRODUCT
        </Link>
      </div>
    </div>
  );
}
