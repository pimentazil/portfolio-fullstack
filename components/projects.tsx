import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Uma plataforma de e-commerce completa com painel administrativo, pagamentos e gestão de produtos.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      demoUrl: "https://exemplo.com",
      repoUrl: "https://github.com",
    },
    {
      title: "Task Management App",
      description: "Aplicativo de gerenciamento de tarefas com recursos de colaboração em tempo real e notificações.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
      demoUrl: "https://exemplo.com",
      repoUrl: "https://github.com",
    },
    {
      title: "Streaming Service Dashboard",
      description: "Dashboard para um serviço de streaming com análise de dados e recomendações personalizadas.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Express", "PostgreSQL", "Chart.js", "AWS"],
      demoUrl: "https://exemplo.com",
      repoUrl: "https://github.com",
    },
    {
      title: "Social Media Platform",
      description:
        "Plataforma de mídia social com recursos de chat, compartilhamento de conteúdo e perfis personalizados.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "GraphQL", "MongoDB", "Socket.io"],
      demoUrl: "https://exemplo.com",
      repoUrl: "https://github.com",
    },
    {
      title: "Fitness Tracking App",
      description:
        "Aplicativo para rastreamento de atividades físicas, nutrição e progresso de condicionamento físico.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React Native", "Node.js", "Express", "MongoDB"],
      demoUrl: "https://exemplo.com",
      repoUrl: "https://github.com",
    },
    {
      title: "Real Estate Platform",
      description: "Plataforma imobiliária com listagens, pesquisa avançada e recursos de agendamento de visitas.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "Django", "PostgreSQL", "Google Maps API"],
      demoUrl: "https://exemplo.com",
      repoUrl: "https://github.com",
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/40">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Meus Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.repoUrl} target="_blank">
                    <Github className="mr-2 h-4 w-4" /> Código
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href={project.demoUrl} target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" /> Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

