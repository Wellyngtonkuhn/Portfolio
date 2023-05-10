import { Container } from "@/styles/ContainerStyles";
import { Cards, Content, WorkSection } from "./style";
import Title from "../Title";
import Image from "next/image";

export default function Works() {
  return (
    <WorkSection id='works'>
      <Container>
        <Content>
          <Title title="Trabalhos" />
          <Cards>
            <div>
              <Image src={''} alt="" />
              <h3>ProjectTitle</h3>
              <button>Ver mais</button>
            </div>
            <div>
              <Image src={''} alt="" />
              <h3>ProjectTitle</h3>
              <button>Ver mais</button>
            </div>
            <div>
              <Image src={''} alt="" />
              <h3>ProjectTitle</h3>
              <button>Ver mais</button>
            </div>
            <div>
              <Image src={''} alt="" />
              <h3>ProjectTitle</h3>
              <button>Ver mais</button>
            </div>
            <div>
              <Image src={''} alt="" />
              <h3>ProjectTitle</h3>
              <button>Ver mais</button>
            </div>
            <div>
              <Image src={''} alt="" />
              <h3>ProjectTitle</h3>
              <button>Ver mais</button>
            </div>
          </Cards>
        </Content>
      </Container>
    </WorkSection>
  )
}
