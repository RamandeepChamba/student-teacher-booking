import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    /* COLORS */
    --color-brand: #0496ff;
    --color-brand-light: #4bb3fd;
    --color-brand-dark-1: #027bce;
    --color-brand-dark-2: #00487c;
    --color-brand-gray: #3e6680;
    --color-gray: #6b7280;
    --color-dark: #111827;
    --color-light: #f9fafb;
    --color-light-2: #f3f4f6;
    --color-light-3: #e5e7eb;
    --color-success: #16a34a;
    --color-success-dark: #15803d;
    --color-danger: #dc2626;
      --color-danger-dark: #b91c1c;

    font-size: 62.5%;
 }
 body {
    font-size: 1.6rem;
    font-family: sans-serif;
 }
 *,
 *::before,
 *::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;  
 }
`;
export default GlobalStyles;
