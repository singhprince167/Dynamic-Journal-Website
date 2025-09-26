// List of articles (table view)
"use client";

import ArticleList from "../components/ArticleList";

export default function AdminArticlesPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      

      {/* Main content */}
      <main className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">
            Articles
          </h1>

          {/* Articles Table/List */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ArticleList />
          </div>
        </div>
      </main>
    </div>
  );
}
