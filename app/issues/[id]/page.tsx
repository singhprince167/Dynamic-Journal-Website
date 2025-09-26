// app/issues/[id]/page.tsx
"use client";

import ArticleCard from "@/components/ArticleCard";

// Dummy articles for UI testing
const sampleArticles = [
  {
    id: "a1",
    title: "AI in Healthcare: Trends and Challenges",
    authors: ["John Doe", "Jane Smith"],
    doi: "10.1234/aihc.2025.01",
    abstract: "This article explores recent trends in AI for healthcare...",
    keywords: ["AI", "Healthcare", "Machine Learning"],
    pageNumbers: "1-12",
    pdfUrl: "/pdfs/sample1.pdf",
    supplementaryFiles: ["/pdfs/supp1.pdf"],
  },
  {
    id: "a2",
    title: "Data Analytics in Medical Research",
    authors: ["Alice Brown", "Bob White"],
    doi: "10.1234/damr.2025.02",
    abstract: "Data analytics techniques applied to medical research...",
    keywords: ["Data Analytics", "Medical Research"],
    pageNumbers: "13-24",
    pdfUrl: "/pdfs/sample2.pdf",
  },
];

interface PageProps {
  params: { id: string };
}

const IssueDetailPage = ({ params }: PageProps) => {
  const { id } = params;

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Volume {id} - Articles
      </h1>

      {/* Articles List */}
      <div className="flex flex-col gap-6">
        {sampleArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </main>
  );
};

export default IssueDetailPage;
