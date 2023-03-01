import { Container } from "./styles";
import Link from "next/link";

interface ProjectItemProps {
  title: string;
  type: string;
  imgUrl: string;
  slug: string;
}

export default function ProjectItem({
  title,
  type,
  imgUrl,
  slug,
}: ProjectItemProps) {
  return (
    <Container imgUrl={imgUrl}>
      <Link href={`/projetos/${slug}`} legacyBehavior>
        <a>
          <div className="overlay" />
          <section>
            <h1>{title}</h1>
            <h2>- {type}</h2>
          </section>
        </a>
      </Link>
    </Container>
  );
}
