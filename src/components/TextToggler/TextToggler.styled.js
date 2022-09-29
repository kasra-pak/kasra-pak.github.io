import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const MainText = styled.p`
  opacity: ${props => (props.showAlter ? '0' : '1')};
  transition: opacity 0.2s ease;
`;

const AlterText = styled.p`
  position: absolute;
  top: 0;
  opacity: ${props => (props.showAlter ? '1' : '0')};
  transition: opacity 0.2s ease;
`;

export { Wrapper, MainText, AlterText };
