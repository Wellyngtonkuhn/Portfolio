import styled from "styled-components";

export const HeaderSection = styled.header`
  width: 100%;
  background: ${(props) => props.theme.background_secondary};
  position: fixed;
  z-index: 1;
  top: 0;
`;

export const Content = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${({ theme }) => theme.color.title};
  }
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    width: 100%;
    position: absolute;
    top: 4rem;
    left: -100%;
    padding: 1rem 0;
    background: ${(props) => props.theme.background_secondary};
    transition: all ease 0.4s;
    opacity: 0;

    li a {
      font-weight: 700;
      font-size: 1.125rem;
      color: ${(props) => props.theme.color.title};
      opacity: 0.8;
      transition: all ease 0.5s;

      :hover {
        opacity: 1;
      }

      @media screen and (min-width: 768px) {
        font-size: 1.2rem;
      }
    }

    @media screen and (min-width: 1280px) {
      position: relative;
      flex-direction: row;
      top: unset;
      left: unset;
      opacity: unset;
    }
  }

  .open {
    left: 0;
    opacity: 1;
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  gap: 1rem;

  button {
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.color.title};

    :hover {
      cursor: pointer;
    }
  }
`;

export const MenuBurger = styled.button`
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
