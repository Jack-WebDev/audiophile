import Link from "next/link";

export default function Speaker2() {
  return (
    <div className="bg-[url('/assets/home/mobile/image-speaker-zx7.jpg')] md:bg-[url('/assets/home/tablet/image-speaker-zx7.jpg')] lg:bg-[url('/assets/home/desktop/image-speaker-zx7.jpg')] bg-no-repeat bg-cover h-[30vh] grid place-items-center text-center gap-y-8 p-6 mx-4 md:mx-12 rounded-xl mt-12 bg-right lg:w-1/2 lg:mx-auto">
      <div className="grid gap-y-6 md:justify-self-start">
        <h2 className="text-3xl font-semibold">ZX7 SPEAKER</h2>
        <Link
          href={"?"}
          className="text-black border border-black py-4 px-8 rounded-lg"
        >
          See Product
        </Link>
      </div>
    </div>
  );
}
