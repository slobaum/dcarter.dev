import type { ComponentProps, FC } from "react";

export const LinkOut: FC<ComponentProps<"a">> = props =>
    <a target="_blank" rel="noopener noreferrer" {...props} />;