import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
/* Reset.css v1.0 | 2023 | Thiago's Custom Reset */



html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
 caption,  tfoot,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: "Poppins", sans-serif;
}


/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
    display: block;
}

body {
    line-height: 1;
}

ol, ul {
    list-style: none;
}

blockquote, q {
    quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}



/* Additional modern resets */
*,
*::before,
*::after {
    box-sizing: border-box;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

input, button, textarea, select {
    font: inherit;
}

button {
    cursor: pointer;
}

a {
    text-decoration: none;
    color: inherit;
}

:root {
    --primary-font: 'Arial', sans-serif;
    --secondary-font: 'Georgia', serif;
}

body {
    font-family: var(--primary-font);
    background-color: #f5f5f5;
    color: #333;
    line-height: 1.6;
}






`

export default GlobalStyle;