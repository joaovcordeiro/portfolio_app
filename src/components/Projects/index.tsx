import SectionTitle from "../SectionTitle";
import ProjetoItem from "./projectItem";
import { Container } from "./styles";
import Link from "next/link";
export default function Projects() {
  return (
    <Container>
      <SectionTitle title="Ultimos Projetos" />

      <section>
        <ProjetoItem
          title="Projeto 01"
          type="Website"
          slug="projeto-1"
          img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.dogwallpapers.net%2Fwallpapers%2Fcute-utonagan-dog-photo.jpg&f=1&nofb=1&ipt=4cb333edbcb2ca7a478d7c241e138ab0584064003764c0d335b13562219c940f&ipo=images"
        />
        <ProjetoItem
          title="Projeto 01"
          type="Website"
          slug="projeto-1"
          img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.dogwallpapers.net%2Fwallpapers%2Fcute-utonagan-dog-photo.jpg&f=1&nofb=1&ipt=4cb333edbcb2ca7a478d7c241e138ab0584064003764c0d335b13562219c940f&ipo=images"
        />

        <ProjetoItem
          title="Projeto 01"
          type="Website"
          slug="projeto-1"
          img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.dogwallpapers.net%2Fwallpapers%2Fcute-utonagan-dog-photo.jpg&f=1&nofb=1&ipt=4cb333edbcb2ca7a478d7c241e138ab0584064003764c0d335b13562219c940f&ipo=images"
        />
      </section>
      <button type="button">
        <Link href="/projetos" legacyBehavior>
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}
