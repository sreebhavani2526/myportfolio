import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Mail size={20} />,
      href: 'mailto:sreebhavanipentyala@gmail.com',
      label: 'Email',
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/sree-bhavani-pentyala/',
      label: 'LinkedIn',
    },
    {
      icon: <Github size={20} />,
      href: 'https://github.com/sreebhavani',
      label: 'GitHub',
    },
  ];

  return (
    <footer className="bg-black border-t border-gray-900 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-3 bg-gray-900 hover:bg-indigo-500/20 text-gray-400 hover:text-indigo-400 rounded-lg transition-all duration-200 border border-gray-800 hover:border-indigo-500/50"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-500 text-sm">
              Built with React, Tailwind CSS & Framer Motion
            </p>
            <p className="text-gray-600 text-sm mt-2">
              © {new Date().getFullYear()} Sree Bhavani Pentyala. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
