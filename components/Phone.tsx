import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes, ReactNode } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const Phone = ({ className, imgSrc, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-40 overflow-hidden",
        className
      )}
      {...props}
    >
      <Image
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        alt="Phone Image"
        width={256}
        height={256}
        className="pointer-events-none z-50 select-none min-w-full min-h-full"
      />

      <div className="absolute -z-10 inset-0">
        <Image
          src={imgSrc}
          alt="Phone Image Overlay"
          fill
          className="object-cover min-w-full min-h-full"
        />
      </div>
    </div>
  );
};

export default Phone;
