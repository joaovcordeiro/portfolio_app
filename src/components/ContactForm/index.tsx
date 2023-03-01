import SectionTitle from "../SectionTitle";
import Form from "./Form";

import { Container } from "./styles";

export default function ContactForm() {
  return (
    <Container>
      <SectionTitle
        title={
          <>
            Gostaria de <br /> entrar em contato?
          </>
        }
        description={<>Preencha o formulario abaixo</>}
      />
      <Form />
    </Container>
  );
}
