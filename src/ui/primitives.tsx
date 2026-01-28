import styled from "@emotion/styled";
import type { ComponentProps, FC } from "react";
import { mediaQuery } from "src/style/mediaQuery";

export const LinkOut: FC<ComponentProps<"a">> = props =>
    <a target="_blank" rel="noopener noreferrer" {...props} />;


export const Columns = styled.div`
    columns: 1;
    ${mediaQuery.large(`
        columns: 2;
    `)}
`;
