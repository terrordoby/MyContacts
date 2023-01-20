import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;
  margin-top: 6px;
`;

export const ContactDetails = styled.div`
  strong {
    font-size: 1.6rem;
  }

  small {
    color: #5061fc;
    font-size: 1.2rem;
    text-transform: uppercase;
    background-color: #e0e3ff;
    border-radius: 4px;
    padding: 3px 6px;
    font-weight: 700;
  }

  p {
    font-size: 1.4rem;
    color: #bcbcbc;
    margin: 4px 0;
  }

  span {
    color: #bcbcbc;
    font-size: 1.4rem;
  }
`;

export const ContactActions = styled.div`
display: flex;
gap: 8px;

a {
  margin: 0;
}
`;
