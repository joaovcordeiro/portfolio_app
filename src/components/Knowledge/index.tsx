import { ReactNode } from "react";

import { Container } from "./styles";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { Javascript } from "@styled-icons/boxicons-logos/Javascript";
import { ReactLogo } from "@styled-icons/boxicons-logos/ReactLogo";

import KnowledgeItem from "./KnowledgeItem";
import SectionTitle from "../SectionTitle";

export default function Knowledge() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />
      <section>
        <KnowledgeItem title="HTML" icon={<Html5 />} />
        <KnowledgeItem title="CSS" icon={<Css3 />} />
        <KnowledgeItem title="JavaScript" icon={<Javascript />} />
        <KnowledgeItem title="React" icon={<ReactLogo />} />
      </section>
    </Container>
  );
}
