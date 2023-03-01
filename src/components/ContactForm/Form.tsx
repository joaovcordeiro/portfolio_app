import { FormContainer, Input, Textarea } from "./styles";

export default function Form() {
  return (
    <FormContainer data-aos="fade-up">
      <Input placeholder="Nome" required />
      <Input placeholder="E-mail" type="email" required />
      <Textarea placeholder="Mensagem" required />
      <button type="submit">ENVIAR</button>
    </FormContainer>
  );
}
