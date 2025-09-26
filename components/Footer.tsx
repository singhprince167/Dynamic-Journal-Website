import Link from "next/link";
import SocialMediaBar from "@/components/SocialMediaBar";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">About MyJournal</h3>
          <p className="text-gray-600 text-sm">
            MyJournal is a modern dynamic journal platform for academic research and announcements.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Quick Links</h3>
          <ul className="text-gray-600 text-sm space-y-2">
            <li>
              <Link href="/issues" className="hover:text-gray-900 transition-colors duration-200">
                Current Issue & Archives
              </Link>
            </li>
            <li>
              <Link href="/editorial-board" className="hover:text-gray-900 transition-colors duration-200">
                Editorial Board
              </Link>
            </li>
            <li>
              <Link href="/author-guidelines" className="hover:text-gray-900 transition-colors duration-200">
                Author Guidelines
              </Link>
            </li>
            <li>
              <Link href="/peer-review" className="hover:text-gray-900 transition-colors duration-200">
                Peer Review & Policies
              </Link>
            </li>
            <li>
              <Link href="/indexing" className="hover:text-gray-900 transition-colors duration-200">
                Indexing & Metrics
              </Link>
            </li>
            <li>
              <Link href="/announcements" className="hover:text-gray-900 transition-colors duration-200">
                Announcements
              </Link>
            </li>
            <li>
              <Link href="/submission" className="hover:text-gray-900 transition-colors duration-200">
                Submission System
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-900 transition-colors duration-200">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Contact</h3>
          <p className="text-gray-600 text-sm">
            Email: <a href="mailto:shikshartinfo@gmail.com" className="hover:underline">shikshartinfo@gmail.com</a>
          </p>
          <p className="text-gray-600 text-sm">
            Phone: <a href="tel:+919792949822" className="hover:underline">9792949822</a>
          </p>
          <p className="text-gray-600 text-sm">
            Address: B-2013, Indira Nagar Rd, opposite of PNB, B Block, Indira Nagar, Lucknow, Uttar Pradesh 226016
          </p>

          {/* Social Media */}
          <div className="mt-12 flex justify-center space-x-6 text-2xl text-gray-600">
            <SocialMediaBar />
          </div>
        </div>

      </div>

      <div className="border-t border-gray-200 mt-4 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} MyJournal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
