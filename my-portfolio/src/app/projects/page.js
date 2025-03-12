export default function ProjectsPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="space-y-4">
        <ProjectCard
          title="LeetCode Bot"
          description="A Discord bot for tracking LeetCode stats."
        />
        <ProjectCard
          title="Portfolio Site"
          description="This website, built with Next.js and PostgreSQL."
        />
      </div>
    </div>
  );
}

function ProjectCard({ title, description }) {
  return (
    <div className="border p-4 rounded-md">
      <h3 className="text-lg font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
