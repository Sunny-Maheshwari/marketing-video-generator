import { useEffect, useState } from "react";

const Footer = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Animate on scroll
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrolledTo = window.scrollY + window.innerHeight;
      if (scrolledTo + 100 >= scrollHeight) setVisible(true);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      className={`bg-gray-900 text-gray-400 dark:text-gray-500 px-6 py-4 mt-auto sticky bottom-0 z-40 transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm space-y-2 sm:space-y-0">
        <span>
          © {new Date().getFullYear()} AI Video Studio · <strong>v1.0.0</strong>{" "}
          · <em>{import.meta.env.MODE}</em>
        </span>

        <div className="flex space-x-4">
          <a
            href="https://github.com/your-repo"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
            title="GitHub"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 0a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2c-3.34.72-4.04-1.6-4.04-1.6a3.18 3.18 0 00-1.34-1.76c-1.1-.74.09-.72.09-.72a2.52 2.52 0 011.84 1.24 2.56 2.56 0 003.49 1 2.56 2.56 0 01.76-1.6c-2.67-.3-5.47-1.34-5.47-5.96a4.67 4.67 0 011.24-3.23 4.32 4.32 0 01.12-3.18s1-.32 3.3 1.23a11.4 11.4 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23a4.32 4.32 0 01.12 3.18 4.66 4.66 0 011.24 3.23c0 4.63-2.8 5.66-5.47 5.96a2.9 2.9 0 01.84 2.24v3.33c0 .32.22.7.82.58A12 12 0 0012 0z"
              />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
            title="LinkedIn"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75S5.78 5.25 6.75 5.25 8.5 6.03 8.5 7 7.72 8.75 6.75 8.75zm13.25 11.25h-3v-5.5c0-1.32-.03-3-1.85-3-1.85 0-2.13 1.45-2.13 2.9v5.6h-3v-10h2.88v1.4h.04c.4-.75 1.4-1.54 2.88-1.54 3.08 0 3.65 2.03 3.65 4.65v5.49z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
