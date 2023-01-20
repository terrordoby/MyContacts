import styled from "styled-components";

export const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.6);
backdrop-filter: blur(3.5px);

display: flex;
align-items: center;
justify-content: center;
`;

export const Container = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  padding: 24px;
  max-width: 45.3rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);


  h1 {
    color: #fc5050;
    font-size: 2.2rem;
    margin-bottom: 8px;
  }

  span {
    font-size: 1.6rem;
    display: block;
    margin-bottom: 3.2rem;
  }
`;

export const ContainerActions = styled.div`
text-align: end;

  button + button {
    margin-left: 8px;
  }

  .btn-outline {
    border: 0;
    background: transparent;
    font-size: 1.6rem;
    color: #bcbcbc;
  }

  .btn-danger {
    color: #fff;
    background-color: #fc5050;
    border-radius: 4px;
    outline: 0;
    border: none;
    padding: 1rem;
  }
`;
