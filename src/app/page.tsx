import Image from "next/image";
import Link from "next/link";

/**
 * Helper function to convert kebab-case to Title Case
 */
function formatExampleName(name: string): string {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const examples = [
  "api-tool",
  "chat",
  "client-side-tools",
  "completion",
  "generate-image",
  "generate-image-tool",
  "generate-speech",
  "mcp-tools",
  "message-metadata",
  "multi-modal-chat",
  "multiple-tools",
  "provider-management",
  "reasoning",
  "stream",
  "structured-array",
  "structured-data",
  "structured-enum",
  "tools",
  "transcribe-audio",
  "web-search-tool",
];

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full max-w-6xl">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <div className="w-full">
          <h1 className="text-2xl font-bold mb-6 text-center sm:text-left">
            AI SDK v5 Examples
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {examples.map((example) => (
              <Link
                key={example}
                href={`/ui/${example}`}
                className="rounded-lg border border-solid border-black/[.08] dark:border-white/[.145] transition-colors p-4 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent"
              >
                <div className="font-medium text-sm sm:text-base">
                  {formatExampleName(example)}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
