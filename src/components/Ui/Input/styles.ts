import styled, { css } from "styled-components";

export const InputStyle = styled.input<{error: boolean | undefined}>`
width: 100%;
height: 5.2rem;
background: #fff;
border-radius:4px;
border: 0;
outline: 0;
padding: 1.6rem;
box-shadow: 0px 4px 10px rgba(0,0,0,0.04);
appearance: none;

&::placeholder{
  color: #bcbcbc;
}

&:focus {
  border: 2px solid #5061fc;
}

${(props) => props.error &&  css`
  color: #FC5050;
  border: 2px solid #FC5050 !important;
`}

`;

