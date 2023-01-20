import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import themeDefault from "../../assets/styles/themes/default";
import EditContact from "../../pages/EditContact/EditContact";
import Home from "../../pages/Home/Home";
import NewContact from "../../pages/NewContact/NewContact";
import Header from "../Header/Header";

import { Container } from "./styles";

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={themeDefault}>
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<NewContact />} />
            <Route path="/edit/:id" element={<EditContact />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
