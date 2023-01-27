import styled from "styled-components";

export const Container = styled.div`

  .toggleOrderBy {
    display: flex;
    align-items: center;

    font-size: 1.6rem;
    font-weight: 700;
    text-decoration: none;
    color: #5061fc;
    margin-top: 1.6rem;
    border: none;
    background-color: transparent;
  }

  strong {
    margin-right: 8px;
  }

`;

export const Header = styled.div<{orderBy: string}>`
   img {
    transform: ${props => props.orderBy === "asc" ? "rotate(180deg)" : "rotate(0deg)"};
    transition: transform 0.2s ease-in
  }
`;


