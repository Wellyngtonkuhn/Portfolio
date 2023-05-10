import styled from "styled-components";

export const ServicesSection = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.background_primary};
  padding: 2rem 0;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-bottom: 1rem;

  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 25px;
    font-size: 1rem;
    font-weight: 500;
    line-height: 24.59px;
    font-family: "DM Sans", sans-serif;
    font-weight: 500;
    color: ${({ theme }) => theme.buttons.color};
    background-color: ${({ theme }) => theme.buttons.background};

    //Desktop
    @media screen and (min-width: 1024px) {
      cursor: pointer;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CompaniesSection = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.background_secondary};
  border-radius: 4px;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 24px;
      color: ${({ theme }) => theme.color.title};
    }

    p {
      font-size: 1.125rem;
      font-weight: 400;
      color: ${({ theme }) => theme.color.description};
      padding: 1rem 0;
      text-align: justify;
    }
  }

  div:nth-child(2) {
    ul {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 1rem;

      li {
        display: flex;
        align-items: center;
        gap: 1rem;

        svg {
          width: 32px;
          height: 32px;
          color: ${({ theme }) => theme.color.title};
        }

        img {
          color: ${({ theme }) => theme.color.title};
        }

        h3 {
          font-size: 1.3rem;
          color: ${({ theme }) => theme.color.title};
          font-weight: 500;
        }
      }
    }

    button {
      width: 100%;
      padding: 0.5rem 0;
      border: none;
      border-radius: 25px;
      margin-top: 1rem;
      font-size: 1.125rem;
      font-weight: 500;
      line-height: 24.59px;
      font-family: "DM Sans", sans-serif;
      font-weight: 500;
      color: ${({ theme }) => theme.buttons.color};
      background-color: ${({ theme }) => theme.buttons.background};
    }

    //Tablet
    @media screen and (min-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;

      ul {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1.5rem;
        li {
          gap: 0.3rem;
        }
      }
      button {
        width: 50%;
      }
    }
  }

  // Desktop
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 2rem 3rem;

    div:nth-child(1) {
      flex-basis: 45%;
    }

    div:nth-child(2) {
      flex-basis: 45%;

      ul {
        justify-content: space-between;
      }
      button {
        width: 60%;

        :hover {
          cursor: pointer;
        }
      }
    }
  }
`;

export const FreelancerSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 100%;
      height: 200px;
    }

    h3 {
      font-size: 1.3rem;
      color: ${({ theme }) => theme.color.title};
      font-weight: 500;
      padding: 1rem 0;
    }

    p {
      font-size: 1.1rem;
      color: ${({ theme }) => theme.color.description};
      text-align: justify;
      padding-top: 0.5rem;
    }
  }

  //Tablet
  @media screen and (min-width: 768px) {
    div {
      img {
        height: 350px;
      }

      h3 {
        font-size: 1.4rem;
      }
    }
  }

  //Desktop
  @media screen and (min-width: 1024px) {
    div {
      img {
        width: 75%;
        height: 350px;
      }

      h3 {
        font-size: 1.5rem;
      }
    }
  }
`;
