import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex px-5 xl:px-0 flex-col items-center bg-primary w-full text-white py-12">
      <div className="max-w-[1220px] w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* Hire Talent Section */}
          <div>
            <h4 className="font-bold mb-4">Hire Talent</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">Hire Freelance Developers</Link>
              </li>
              <li>
                <Link href="#">Hire Freelance Designers</Link>
              </li>
              <li>
                <Link href="#">Hire Freelance Marketers</Link>
              </li>
              <li>
                <Link href="#">Hire Freelance Product Managers</Link>
              </li>
              <li>
                <Link href="#">Hire Freelance Project Managers</Link>
              </li>
              <li>
                <Link href="#">Hire Freelance Finance Experts</Link>
              </li>
            </ul>
          </div>

          {/* Featured Skills Section */}
          <div>
            <h4 className="font-bold mb-4">Featured Skills</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">Software Developers</Link>
              </li>
              <li>
                <Link href="#">Web Developers</Link>
              </li>
              <li>
                <Link href="#">Mobile App Developers</Link>
              </li>
              <li>
                <Link href="#">iOS Developers</Link>
              </li>
              <li>
                <Link href="#">AI Engineers</Link>
              </li>
              <li>
                <Link href="#">Node.js Developers</Link>
              </li>
              <li>
                <Link href="#">PHP Developers</Link>
              </li>
              <li>
                <Link href="#">React.js Developers</Link>
              </li>
            </ul>
          </div>

          {/* Featured Skills Continued */}
          <div>
            <h4 className="font-bold mb-4">&nbsp;</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">Full-stack Developers</Link>
              </li>
              <li>
                <Link href="#">Front-end Developers</Link>
              </li>
              <li>
                <Link href="#">UX Designers</Link>
              </li>
              <li>
                <Link href="#">UI Designers</Link>
              </li>
              <li>
                <Link href="#">Web Designers</Link>
              </li>
              <li>
                <Link href="#">Mobile App Designers</Link>
              </li>
              <li>
                <Link href="#">Graphic Designers</Link>
              </li>
              <li>
                <Link href="#">SEO Experts</Link>
              </li>
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h4 className="font-bold mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">Why Toptal</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
              <li>
                <Link href="#">Press Center</Link>
              </li>
              <li>
                <Link href="#">Careers</Link>
              </li>
              <li>
                <Link href="#">FAQ</Link>
              </li>
              <li>
                <Link href="#">Community</Link>
              </li>
              <li>
                <Link href="#">About Us</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 flex flex-col items-center border-t border-gray-600 pt-6 text-sm">
          <p className="mb-4 text-center">
            Copyright 2010 - 2024 Toptal, LLC |{" "}
            <Link href="#">Privacy Policy</Link> |{" "}
            <Link href="#">Website Terms</Link> |{" "}
            <Link href="#">Accessibility</Link>
          </p>
          <div className="flex space-x-4">
            {/* <Link href="#">
              <img
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                className="w-5 h-5"
              />
            </Link>
            <Link href="#">
              <img src="/icons/twitter.svg" alt="Twitter" className="w-5 h-5" />
            </Link>
            <Link href="#">
              <img
                src="/icons/facebook.svg"
                alt="Facebook"
                className="w-5 h-5"
              />
            </Link>
            <Link href="#">
              <img
                src="/icons/instagram.svg"
                alt="Instagram"
                className="w-5 h-5"
              />
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};
