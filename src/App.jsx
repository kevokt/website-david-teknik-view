import { Box, Button, useColorModeValue } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import Header from "./components/Navbar/Header";
import ClientPage from "./pages/ClientPage";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
      <Box minHeight={"100vh"}>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/clients" element={<ClientPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Box>
    </>
  );
}

export default App;
