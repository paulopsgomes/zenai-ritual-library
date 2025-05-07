import { useState } from 'react';

const rituals = [
  {
    id: 1,
    title: "5-Minute Morning Ritual with Gua Sha",
    description: "Start your day with this energizing facial massage using Zenai’s Stainless Steel Gua Sha.",
    tools: ["Gua Sha"],
    difficulty: "Beginner",
    videoUrl: "https://example.com/video/guasha-morning"
  },
  {
    id: 2,
    title: "Deep Tissue Recovery with Foam Roller",
    description: "Post-workout release routine using the Zenai Myofascial Release Foam Roller.",
    tools: ["Foam Roller"],
    difficulty: "Intermediate",
    videoUrl: "https://example.com/video/foamroller"
  },
  {
    id: 3,
    title: "Anti-Stress Facial Ritual with Ice Globes",
    description: "Cool down tension and puffiness with this relaxing facial routine.",
    tools: ["Ice Globes"],
    difficulty: "Beginner",
    videoUrl: "https://example.com/video/ice-globes"
  }
];

export default function RitualLibrary() {
  const [search, setSearch] = useState("");
  const filteredRituals = rituals.filter((ritual) =>
    ritual.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Zenai Ritual Library</h1>
      <input
        type="text"
        placeholder="Search rituals by name or tool..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-300 p-2 rounded w-full mb-6"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredRituals.map((ritual) => (
          <div key={ritual.id} className="border rounded-lg p-4 shadow hover:shadow-md transition">
            <h2 className="text-lg font-semibold mb-2">{ritual.title}</h2>
            <p className="text-sm text-gray-600 mb-2">{ritual.description}</p>
            <p className="text-xs text-gray-500 mb-1">Tools: {ritual.tools.join(", ")}</p>
            <p className="text-xs text-gray-500 mb-3">Difficulty: {ritual.difficulty}</p>
            <a href={ritual.videoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
              ▶ Watch Ritual
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}