import styled from "styled-components";

export const WorkSection = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.background_primary};
  padding: 3rem 0 2rem 0;
`;

export const Content = styled.article``;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  div {
    width: 100%;
    height: 350px;
    background-color: ${({ theme }) => theme.background_secondary};
    border-radius: 4px;
    display: flex;
    flex-direction: column;

    img {
      width: 100%;
      height: 86%;
    }

    h3 {
      color: ${({ theme }) => theme.color.description};
      text-align: center;
      margin: 1rem 0;
      font-size: 1.3rem;
      font-weight: 500;
      line-height: 24.59px;
    }

    button {
      width: 100%;
      font-size: 1.1rem;
      font-weight: 500;
      line-height: 24.59px;
      font-family: "DM Sans", sans-serif;
      font-weight: 500;
      padding: 0.6rem 0;
      border: none;
      border-end-start-radius: 4px;
      border-end-end-radius: 4px;
      color: ${({ theme }) => theme.buttons.color};
      background-color: ${({ theme }) => theme.buttons.background};
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    div {
      width: 40%;
      h3 {
        font-size: 1.3rem;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    justify-content: space-around;

    div {
      width: 300px;
      button:hover {
        cursor: pointer;
      }
    }
  }
`;
