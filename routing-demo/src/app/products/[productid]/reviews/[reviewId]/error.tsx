"use client";

const ErrorBoundary = ({ error,reset }: { error: Error, reset: () => void }) => {
  return (
    <div>
      <h1>Ein Fehler ist aufgetreten</h1>
      <p>{error.message}</p>
      <button onClick={reset}>Zurück
      </button>
    </div>
  );
}
export default ErrorBoundary;