import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 50%;
    top: 0;
    bottom: 0;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease;
  }

  &::before {
    background: linear-gradient(to right, hsl(${({ theme }) => theme.colors.color5}), transparent);
    left: 0;
    opacity: ${props => (props.fade === 'fade-left' || props.fade === 'fade-both' ? '1' : '0')};
  }

  &::after {
    background: linear-gradient(to left, hsl(${({ theme }) => theme.colors.color5}), transparent);
    right: 0;
    opacity: ${props => (props.fade === 'fade-right' || props.fade === 'fade-both' ? '1' : '0')};
  }
`;

export { Wrapper };
