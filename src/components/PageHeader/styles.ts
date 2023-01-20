import styled from "styled-components";

export const Container = styled.div`
  max-width: 500px;
  margin: 0 auto 2.4rem auto;

  img {
    transform: rotate(-90deg)
  }

  a {
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 1.6rem;
    text-decoration: none;
    color: #5051fc;
    margin-bottom: 8px;
    font-weight: 700;
  }
`;
