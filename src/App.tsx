import { ThemeProvider } from "styled-components";
import { Theme } from "./Styles/Theme/DefaultTheme";
import { GlobalStyle } from "./Styles/Global";
import { CartProvider } from "./context/CartContext";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
//import { BuyListProvider } from "./context/BuyListContext";

export function App() {
  return (
    <div>
      <ThemeProvider theme={Theme}>
        <CartProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </CartProvider>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}
