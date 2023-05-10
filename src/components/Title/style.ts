import styled from "styled-components";

export const TitleSection = styled.section`
width: 100%;
background-color: ${({ theme }) => theme.background_primary};
padding: 2.375rem 0;

  h2 {
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 40px;
    color: ${({ theme }) => theme.color.title};
    text-align: center;
  }
`;
