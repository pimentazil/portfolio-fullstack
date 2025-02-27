import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="py-24 md:py-32 container">
      <div className="flex flex-col items-start gap-4 md:max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Olá, eu sou <span className="text-primary">Matheus Pimentel</span>
          <br />
          Desenvolvedor Full Stack
        </h1>
        <p className="text-xl text-muted-foreground">
          Transformando ideias em aplicações web modernas e escaláveis com .NET Core, React JS e muito mais.
        </p>
        <div className="flex gap-4 mt-4">
          <Button asChild>
            <Link href="#projects">
              Ver Projetos <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="#contact">Entre em Contato</Link>
          </Button>
        </div>
        <div className="flex gap-4 mt-6">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com" target="_blank" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="mailto:contato@exemplo.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

