import Image from "next/image";

export default function Main() {
  return (
    <section id="main" className="h-screen overflow-hidden">
      <div className="absolute top-0 -z-10">
        <Image src="/vector1.svg" alt="" width="600" height="400" />
      </div>
      <div className="min-h-screen flex items-center justify-center">
        <div>
          <Image src="/cow.png" alt="cow" width="600" height="600" />
        </div>
      </div>
      <div className="absolute right-0 bottom-0 -z-10">
        <Image src="/vector2.svg" alt="" width="600" height="400" />
      </div>
    </section>
  );
}
