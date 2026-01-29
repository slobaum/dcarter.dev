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

export const iterativeDelay = (
    count: number = 20,
    delay: number = 200,
) => {
    const styles: string[] = [];

    for (let i = 1; i <= count; i++) {
        styles.push(`
            &:nth-of-type(${i}) {
                transition-delay: ${delay * i}ms;
                animation-delay: ${delay * i}ms;
            }
        `);
    }

    return styles.join('');
};

