"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">
          Something went wrong.
        </h2>

        <p>{error.message}</p>

        <button onClick={() => reset()}>
          Try Again
        </button>
      </div>
    </div>
  );
}
