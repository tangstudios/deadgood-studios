import AnimateText from "@/components/animate-text/AnimateText";

const footerHeight = 500;

export default function Footer() {
  return (
    <div
      style={{
        height: `${footerHeight}px`,
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
      }}
      className="bg-[#f2f2f2] font-serif"
    >
      <div
        style={{ height: `calc(100vh + ${footerHeight}px)`, top: "-100vh" }}
        className="relative"
      >
        <div
          style={{
            height: `${footerHeight}px`,
            top: `calc(100vh - ${footerHeight}px)`,
          }}
          className="sticky flex flex-col justify-center text-[10vmin]"
        >
          <AnimateText text="Hey! Get in touch?" rotateOnHover />
          <AnimateText text="Contact" rotateOnHover />
          <a
            className="hover:text-gray-400"
            href="mailto:hi@deadgood.studio"
            target="_blank"
          >
            <AnimateText text="hi@deadgood.studio" />
          </a>
        </div>
      </div>
    </div>
  );
}
