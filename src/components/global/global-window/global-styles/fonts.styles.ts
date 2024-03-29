import { css } from 'styled-components';

import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import ms_sans_serif_nonpixeled from './fonts/ms_sans_serif_bold_rus.woff2';

const fontsDefault =  css`
@font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif_rus';
    src: url('${ms_sans_serif_nonpixeled}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif_rus';
    src: url('${ms_sans_serif_nonpixeled}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
`;

export default fontsDefault;