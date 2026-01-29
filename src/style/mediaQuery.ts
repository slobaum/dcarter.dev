const breakpoints = {
    medium: 650,
    large: 850,
    xlarge: 1000,
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
