import SubmissionSystemDetails from "@/components/SubmissionSystemDetails";

export default function SubmissionSystemPage() {
  return (
    <main className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-4 sm:px-8 py-10">
      <h1 className="text-black font-bold text-2xl sm:text-3xl mb-6 text-center">
        Submission System Overview
      </h1>
      <div className="w-full max-w-4xl">
        <SubmissionSystemDetails />
      </div>
    </main>
  );
}
