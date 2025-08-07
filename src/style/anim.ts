import { keyframes } from '@emotion/react'

export const appear = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;