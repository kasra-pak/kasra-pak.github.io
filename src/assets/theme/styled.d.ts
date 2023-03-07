// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    fonts: {
      font1: string;
      font2: string;
      font3: string;
    };
    background: string;
    addTransitionOn: (arrayOfProperties: string[]) => string;
    shadows: {
      shadow1: string;
      shadow2: string;
      shadow3: string;
      shadow4: string;
    };
    colors: {
      color1: string;
      color2: string;
      color3: string;
      color4: string;
      color5: string;
      color6: string;
    };
  }
}
