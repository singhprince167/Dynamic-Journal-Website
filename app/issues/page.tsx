import ArticleCard, { ArticleProps } from "@/components/ArticleCard";

// Sample articles
const sampleArticles: ArticleProps[] = [
  {
    id: "a1",
    title: "AI in Healthcare: Trends and Challenges in India",
    authors: ["Dr. Amit Verma", "Neha Sharma"],
    doi: "10.1234/aihc.2025.01",
    abstract: "This article explores recent trends in AI for healthcare...",
    keywords: ["AI", "Healthcare", "Machine Learning"],
    pageNumbers: "1-12",
    pdfUrl: "/pdfs/sample1.pdf",
    supplementaryFiles: ["/pdfs/supp1.pdf"],
  },
  {
    id: "a2",
    title: "Green Energy Adoption in Rural India: Barriers and Solutions",
    authors: ["Rohan Gupta", "Priya Menon"],
    doi: "10.1234/damr.2025.02",
    abstract: "Data analytics techniques applied to medical research...",
    keywords: ["Data Analytics", "Medical Research"],
    pageNumbers: "13-24",
    pdfUrl: "/pdfs/sample2.pdf",
  },
];

interface IssueDetailPageProps {
  params: Promise<{ id: string }>; // 👈 async params
}

const IssueDetailPage = async ({ params }: IssueDetailPageProps) => {
  const { id } = await params; // 👈 await params

  return (
    <main className="bg-white text-gray-800  mx-auto px-4 py-12 ">
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
