import styled from "styled-components";

export const HeroSection = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.background_primary};

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
  }
`;

export const Content = styled.article`
  margin-top: 5rem;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 4.5rem 0;

  div:nth-child(1) {
    h1 {
      font-size: 2rem;
      font-weight: 700;
      color: ${(props) => props.theme.color.title};
    }

    h2 {
      font-size: 1.125rem;
      font-weight: 500;
      color: ${(props) => props.theme.color.description};
    }

    ul {
      display: flex;
      gap: 1rem;

      li a {
        color: ${(props) => props.theme.color.description};
      }
    }
  }

  div:nth-child(2) {
    img {
      width: 100%;
      height: 250px;
      border-radius: 50%;

      @media screen and (min-width: 425px) {
        height: 300px;
      }
    }
  }

  // Tablet
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding-left: 2.125rem;
    padding-right: 2.125rem;

    div:nth-child(1) {
      h1 {
        font-size: 2.5rem;
      }
    }

    div:nth-child(2) {
      img {
        width: 275px;
        height: 275px;
      }
    }
  }

  // Desktop
  @media screen and (min-width: 1024px) {
    gap:  12rem;

    div:nth-child(1) {
      h1 {
        font-size: 3rem;
        width: 14ch;
      }
    }

    div:nth-child(2) {
      img {
        width: 275px;
        height: 275px;
      }
    }
  }
`;
