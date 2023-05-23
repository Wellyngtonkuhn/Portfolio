import { useState } from "react";
import Image from "next/image";
import Title from "../Title";

import { Container } from "@/styles/ContainerStyles";
import {
  CompaniesSection,
  Content,
  FreelancerSection,
  Menu,
  ServicesSection,
} from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";

import NextIcon from "../../assets/nextjs.png";
import TypeScriptIcon from "../../assets/typescript.svg";

import {
  Site_Responsivo,
  Site_Instirucional,
  Landing_Page,
  Ecommerce,
  Saas,
  Blog
} from "@/assets";

export default function Services() {
  const [typeService, setTypeService] = useState("toCompanies");

  const handleTypeService = (type: string) => {
    return setTypeService(type);
  };

  return (
    <ServicesSection id="services">
      <Container>
        <Title title="Serviços" />
        <Menu>
          <button onClick={() => handleTypeService("toCompanies")}>
            Para Empresas
          </button>
          <button onClick={() => handleTypeService("freeLancer")}>
            Freelancer
          </button>
        </Menu>

        <Content>
          {typeService === "toCompanies" && (
            <CompaniesSection>
              <div>
                <h2>Frontend Developer</h2>
                <p>
                  Sou desenvolvedor Frontend, mas também desenvolvo backend em
                  Nodejs. Hoje meu foco para contratação é Frontend e estou
                  sempre estudando e aplicando os novos conhecimentos para assim
                  se tornarem experiências sólidas.
                </p>
              </div>

              <div>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faHtml5} />
                    <h3>HTML 5</h3>
                  </li>

                  <li>
                    <FontAwesomeIcon icon={faCss3} />
                    <h3>CSS 3</h3>
                  </li>

                  <li>
                    <FontAwesomeIcon icon={faSass} />
                    <h3>Sass</h3>
                  </li>

                  <li>
                    <FontAwesomeIcon icon={faJs} />
                    <h3>JavaScript</h3>
                    <h3></h3>
                  </li>

                  <li>
                    <Image
                      src={TypeScriptIcon}
                      alt="Icone do Typescript"
                      width={32}
                      height={32}
                    />
                    <h3>TypeScript</h3>
                  </li>

                  <li>
                    <FontAwesomeIcon icon={faReact} />
                    <h3>Reactjs</h3>
                  </li>
                  <li>
                    <Image
                      src={NextIcon}
                      alt="Icone do Nextjs"
                      width={32}
                      height={32}
                    />

                    <h3>Nextjs</h3>
                  </li>
                </ul>
                <a href="#contact">Contato</a>
              </div>
            </CompaniesSection>
          )}

          {typeService === "freeLancer" && (
            <FreelancerSection>
              <div>
                <h3>Design Responsivo</h3>
                <Image
                  src={Site_Responsivo}
                  alt="Foto de site resposivo"
                  loading="lazy"
                />
                <p>
                  Através da arquitetura pensada em desenvolver primeiro para
                  dispositivos móveis, damos suporte para os diversos tamanhos
                  de telas do mercado.
                </p>
              </div>
              <div>
                <h3>Landing Page</h3>
                <Image
                  src={Landing_Page}
                  alt="Foto de uma landing page"
                  loading="lazy"
                />
                <p>
                  Precisa transformar o seu visitante em lead? Desenvolvemos a
                  página perfeita para seu modelo de negócio.
                </p>
              </div>
              <div>
                <h3>Site Institucional</h3>
                <Image
                  src={Site_Instirucional}
                  alt="Foto de um site institucional"
                  loading="lazy"
                />
                <p>
                  Se seu negócio precisa de um site para dar informações sobre
                  sua empresa, como, por exemplo, a localização, serviços,
                  objetivos, produtos ou serviços concluídos, entre outros. Temos a solução ideal.
                </p>
              </div>
              <div>
                <h3>Loja Virtual</h3>
                <Image
                  src={Ecommerce}
                  alt="Loja virtual"
                  loading="lazy"
                />
                <p>
                  Esta precisando expandir seu negócio para internet, temos a solução ideal para sua empresa vender online. Trabalhamos no desenvolvimento de um site exclusivo e personalizado.
                </p>
              </div>
              <div>
                <h3>Blogs</h3>
                <Image
                  src={Blog}
                  alt="Foto de um site institucional"
                  loading="lazy"
                />
                <p>
                  Se o seu caso for criar um blog para publicar conteúdos, como
                  artigos e fotos, não deixe de nos contactar.
                </p>
              </div>
              <div>
                <h3>Sistemas (Saas)</h3>
                <Image src={Saas} alt="Foto de programação" loading="lazy" />
                <p>
                  Revolucione as rotinas de trabalho com softwares projetados
                  conforme as estratégias e necessidades de seu empreendimento.
                </p>
              </div>
            </FreelancerSection>
          )}
        </Content>
      </Container>
    </ServicesSection>
  );
}
