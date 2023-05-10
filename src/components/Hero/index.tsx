import Image from "next/image";
import { Container } from "@/styles/ContainerStyles";
import { Content, HeroSection } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import ImageProfile from "../../assets/wellyngton_kuhn.webp";

export default function Hero() {
  return (
    <HeroSection>
      <Container>
        <Content>
          <div>
            <h1>Olá, Eu sou Wellyngton Kuhn</h1>
            <h2>Software Developer</h2>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/wellyngtonkuhn/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} title="Linkedin" />
                </a>
              </li>
              <li>
                <a href="https://github.com/Wellyngtonkuhn" target="_blank">
                  <FontAwesomeIcon icon={faGithub} title="GitHub" />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5554996328581?text=Ol%C3%A1+Wellyngton+tudo+bem%3F"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faWhatsapp} title="WhatsApp" />
                </a>
              </li>
              <li>
                <a href="mailto: kuhnwellyngton@gmail.com" target="_blank">
                  <FontAwesomeIcon icon={faEnvelope} title="Email" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <Image src={ImageProfile} alt="Wellyngton Kuhn" />
          </div>
        </Content>
      </Container>
    </HeroSection>
  );
}
