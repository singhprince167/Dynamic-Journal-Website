// app/components/ArticleCard.tsx
"use client";
import React, { useState } from "react";

export interface ArticleProps {
  id: string;
  title: string;
  authors: string[];
  doi: string;
  abstract: string;
  keywords: string[];
  pageNumbers: string;
  pdfUrl: string;
  supplementaryFiles?: string[];
}

const ArticleCard: React.FC<{ article: ArticleProps }> = ({ article }) => {
  const [showFullAbstract, setShowFullAbstract] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-1 text-gray-800">{article.title}</h2>
      <p className="text-gray-600 mb-2">{article.authors.join(", ")}</p>
      <p className="text-gray-500 text-sm mb-2">DOI: {article.doi}</p>
      <p className="text-gray-700 mb-2">
        {showFullAbstract
          ? article.abstract
          : article.abstract.length > 100
          ? article.abstract.slice(0, 100) + "..."
          : article.abstract}
        {article.abstract.length > 100 && (
          <button
            onClick={() => setShowFullAbstract(!showFullAbstract)}
            className="text-blue-600 hover:underline ml-2 text-sm"
          >
            {showFullAbstract ? "Show Less" : "Read More"}
          </button>
        )}
      </p>
      <p className="text-gray-500 text-sm mb-4">
        Keywords: {article.keywords.join(", ")}
      </p>
      <p className="text-gray-500 text-sm mb-4">Pages: {article.pageNumbers}</p>
      <div className="flex flex-wrap gap-4">
        <a
          href={article.pdfUrl}
          target="_blank"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Download PDF
        </a>
        {article.supplementaryFiles?.map((file, idx) => (
          <a
            key={idx}
            href={file}
            target="_blank"
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            Supplementary {idx + 1}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ArticleCard;
