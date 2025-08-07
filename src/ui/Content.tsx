import styled from '@emotion/styled';
import { keyframes } from '@emotion/react'
import { theme } from 'src/style/theme';

const appear = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Content = styled.div<{ col?: boolean; }>`
    opacity: 0;
    flex: 1;
    padding: 1rem 2rem;
    overflow: auto;
    display: flex;
    max-width: 1000px;
    margin: 0 auto;
    flex-direction: ${props => props.col ? 'column' : 'row'};
    animation: ${appear} ${theme.anim.speed.slow} ${theme.anim.ease.inOut};
    animation-delay: 0.3s;
    animation-fill-mode: forwards;
`;
