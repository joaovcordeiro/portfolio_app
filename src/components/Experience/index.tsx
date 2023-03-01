import SectionTitle from "../SectionTitle";
import ExperienceItem from "./ExperienceItem";

import { Container } from "./styles";

export function Experience() {
  return (
    <Container>
      <SectionTitle title="01 Ano" description="de experiência" />
      <section>
        <ExperienceItem
          year="2022"
          title="Desenvolvedor Web"
          description="Inicio dos estudos em programação na Driven Education"
        />
        <ExperienceItem
          year="2022"
          title="Desenvolvedor Web"
          description="Inicio dos estudos em programação na Driven Education"
        />
        <ExperienceItem
          year="2022"
          title="Desenvolvedor Web"
          description="Inicio dos estudos em programação na Driven Education"
        />
        <ExperienceItem
          year="2022"
          title="Desenvolvedor Web"
          description="Inicio dos estudos em programação na Driven Education"
        />
      </section>
    </Container>
  );
}
