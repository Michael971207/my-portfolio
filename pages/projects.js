import Layout from "../components/Layout";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio to showcase my work.",
      technologies: ["Next.js", "Tailwind CSS"],
      link: "https://my-portfolio.vercel.app",
    },
    {
      title: "API Integration",
      description: "Integrated third-party APIs for efficient backend systems.",
      technologies: ["Python", "MongoDB"],
      link: "https://github.com/Michael971207/api-project",
    },
  ];

  return (
    <Layout>
      <h1 className="text-3xl font-bold">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {projects.map((project, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <h2 className="text-xl font-bold">{project.title}</h2>
            <p className="mt-2 text-gray-600">{project.description}</p>
            <p className="mt-2 text-sm text-gray-500">
              <strong>Technologies:</strong> {project.technologies.join(", ")}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-4 block"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </Layout>
  );
}
