"use client";
import Image from "next/image";

const editors = [
  {
    id: 1,
    name: "Dr. John Doe",
    role: "Editor-in-Chief",
    affiliation: "Harvard University, USA",
    expertise: "Artificial Intelligence, Machine Learning",
    photo: "/images/editor1.jpg",
    orcid: "https://orcid.org/0000-0001-2345-6789",
    email: "john.doe@example.com",
  },
  {
    id: 2,
    name: "Prof. Jane Smith",
    role: "Associate Editor",
    affiliation: "Oxford University, UK",
    expertise: "Healthcare Informatics",
    photo: "/images/editor2.jpg",
    orcid: "https://orcid.org/0000-0002-9876-5432",
  },
  {
    id: 3,
    name: "Dr. Amit Kumar",
    role: "Editorial Board Member",
    affiliation: "IIT Delhi, India",
    expertise: "Data Analytics, Cloud Computing",
    photo: "/images/editor3.jpg",
    email: "amit.kumar@example.com",
  },
];

const EditorialBoardPage = () => {
  return (
    <main className="bg-white text-gray-800  mx-auto px-4 py-12 min-h-screen">
      <h1 className="text-3xl font-bold mb-10 text-gray-800 underline text-center">
        Editorial Board
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {editors.map((editor) => (
          <div
            key={editor.id}
            className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            {/* Photo */}
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border">
              <Image
                src={editor.photo}
                alt={editor.name}
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Info */}
            <h2 className="text-lg font-semibold text-gray-800 text-center">
              {editor.name}
            </h2>
            <p className="text-sm text-blue-600 text-center">{editor.role}</p>
            <p className="text-sm text-gray-600 text-center mt-1">
              {editor.affiliation}
            </p>
            <p className="text-xs text-gray-500 text-center italic">
              Expertise: {editor.expertise}
            </p>

            {/* Links */}
            <div className="flex justify-center gap-4 mt-3 text-sm">
              {editor.orcid && (
                <a
                  href={editor.orcid}
                  target="_blank"
                  className="text-green-700 hover:underline"
                >
                  ORCID
                </a>
              )}
              {editor.email && (
                <a
                  href={`mailto:${editor.email}`}
                  className="text-blue-600 hover:underline"
                >
                  Email
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default EditorialBoardPage;
