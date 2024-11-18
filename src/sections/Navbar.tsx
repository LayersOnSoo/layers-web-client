import logoImage from "@/assets/images/logo.svg";
import menuImage from "@/assets/images/menu2.svg";
import Button from "@/components/button";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  return (
    <section className="py-4 lg:py-8">
      <div className="container max-w-5xl">
        {/* Navbar Wrapper */}
        <div className="flex justify-between items-center border border-white/15 rounded-full p-2 px-4 md:pr-2">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img
              src={logoImage}
              alt="hackathon logo"
              className="h-9 w-auto md:h-auto"
            />
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex flex-grow justify-center space-x-6 font-medium">
            {navLinks.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </nav>

          {/* Button Group (Login & Sign In) */}
          <div className="hidden md:flex items-center justify-end gap-4">
            <Button
              variant="primary"
              className="border border-white/50 h-12 rounded-full font-medium px-6"
            >
              Explore Projects
            </Button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden flex items-center justify-end">
            <img src={menuImage} alt="menu" className="h-6 w-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
