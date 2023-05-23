import { Container } from "@/styles/ContainerStyles";
import { Cards, Content, WorkSection } from "./style";
import Title from "../Title";
import Image from "next/image";
import { Ecommerce, StudioOn, WaveOfGrace } from "@/assets";

export default function Works() {
  return (
    <WorkSection id="works">
      <Container>
        <Title title="Trabalhos" />
        <Content>
          <Cards>
            <div>
              <Image src={Ecommerce} alt="Eyeware Loja virtal" loading="lazy" />
            </div>

            <div>
              <h3>Eyeware</h3>
              <p>
                A Eyeware é uma loja virtual, seu nicho é vender óculos
                refinados e de qualidade. Essa loja conta com um sistema que
                calcula a taxa de entrega, ela é integrada com meios de
                pagamentos e um dashboard para o cliente administrar suas
                compras, seus favoritos e dados pessoas.
              </p>
              <a
                href="https://e-commerce-seven-indol.vercel.app/"
                target="_blank"
              >
                Ver Site
              </a>
            </div>
          </Cards>

          <Cards className="reversed_row">
            <div>
              <Image
                src={StudioOn}
                alt="StudioOn site de eventos"
                loading="lazy"
              />
            </div>

            <div>
              <h3>StudioOn</h3>
              <p>
                O StudioOn é um site de eventos, ele é responsável por mostrar
                os todos eventos de empresas parceiras.
              </p>
              <a
                href="https://wellyngtonkuhn.github.io/studion/"
                target="_blank"
              >
                Ver Site
              </a>
            </div>
          </Cards>
          <Cards>
            <div>
              <Image
                src={WaveOfGrace}
                alt="Loja virtal EyeWare"
                loading="lazy"
              />
            </div>

            <div>
              <h3>Wave of Grace</h3>
              <p>
                A Wave Of Grace é uma loja virtual cuja visão é ser uma empresa
                que vai além da venda de produtos, investindo em pessoas que
                fazem o bem para um mundo melhor. Sua missão é gerar
                transformação e impacto ao redor do mundo, através da criação de
                produtos feitos à mão com um design exclusivo, inspirados pela
                criação e pelo criador.
              </p>
              <a href="https://www.waveofgrace.com.br/" target="_blank">
                Ver Site
              </a>
            </div>
          </Cards>
        </Content>
      </Container>
    </WorkSection>
  );
}
