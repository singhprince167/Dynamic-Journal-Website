import ArticleCard, { ArticleProps } from "@/components/ArticleCard";

// Sample articles
const sampleArticles: ArticleProps[] = [
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

// Props interface to get params from App Router
interface IssueDetailPageProps {
  params: { id: string };
}

// Make page async (Next.js 15+ App Router best practice)
const IssueDetailPage = async ({ params }: IssueDetailPageProps) => {
  const { id } = params;

  return (
    <main className="bg-white text-gray-800 max-w-5xl mx-auto px-4 py-12 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Volume {id} - Articles
      </h1>

      <div className="space-y-6">
        {sampleArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </main>
  );
};

export default IssueDetailPage;
