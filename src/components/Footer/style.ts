import styled from "styled-components";

export const FooterSection = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.background_primary};
  padding: 2rem 0;
  border-top: 1px solid ${({ theme }) => theme.background_secondary};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;

  div:nth-child(1) {
    h2 {
      font-size: 1.125rem;
      font-weight: 500;
      color: ${(props) => props.theme.color.description};
    }
  }

  div:nth-child(2) {
    ul {
      display: flex;
      gap: 1rem;

      li a {
        color: ${(props) => props.theme.color.description};

        svg {
          font-size: 1.2rem;
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;

    div:nth-child(1) {
      h2 {
        font-size: 1rem;
        font-weight: 500;
        color: ${(props) => props.theme.color.description};
      }
    }

    div:nth-child(2) {
      ul {
        display: flex;
        gap: 1rem;

        li a {
          color: ${(props) => props.theme.color.description};

          svg {
            font-size: 1rem;
          }
        }
      }
    }
  }
`;
