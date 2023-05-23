import { useState } from "react";
import Link from "next/link";
import { Content, HeaderSection, Nav, MenuBurger, ButtonsDiv } from "./style";
import { Container } from "@/styles/ContainerStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun, faX, faBars } from "@fortawesome/free-solid-svg-icons";

type HeaderProps = {
  darkMode: Boolean;
  handleDarkMode: () => void;
};

const Header: React.FC<HeaderProps> = ({ handleDarkMode, darkMode }) => {
  const [openMenuMobile, setOpenMenuMobile] = useState(false);

  const ToggleMenuMobile = () => {
    setOpenMenuMobile((prev) => !prev);
  };

  const handleCloseMenuMobile = () => {
    setOpenMenuMobile(false)
  }

  return (
    <HeaderSection>
      <Container>
        <Content>
          <Link href="/">
            <h1>WKtech</h1>
          </Link>

          <Nav>
            <ul className={openMenuMobile ? "open" : "close"}>
              <li>
                <a href="#about" onClick={() => handleCloseMenuMobile()}>Sobre</a>
              </li>
              <li>
                <a href="#works" onClick={() => handleCloseMenuMobile()}>Trabalhos</a>
              </li>
              <li>
                <a href="#services" onClick={() => handleCloseMenuMobile()}>Serviços</a>
              </li>
              {/* <li>
                <a href="#" onClick={() => handleCloseMenuMobile()}>Depoimentos</a>
              </li> */}
              <li>
                <a href="#contact" onClick={() => handleCloseMenuMobile()}>Contato</a>
              </li>
            </ul>
          </Nav>

          <ButtonsDiv>
            <button onClick={() => handleDarkMode()}>
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} size="2x" />
            </button>

            <MenuBurger onClick={() => ToggleMenuMobile()}>
              <FontAwesomeIcon icon={openMenuMobile ? faX : faBars} size="2x" />
            </MenuBurger>
          </ButtonsDiv>
        </Content>
      </Container>
    </HeaderSection>
  );
};

export default Header;
