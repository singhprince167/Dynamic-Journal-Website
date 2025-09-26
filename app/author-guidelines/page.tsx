// app/author-guidelines/page.tsx
import AuthorGuidelinesDetails from "./AuthorGuidelinesDetails";

const AuthorGuidelinesPage = () => {
  return (
    <main className="bg-white text-gray-800  mx-auto px-4 py-12 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Author Guidelines</h1>
      <AuthorGuidelinesDetails />
      {/* You can add another contact details , Like DOCX/LaTeX templates links */}
    </main>
  );
};

export default AuthorGuidelinesPage;
