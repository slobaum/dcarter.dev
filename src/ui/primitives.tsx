import styled from "@emotion/styled";
import type { ComponentProps, FC } from "react";
import { mediaQuery } from "src/style/mediaQuery";

export const LinkOut: FC<ComponentProps<"a">> = props =>
    <a target="_blank" rel="noopener noreferrer" {...props} />;


export const Columns = styled.div<{ $three?: boolean; }>`
    columns: 1;
    ${({ $three }) => !$three ? '' : mediaQuery.medium(`
        columns: 2;
    `)}
    ${({ $three }) => mediaQuery.large(`
        columns: ${$three ? '3' : '2'};
    `)}
`;
