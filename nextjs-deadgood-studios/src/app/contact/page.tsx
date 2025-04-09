import ContactLink from "@/components/Contact/ContactLink";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="h-[100vh]">
      <Image
        src="/contact-sample-image.jpg"
        alt="Contact"
        fill
        className="opacity-30 -z-10"
      />
      <div className="pt-32 pb-8 px-8 flex-col flex justify-between h-[100%]">
        <div className="items-end flex flex-col">
          <ContactLink
            title="Instagram"
            href="https://www.instagram.com/deadgood.studio/"
          />
          <ContactLink title="LinkedIn" href="" />
          <ContactLink title="Vimeo" href="" />
          <ContactLink title="YouTube" href="" />
        </div>
        <div className="flex flex-col gap-16">
          <h1 className="text-8xl">Get in Touch!</h1>
          <div className="flex justify-between">
            <p>Trademark</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
