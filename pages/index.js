import { useEffect, useState } from "react";

export default function Home() {
const [loaded, setLoaded] = useState(false);

useEffect(() => {
setTimeout(() => setLoaded(true), 100); // smooth fade-in
}, []);

return (
<main
className={`min-h-screen bg-black text-white flex flex-col items-center justify-center transition-opacity duration-1000 ${
loaded ? "opacity-100" : "opacity-0"
}`}
>
{/* Logo */}
<div className="text-5xl font-bold tracking-wide mb-4">
<span className="text-purple-400">R</span>evisr
</div>

{/* Tagline */}
<p className="text-lg text-gray-400 mb-10">
Revise Smarter, Not Harder.
</p>

{/* Navigation buttons */}
<div className="flex flex-col gap-4 w-64">
<button className="bg-purple-500 hover:bg-purple-400 transition rounded px-4 py-2 text-white text-lg w-full">
Flashcards
</button>
<button className="bg-purple-500 hover:bg-purple-400 transition rounded px-4 py-2 text-white text-lg w-full">
Generate Test
</button>
<button className="bg-purple-500 hover:bg-purple-400 transition rounded px-4 py-2 text-white text-lg w-full">
Weekly Check-In
</button>
<button className="bg-purple-500 hover:bg-purple-400 transition rounded px-4 py-2 text-white text-lg w-full">
Progress Heatmap
</button>
</div>
</main>
);
}
