import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Desenvolvedor Full Stack",
      company: "NDevs",
      period: "Mar 2024 - Presente",
      description:
        "Lidero o desenvolvimento de aplicações full stack de alta escala utilizando C#, ReactJs e AWS. Implementei arquiteturas de microsserviços e otimizei processos de CI/CD.",
      technologies: ["C#", "ReactJS", "AWS", "SQl Server", "Docker"],
    },
    {
      title: "Desenvolvedor Frontend",
      company: "Digital Innovations",
      period: "Mar 2023 - Mar 2024",
      description:
        "Desenvolvi interfaces de usuário responsivas e acessíveis para aplicações web e móveis. Trabalhei com React, TypeScript e implementei testes automatizados.",
      technologies: ["React", "TypeScript", "SASS", "Jest", "Redux"],
    },
  ]

  return (
    <section id="experience" className="py-16 md:py-24 container">
      <h2 className="text-3xl font-bold tracking-tight mb-8">Experiência Profissional</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{exp.title}</CardTitle>
                  <CardDescription className="text-lg flex items-center mt-1">
                    <Briefcase className="h-4 w-4 mr-1" /> {exp.company}
                  </CardDescription>
                </div>
                <Badge variant="outline" className="flex items-center">
                  <Calendar className="h-3 w-3 mr-1" /> {exp.period}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

