import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  height: 100vh;
  background-color: ${(props) => props.theme["background"]};
}

h1{
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: 2rem;
}
p,li{
  /* Text/Regular L */
  font-family: "Roboto";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 26px */
}

h6{
  font-family: 'Baloo 2', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: 130%;
}

strong{
  font-family: 'Baloo 2', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: 130%;
}

h2,input{
  font-family: 'Baloo 2', sans-serif;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
}
h3{
  align-self: stretch;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; 
}
h4{
  color: ${(props) => props.theme["yellow"]}; 

  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 13px */
  text-transform: uppercase;
}

button{
  color: var(${(props) => props.theme["base-text"]}, #574F4D);
  /* Components/Button S */
  font-family: "Roboto";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 19.2px */
  text-transform: uppercase;
}

`;
