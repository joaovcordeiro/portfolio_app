import { ProjetoContainer } from "./styles";
import Link from "next/link";
import { ArrowRightCircle } from "@styled-icons/bootstrap/ArrowRightCircle";

interface ProjetoProps {
  title: string;
  type: string;
  slug: string;
  img: string;
}

export default function ProjetoItem({ title, type, slug, img }: ProjetoProps) {
  return (
    <ProjetoContainer imgUrl={img} data-aos="fade-up">
      <section>
        <div className="overlay" />
        <div className="text">
          <h1># {title}</h1>
          <h2>- {type}</h2>
        </div>
      </section>
      <button type="button">
        <Link href={`/projetos/${slug}`} legacyBehavior>
          <a>
            Ver mais <ArrowRightCircle size={30} />
          </a>
        </Link>
      </button>
    </ProjetoContainer>
  );
}
