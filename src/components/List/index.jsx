import React from 'react';

import { Wrapper } from './List.styled';

function List({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default List;
