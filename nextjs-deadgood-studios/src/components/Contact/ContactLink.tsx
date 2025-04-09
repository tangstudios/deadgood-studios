interface ContactLinkProps {
  title: string;
  href: string;
  newTab?: boolean;
}

const ContactLink: React.FC<ContactLinkProps> = ({
  title,
  href,
  newTab = false,
}: ContactLinkProps) => {
  return (
    <h2>
      <a
        href={href}
        target={newTab ? "_blank" : "_self"}
        rel={newTab ? "noopener noreferrer" : undefined}
        className="hover:opacity-50 transition-colors duration-300 uppercase"
      >
        {title}
      </a>
    </h2>
  );
};

export default ContactLink;
