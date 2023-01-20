import styled from "styled-components";

export const Container = styled.div`
max-width: 500px;
margin: 0 auto;
`;

export const ContainerNewContact = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

margin-top: 3.2rem;

& strong {
  font-size: 2.4rem;
  color: #222;
}

a {
  border: 2px solid #5061fc;
  border-radius: 4px;
  padding: 1rem 1.4rem;
  color: #5061fc;
  font-size: 1.6rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s;

}

& a:hover {
  background-color: #5061fc;
  color: #fff;
}

`;

export const Divider = styled.div`
  height: 2px;
  opacity: 0.2;
  border-radius: 1px;
  background-color: #bcbcbc;
  margin-top: 1.6rem;
`;

export const InputHome = styled.input`
width: 50rem;
height: 5rem;
background: #fff;
border-radius: 2.5rem;
border: 0;
outline: 0;
margin-top: 5.5rem;
padding: 1.5rem;
box-shadow: 0px 4px 10px rgba(0,0,0,0.04);

&::placeholder {
  color: #bcbcbc;
}
`;
