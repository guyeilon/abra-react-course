import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Assistant:wght@400;700&family=Nunito:wght@200;400;700&family=Quicksand:wght@300;400;500;600;700&family=Roboto:wght@700&display=swap');
  * {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.colors.body};
    color: #1c1c1c;
   font-family: 'Assistant', sans-serif;
    font-size:24px ;
    margin: 0;
  }
  p, ul {
 font-family: Arial;
    font-size: 18px;
    line-height: 1.5;
    color: #1c1c1c;
    white-space: pre-line;
  }

  h1{
    font-family: Courier New;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -0.48px;
  color: #0e1649;
  margin-top: 64px;
  margin-bottom: 64px;



  }

  h2{
        font-family: Arial;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 0.48px;
    color: #1c1c1c;

  }

  h4{
     font-family: Arial;
     text-transform: uppercase;
    font-size: 16px;
    line-height: 1.69;
    color: #1c1c1c;
    margin-top: 0;

  }
  img {
    max-width: 100%;
    padding-bottom: 16px;
}

hr{
    height: 1px;
    align-self: stretch;
    margin-top: 40px;
    margin-bottom: 40px;
    opacity: 0.2;
    background-color: #0e1649;

}

a {
  color:#ff7748

}

`;

export default GlobalStyles;
