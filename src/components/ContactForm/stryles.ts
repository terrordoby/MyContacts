import styled from "styled-components";

export const Container = styled.form`

display: flex;
flex-direction: column;
gap: 1.6rem;

 & .button--newContact {
  width: 100%;
  background-color: #5061fc;
  border: 0;
  border-radius: 4px;
  color: #fff;
  padding: 1.6rem;
  font-weight: 700;
  font-size: 1.6rem;
  transition: all 0.2s ease-in;

  &:hover {
   background-color: #6674F4;
  }

  &[disabled] {
    background: #ccc;
    cursor: default;
  }
 }
`;

export const FormGroup = styled.div`
`;


