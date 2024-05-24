import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { Reviews } from "@/components/Reviews";
import { Check, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52 ">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <Image
                  src="/snake-1.png"
                  alt="Snake Illustration"
                  width={112}
                  height={112}
                  className="w-full"
                />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your Image on a{" "}
                <span className="bg-green-600 px-2 text-white">Custom</span>{" "}
                Phone Case
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Capture your favorite memories with your own{" "}
                <span className="font-semibold">one-of-one</span> phone case,
                Casecobra allows you to protect your memories, not just your
                phone case.
              </p>

              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="size-5 shrink-0 text-green-600" />
                  High-quality, durable casses.
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="size-5 shrink-0 text-green-600" />5 year
                  print guarantee.
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="size-5 shrink-0 text-green-600" />
                  Mordern iPhone models supported.
                </li>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <Image
                    src={"/users/user-1.png"}
                    width={40}
                    height={40}
                    alt="User Image"
                    className="inline-block size-10 rounded-full ring-2 ring-slate-100"
                  />
                  <Image
                    src={"/users/user-2.png"}
                    width={40}
                    height={40}
                    alt="User Image"
                    className="inline-block size-10 rounded-full ring-2 ring-slate-100"
                  />
                  <Image
                    src={"/users/user-3.png"}
                    width={40}
                    height={40}
                    alt="User Image"
                    className="inline-block size-10 rounded-full ring-2 ring-slate-100"
                  />
                  <Image
                    src={"/users/user-4.jpg"}
                    width={40}
                    height={40}
                    alt="User Image"
                    className="inline-block size-10 rounded-full ring-2 ring-slate-100"
                  />
                  <Image
                    src={"/users/user-5.jpg"}
                    width={40}
                    height={40}
                    alt="User Image"
                    className="inline-block object-cover size-10 rounded-full ring-2 ring-slate-100"
                  />
                </div>

                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="size-4 text-green-600 fill-green-600" />
                    <Star className="size-4 text-green-600 fill-green-600" />
                    <Star className="size-4 text-green-600 fill-green-600" />
                    <Star className="size-4 text-green-600 fill-green-600" />
                    <Star className="size-4 text-green-600 fill-green-600" />
                  </div>

                  <p>
                    <span className="font-semibold">1,250</span> happy
                    customers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <Image
                src="/your-image.png"
                alt="Phone Case"
                width={160}
                height={160}
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
              />
              <Image
                src="/line.png"
                alt="Line"
                width={80}
                height={80}
                className="absolute w-20 -left-6 -bottom-6 select-none"
              />
              <Phone imgSrc="/testimonials/1.jpg" className="w-64" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Value Proposition Section */}
      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper
          className={"flex flex-col items-center gap-16 sm:gap-32"}
        >
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              What our{" "}
              <span className="relative px-2">
                customers{" "}
                <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500" />
              </span>{" "}
              say
            </h2>
            <Image
              src={"/snake-2.png"}
              width={96}
              height={96}
              alt="Snake 2"
              className="w-24 order-0 lg:order-2"
            />
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="size-5 text-green-600 fill-green-600" />
                <Star className="size-5 text-green-600 fill-green-600" />
                <Star className="size-5 text-green-600 fill-green-600" />
                <Star className="size-5 text-green-600 fill-green-600" />
                <Star className="size-5 text-green-600 fill-green-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  &quot;The case feels durable and I even got a compliment on
                  the design. Had the case for two and a half months now and{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    the image is super clear
                  </span>
                  , on the case I had before, the image started fading into
                  yellow-ish color after a couple weeks. Love it.&quot;
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <Image
                  src={"/users/user-1.png"}
                  width={48}
                  height={48}
                  alt="User Image"
                  className="rounded-full size-12 object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Jonathan</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="size-4 stroke-[3px] text-green-600" />
                    <p className="text-small">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second user review */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="size-5 text-green-600 fill-green-600" />
                <Star className="size-5 text-green-600 fill-green-600" />
                <Star className="size-5 text-green-600 fill-green-600" />
                <Star className="size-5 text-green-600 fill-green-600" />
                <Star className="size-5 text-green-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  &quot;I usually keep my phone together with my keys in my
                  pocket and that led to some pretty heavy scratchmarks on all
                  of my last phone cases. This one, besides a barely noticeable
                  scratch on the corner,{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    looks brand new after about half a year
                  </span>
                  . I dig it.&quot;
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <Image
                  src={"/users/user-4.jpg"}
                  width={48}
                  height={48}
                  alt="User Image"
                  className="rounded-full size-12 object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Josh</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="size-4 stroke-[3px] text-green-600" />
                    <p className="text-small">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        <div className="pt-16">
          <Reviews />
        </div>
      </section>
    </main>
  );
}
