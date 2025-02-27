import { Code, Database, Globe, Layout, Server, Terminal, GitBranch } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="h-8 w-8 mb-2 text-primary" />,
      skills: ["React", "Next.js", "TypeScript", "HTML5", "CSS3/SASS", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: <Server className="h-8 w-8 mb-2 text-primary" />,
      skills: ["Node.js", "Express", "NestJS", "Python", "Django", "PHP"],
    },
    {
      title: "Banco de Dados",
      icon: <Database className="h-8 w-8 mb-2 text-primary" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
    },
    {
      title: "DevOps",
      icon: <Terminal className="h-8 w-8 mb-2 text-primary" />,
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "GitHub Actions"],
    },
    {
      title: "Ferramentas",
      icon: <GitBranch className="h-8 w-8 mb-2 text-primary" />,
      skills: ["Git", "VS Code", "Figma", "Jira", "Postman"],
    },
    {
      title: "Outros",
      icon: <Globe className="h-8 w-8 mb-2 text-primary" />,
      skills: ["RESTful APIs", "GraphQL", "WebSockets", "Testes Unitários", "Agile/Scrum"],
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-24 container">
      <h2 className="text-3xl font-bold tracking-tight mb-8">Minhas Habilidades</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="border rounded-lg p-6 bg-card">
            <div className="flex flex-col items-center mb-4">
              {category.icon}
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>
            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="flex items-center">
                  <Code className="h-4 w-4 mr-2 text-primary" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

