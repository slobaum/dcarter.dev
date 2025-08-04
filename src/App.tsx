import { type FC } from 'react';
import { css } from '@linaria/core';
import { styled } from '@linaria/react';

css`
    :global() {
        :root {
            font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
            line-height: 1.5;
            font-weight: 400;

            color-scheme: light dark;
            color: rgba(255, 255, 255, 0.8);
            background-color: #111111;

            font-synthesis: none;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        body {
            overscroll-behavior: contain;
        }
        a {
            text-decoration: none;
        }
    }
`;

const Wrap = styled.div`
    position: fixed;
    top: 0.5px;
    right: 0;
    bottom: 0.5px;
    left: 0;
    display: flex;
    flex-direction: column;
    overflow: auto;
`;

export const App: FC = () => {

  return (
    <Wrap>
      Hello, world.
    </Wrap>
  )
}

