import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    ${({ theme }) => css`
        @font-face {
            font-family: 'IBMPlexSans';
            src: url('./assets/fonts/IBMPlexSans-Regular.woff');
            src: url('./assets/fonts/IBMPlexSans-Regular.ttf') format("truetype");
            font-weight: normal;
            font-style: normal;
            font-display: block;
        }

        @font-face {
            font-family: 'IBMPlexSans';
            src: url('./assets/fonts/IBMPlexSans-Medium.woff');
            src: url('./assets/fonts/IBMPlexSans-Medium.ttf') format("truetype");
            font-weight: bold;
            font-style: normal;
            font-display: block;
        }

        body {
            background: ${theme.color.veryLightBlue};
            color: ${theme.color.darkBlueGrey};
            font-family: IBMPlexSans, Arial;
            font-size: ${theme.font.bodySize};
            margin: 0;
        }
    `}
`;

export default GlobalStyles;
