import { Container } from "@/styles/ContainerStyles";
import { AboutSection, Content } from "./style";
import Title from "../Title";

export default function About() {
  return (
    <AboutSection id="about">
      <Container>
        <Content>
          <Title title="Sobre" />
          <p >
            Sou desenvolvedor de Software há três (3) anos e minha paixão é unir as necessidades das pessas a tecnologia e assim criar soluções que possam ir ao encontro da produtividade e da automação. Gosto de desafios e de estar sempre agregando valor na vida das pessoas. < br/>
            Possuo formação em Técnico em Informática pelo Senac e Sistemas para Internet pela Universidade Anhembi Morumbi. Tenho mais de quatrocentas (400) horas de especialização em desenvolvimento web (Frontend e Backend).
          </p>
        </Content>
      </Container>
    </AboutSection>
  );
}
