import styled from '@emotion/styled';
import { keyframes } from '@emotion/react'
import { theme } from 'src/style/theme';
import { mediaQuery } from 'src/style/mediaQuery';
import type { FC, PropsWithChildren } from 'react';

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

const Wrap = styled.div<{ col?: boolean; }>`
    opacity: 0;
    flex: 1;
    overflow: auto;
    display: flex;
    flex-direction: ${props => props.col ? 'column' : 'row'};
    animation: ${appear} ${theme.anim.speed.slow} ${theme.anim.ease.inOut};
    animation-delay: 0.3s;   
    animation-fill-mode: forwards;
    box-sizing: border-box;
`;
const MaxWidth = styled.div`
    padding: 1rem 2rem;
    margin: 0 auto;
    ${mediaQuery.xlarge(`
       max-width: 1000px
    `)}
`;

export const Content: FC<PropsWithChildren & {
  col?: boolean;
}> = ({ children, col }) => (
  <Wrap col={col}>
    <MaxWidth>
      {children}
    </MaxWidth>
  </Wrap>
)