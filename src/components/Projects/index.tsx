import SectionTitle from "../SectionTitle";
import ProjetoItem from "./projectItem";
import { Container } from "./styles";
import Link from "next/link";

interface Project {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <Container>
      <SectionTitle title="Ultimos Projetos" />

      <section>
        {projects.slice(0, 3).map((project) => (
          <ProjetoItem
            key={project.slug}
            title={project.title}
            type={project.type}
            slug={project.slug}
            img={project.thumbnail}
          />
        ))}
      </section>
      <button type="button">
        <Link href="/projetos" legacyBehavior>
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}
