"use client";
import React from "react";

interface ArticleProps {
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
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition w-full max-w-4xl mx-auto mb-6">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{article.title}</h2>

      {/* Authors */}
      <p className="text-gray-700 mb-2">
        <span className="font-medium">Authors:</span> {article.authors.join(", ")}
      </p>

      {/* DOI */}
      <p className="text-gray-500 text-sm mb-2">
        <span className="font-medium">DOI:</span> {article.doi}
      </p>

      {/* Abstract */}
      <p className="text-gray-700 mb-3">
        <span className="font-medium">Abstract:</span> {article.abstract}
      </p>

      {/* Keywords */}
      <p className="text-gray-500 text-sm mb-2">
        <span className="font-medium">Keywords:</span> {article.keywords.join(", ")}
      </p>

      {/* Page Numbers */}
      <p className="text-gray-500 text-sm mb-4">
        <span className="font-medium">Pages:</span> {article.pageNumbers}
      </p>

      {/* Download Buttons */}
      <div className="flex flex-wrap gap-3">
        <a
          href={article.pdfUrl}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition text-sm"
          target="_blank"
        >
          Download PDF
        </a>
        {article.supplementaryFiles?.map((file, idx) => (
          <a
            key={idx}
            href={file}
            className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition text-sm"
            target="_blank"
          >
            Supplementary {idx + 1}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ArticleCard;
