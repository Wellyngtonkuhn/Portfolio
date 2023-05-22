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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem modi
            corporis placeat, quia at sunt, ullam expedita neque sapiente soluta
            omnis molestiae pariatur! Voluptatum ipsa atque sed magnam, ducimus
            amet.
          </p>
        </Content>
      </Container>
    </AboutSection>
  );
}
