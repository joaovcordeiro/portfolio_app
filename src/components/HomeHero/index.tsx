import { Container, TextContainer, CodeItem, InfosContainer } from "./styles";
import Image from "next/image";
import illustration from "@/assets/illustration.png";

function HomeHero() {
  return (
    <Container>
      <Image src={illustration} alt="Programator Illustration"></Image>
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo João</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment">{"//Minha apresentação"}</span>
            <span className="purple">Infos</span>
            {"\u007B"}
            <div>
              Nome: <span className="blue">João</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Araujo</span>
            </div>
            {"\u007D"}
          </CodeItem>
          <CodeItem>
            <span className="purple">Cargo</span>
            {"\u007B"}
            <div>
              Ocupação: <span className="blue">Desenvolvedor Web</span>
            </div>

            {"\u007D"}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
