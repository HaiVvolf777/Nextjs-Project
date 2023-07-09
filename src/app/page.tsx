"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const login = () => {
    router.push("/login");
    // console.log('clicked');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
        <button
          onClick={login}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold cursor-pointer`}>
            Visit my Site
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 cursor-pointer`}>
           I Found in-depth information about Next.js features and API.
          </p>
        </button>
      </div>
    </main>
  );
}
