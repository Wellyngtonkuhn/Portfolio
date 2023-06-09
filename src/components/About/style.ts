import styled from "styled-components";

export const AboutSection = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.background_primary};
  padding: 3rem 0 2rem 0;
`;

export const Content = styled.article`
  p {
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 26px;
    color: ${({ theme }) => theme.color.description};
    text-align: center;
  }

  // Tablet
  @media screen and (min-width: 768px) {
    width: 700px;
    margin: auto;
  }

    // Desktop
    @media screen and (min-width: 1024px) {
    width: 75%;
    margin: auto;
  }
`;
