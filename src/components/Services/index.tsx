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
                  Sou desenvolvedor Frontend, mas também desenvolvo backend em Nodejs. Hoje meu foco para contratação é Frontend e estou sempre estudando e aplicando os novos conhecimentos para assim se tornarem experiências sólidas.
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  perspiciatis magni esse ullam.
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  perspiciatis magni esse ullam.
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  perspiciatis magni esse ullam.
                </p>
              </div>
              <div>
                <h3>Ecommerce</h3>
                <Image
                  src={Ecommerce}
                  alt="Foto de um site institucional"
                  loading="lazy"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  perspiciatis magni esse ullam.
                </p>
              </div>
              <div>
                <h3>Blogs</h3>
                <Image
                  src={Site_Instirucional}
                  alt="Foto de um site institucional"
                  loading="lazy"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  perspiciatis magni esse ullam.
                </p>
              </div>
              <div>
                <h3>Sistemas</h3>
                <Image
                  src={Site_Instirucional}
                  alt="Foto de um site institucional"
                  loading="lazy"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  perspiciatis magni esse ullam.
                </p>
              </div>
            </FreelancerSection>
          )}
        </Content>
      </Container>
    </ServicesSection>
  );
}
