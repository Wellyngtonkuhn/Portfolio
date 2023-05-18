import styled from "styled-components";

export const ContactSection = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.background_primary};
  padding: 2rem 0;
`;

export const Content = styled.div`
  width: 100%;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    label {
      width: 100%;
      font-size: 1.1rem;
      font-weight: 500;
      color: ${({ theme }) => theme.color.title};

      p {
        color: #d22367;
        font-weight: 400;
      }
    }

    input {
      width: 100%;
      padding: 0.6rem;
      color: ${({ theme }) => theme.color.description};
      font-size: 1rem;
      font-weight: 500;
      font-family: "DM Sans", sans-serif;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid ${({ theme }) => theme.color.description};

      outline: none;
    }

    select {
      width: 100%;
      padding: 0.6rem;
      font-size: 1rem;
      font-weight: 500;
      color: ${({ theme }) => theme.color.description};
      font-family: "DM Sans", sans-serif;
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.color.description};
      margin-top: 10px;
    }

    textarea {
      width: 100%;
      height: 6rem;
      padding: 0.6rem;
      color: ${({ theme }) => theme.color.description};
      font-size: 1rem;
      font-weight: 500;
      font-family: "DM Sans", sans-serif;
      outline: none;
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.color.description};
      margin-top: 10px;
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

    //Desktop
    @media screen and (min-width: 1024px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-items: center;

      label {
        width: 35%;
        display: flex;
        flex-direction: column;
      }

      input {
        width: 100%;
      }

      textarea {
        width: 100%;
        height: 6rem;
      }

      button {
        width: 35%;

        :hover {
          cursor: pointer;
        }
      }
    }
  }
`;
