import styled from "styled-components";

export const WorkSection = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.background_primary};
  padding: 3rem 0 2rem 0;
`;

export const Content = styled.article`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media screen and (min-width: 768px) {
    .reversed_row {
      flex-direction: row-reverse;
    }
  }
`;

export const Cards = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.background_secondary};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;

  div:nth-child(1) {
    img {
      width: 100%;
      height: 175px;
    }
  }

  div:nth-child(2) {
    text-align: center;
    h3 {
      color: ${({ theme }) => theme.color.description};
      margin: 1rem 0;
      font-size: 1.3rem;
      font-weight: 500;
      line-height: 24.59px;
    }

    p {
      font-size: 1rem;
      font-weight: 400;
      line-height: 26px;
      color: ${({ theme }) => theme.color.description};
      text-align: justify;
      padding: 0 0.5rem;
      margin-bottom: 1rem;
    }
    a {
      padding: 0.5rem 6.7rem;
      font-size: 1rem;
      font-weight: 500;
      line-height: 24.59px;
      font-family: "DM Sans", sans-serif;
      border-end-start-radius: 4px;
      border-end-end-radius: 4px;
      color: ${({ theme }) => theme.buttons.color};
      background-color: ${({ theme }) => theme.buttons.background};
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;

    div {
      width: 50%;
    }

    div:nth-child(1) {
      img {
        height: 100%;
      }
    }

    div:nth-child(2) {
      padding: 0 1rem;

      h3 {
        font-size: 1.3rem;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    div {
      width: 50%;
      height: 300px;
    }

    div:nth-child(2) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      h3 {
        font-size: 1.5rem;
      }

      a {
        width: 50%;
        padding: 0.6rem 0;
      }
    }
  }
`;
