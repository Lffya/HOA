import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Leadership", href: "#leadership" },
    { name: "Businesses", href: "#businesses" },
    { name: "CSR", href: "#csr" },
    { name: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  return (
    <footer className="bg-hoa-charcoal dark:bg-gray-900 text-white dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold text-hoa-gold mb-6 font-serif">HOUSE OF AMARAA</div>
            <p className="text-white/80 dark:text-gray-300 leading-relaxed mb-6 max-w-md">
              Building tomorrow's legacy through visionary leadership and unwavering commitment to excellence across
              diverse industries.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-hoa-gold transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-serif">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 dark:text-gray-300 hover:text-hoa-gold transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-serif">Contact</h3>
            <div className="space-y-3 text-white/80 dark:text-gray-300">
              <p>
                715, Samarth Aishwarya,
                <br />
                Oshiwara, Andheri West,
                <br />
                Mumbai, Maharashtra
              </p>
              <p>+91 22 1234 5678</p>
              <p>info@houseofamaraa.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 dark:border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 dark:text-gray-400 text-sm">© 2024 House of Amaraa. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 dark:text-gray-400 hover:text-hoa-gold text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 dark:text-gray-400 hover:text-hoa-gold text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
