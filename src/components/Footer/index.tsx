import { Container } from "@/styles/ContainerStyles";
import { Content, FooterSection } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Footer() {
  return (
    <FooterSection>
      <Container>
        <Content>
        <div>
          <h2>Desenvolvido por Wellyngton Kuhn</h2>
        </div>
        <div>
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
        </Content>
      </Container>
    </FooterSection>
  );
}
