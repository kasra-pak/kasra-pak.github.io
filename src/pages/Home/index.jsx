import React from 'react';
import Button from '@/components/Button';

import * as S from './Home.styled';

function Home() {
  return (
    <S.Wrapper>
      <div>
        <S.Title>
          Hi,
          <br />
          I&rsquo;m Kasra
          <br />
          Frontend Developer
        </S.Title>
        <S.Subtitle>
          A 25-year-young software engineer based in Iran. Graduated from the University of Kurdistan. Have a great
          passion for writing clean and maintainable code. Also, enjoy learning new things from new people.
        </S.Subtitle>
        <Button type="button" variant="contained" elevated color="blue">
          my resume
        </Button>
      </div>
      {/* <div class="right-side">Right Side</div> */}
    </S.Wrapper>
  );
}

export default Home;
