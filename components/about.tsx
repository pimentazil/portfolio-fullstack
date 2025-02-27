import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Download } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/40">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Sobre Mim</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              <Image src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.15752-9/480874836_966777882222265_522567438280240901_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=E1gS5ygLfOoQ7kNvgEb4F97&_nc_oc=AdhU3W1BTfR3khIP51kKIr-NTePnJsBewjRln5SPgRAiNPJ6gHiolSLLK1Y3Dg9cOxujqEMShZWcjkSNHRbnJ_d9&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcgh2-1.fna&oh=03_Q7cD1gHYnqdkE9riK6Rm0FIjm7jjbgIeT_Ds2qTHN-dYqdUHSw&oe=67E7EDE2" alt="Foto de perfil" fill className="object-cover" />
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-lg">
              Sou um desenvolvedor full stack de 18 anos, com foco em backend utilizando C# e .NET Core. Tenho experiência em
              desenvolvimento web e cloud, trabalhando com React, AWS e práticas de DevOps para criar aplicações escaláveis e eficientes.
            </p>
            <p className="text-lg">
              Atuo na área há mais de um ano e estou sempre buscando evoluir, enfrentando desafios com confiança e dedicação.
              Meu objetivo é ser um dos melhores no que faço, aprimorando constantemente minhas habilidades e explorando novas tecnologias.
            </p>
            <p className="text-lg">
              Quando não estou codando, gosto de aprender sobre arquitetura de software, automação e boas práticas de engenharia.
            </p>
            <Button variant="outline" className="mt-4" asChild>
              <Link href="/CurriculoMatheus.pdf" target="_blank">
                <Download className="mr-2 h-4 w-4" /> Baixar Currículo
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}

