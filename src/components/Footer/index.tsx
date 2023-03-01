import { Container } from "./styles";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin";

export default function Footer() {
  function handleRedirect(url: string) {
    window.open(url, "_blank");
  }

  function handleScrollToTop() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={() => handleScrollToTop()}>
          Voltar ao topo
        </button>
        <section>
          <Github
            onClick={() => handleRedirect("https://github.com/joaovcordeiro")}
          />
          <Linkedin
            onClick={() =>
              handleRedirect("https://www.linkedin.com/in/joaoaraujocordeiro/")
            }
          />
        </section>
      </div>
    </Container>
  );
}
