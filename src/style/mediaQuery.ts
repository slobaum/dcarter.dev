const breakpoints = {
    medium: 400,
    large: 770,
    xlarge: 930,
};
type Breakpoints = typeof breakpoints;
type BreakpointName = keyof Breakpoints;

export const mediaQuery = (Object.keys(breakpoints) as BreakpointName[]).reduce(
    (acc, description) => {
        acc[description] = (styles: string) => `
            @media (min-width: ${breakpoints[description]}px) {
                ${styles}
            }
        `;
        return acc;
    },
    {} as Record<BreakpointName, (styles: string) => string>
);
