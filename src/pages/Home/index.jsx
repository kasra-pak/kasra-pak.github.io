import React from 'react';
import Button from '@/components/Button';

import { Wrapper, Title, Subtitle } from './Home.styled';

function Home() {
  return (
    <Wrapper>
      <div>
        <Title>
          Hi,
          <br />
          I&rsquo;m Kasra
          <br />
          Frontend Developer
        </Title>
        <Subtitle>
          A 25-year-young software engineer based in Iran. Graduated from the University of Kurdistan. Have a great
          passion for writing clean and maintainable code. Also, enjoy learning new things from new people.
        </Subtitle>
        <Button type="button" variant="contained" elevated color="blue">
          my resume
        </Button>
      </div>
      {/* <div class="right-side">Right Side</div> */}
    </Wrapper>
  );
}

export default Home;
