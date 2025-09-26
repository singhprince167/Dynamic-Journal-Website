// app/author-guidelines/AuthorGuidelinesDetails.tsx

const AuthorGuidelinesDetails = () => {
  return (
    <div>
      <h3 className="font-bold text-indigo-700 mb-2 text-sm">For Authors</h3>
      <ul className="list-disc pl-5 text-xs text-gray-600 space-y-1">
        <li>Submission Guidelines</li>
        <li>Formatting Instructions</li>
        <li>Copyright & Ethics</li>
      </ul>
      <p className="mt-2 text-xs text-gray-600">
        This section helps authors understand how to format and submit their papers.
      </p>
    </div>
  );
};

export default AuthorGuidelinesDetails;
