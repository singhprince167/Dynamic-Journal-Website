import SocialMediaBar from "@/components/SocialMediaBar";
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50  border-t border-gray-200">
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
            <li><a href="#" className="hover:text-gray-900 transition-colors duration-200">Current Issue & Archives</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors duration-200">Editorial Board</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors duration-200">Author Guidelines</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors duration-200">Peer Review & Policies</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors duration-200">Indexing & Metrics</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors duration-200">Announcements</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors duration-200">Submission System</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors duration-200">Contact</a></li>
          </ul>
        </div>
       

        {/* Contact Info */}
<div>
  <h3 className="text-lg font-semibold text-gray-800 ">Contact</h3>
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
