import styled from "@emotion/styled";
import type { ComponentProps, FC } from "react";
import { mediaQuery } from "src/style/mediaQuery";
import { theme } from "src/style/theme";

export const LinkOut: FC<ComponentProps<"a">> = props =>
    <a target="_blank" rel="noopener noreferrer" {...props} />;


export const Columns = styled.div<{ $three?: boolean; $padding?: string; }>`
    columns: 1;
    ${({ $padding }) => $padding ? `padding: ${$padding};` : ''}
    ${({ $three }) => !$three ? '' : mediaQuery.medium(`
        columns: 2;
    `)}
    ${({ $three }) => mediaQuery.large(`
        columns: ${$three ? '3' : '2'};
    `)}
`;

export const H2 = styled.h2`
    color: ${theme.color.popText};
    background: ${theme.color.backgroundDark};
    padding-left: 1rem;
    border-radius: .2rem;
    position: sticky;
    top: 0;
    z-index: 10;
    border-bottom: 3px solid ${theme.color.borderLight};
    > small {
        opacity: 0.5;
        font-weight: normal;
    }
`;
