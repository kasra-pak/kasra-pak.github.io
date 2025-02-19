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
          I&apos;m a software engineer, Graduated from the
          University of Kurdistan. My attention to detail motivates me to
          enhance what users see (UI) and what developers perceive (code). I
          also enjoy learning new things from new folks.
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
