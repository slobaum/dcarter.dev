import type { FC } from "react";
import { Link } from "wouter";
import styled from '@emotion/styled';
import { theme } from "src/style/theme";
import { mediaQuery } from 'src/style/mediaQuery';
import {LinkOut} from "./primitives";

export class Routes {
    static home = "/";
    static about = "/about";
    static more = "/more";
    static personalProjects = "/myprojects";
};

const HeaderNav = styled.nav<{ open?: boolean, atHome?: boolean, }>`
    position: absolute;
    bottom: ${theme.spacing.navHeaderBottomStupidSmall};
    right: ${theme.spacing.marginRightSmall};
    ${mediaQuery.medium(`
       bottom: ${theme.spacing.navHeaderBottomSmall};
    `)}
    ${mediaQuery.large(`
        bottom: ${theme.spacing.navHeaderBottom};
        right: ${theme.spacing.navMarginRight};
    `)}

    a, a:visited {
        float: right;
        white-space: nowrap;
        margin: 5px 15px 0 0;
        border-right: 5px solid ${theme.color.headerLinkText};
        transform: ${props => props.atHome ? 'translateY(200px)' : 'translateY(0)'};
        text-align: right;
        display: block;
        font-size: 1.2em;
        text-shadow: 0 2px 2px rgba(0, 0, 0, 0.6);
        padding: 0px 10px 3px 0;
        text-decoration: none;
        transition: transform ${theme.anim.speed.slow} ${theme.anim.ease.bounce}
            , opacity ${theme.anim.speed.slow} ${theme.anim.ease.inOut};
        opacity: ${props => props.atHome ? '0' : '1'};

        &:nth-of-type(1) {
            transition-delay: .2s;
        }
        &:nth-of-type(2) {
            transition-delay: .4s;
        }
        &:nth-of-type(3) {
            transition-delay: .6s;
        }
    }
    a:hover, a:active {
        border-color: #6b8999;
        text-shadow: 0 2px 3px rgba(0, 0, 0, 0.8);
    }
`;

const HomeNav = styled.nav<{ open?: boolean, atHome?: boolean }>`
    margin: 0 calc(${theme.spacing.marginRightSmall} + 18px) 0 0;
    z-index: 80;
    ${mediaQuery.large(`
        margin: 0 calc(${theme.spacing.marginRight} + 18px) 0 0;
    `)}
    height: 0;
    max-height: 0;
    align-self: flex-end;

    a, a:visited {
        margin: 10px 0;
        white-space: nowrap;
        text-align: right;
        display: block;
        font-size: 1.2em;
        border-right: 5px solid ${theme.color.headerLinkText};
        text-shadow: 0 2px 2px rgba(0, 0, 0, 0.6);
        padding: 0px 10px 3px 0;
        text-decoration: none;
        transition: transform ${theme.anim.speed.slow} ${theme.anim.ease.inOut}, opacity ${theme.anim.speed.slow} ${theme.anim.ease.inOut};
        transform: ${props => props.open && !props.atHome ? (
            'translateY(-1400px)'
        ) : props.open ? (
            'translateY(0)'
        ) : (
            'translateY(-50px)'
        )};
        opacity: ${props => props.open ? '1' : '0'};

        &:nth-of-type(1) {
            transition-delay: .2s;
        }
        &:nth-of-type(2) {
            transition-delay: .4s;
        }
        &:nth-of-type(3) {
            transition-delay: .6s;
        }
    }
    a:hover, a:active {
        border-color: ${theme.color.headerLinkTextActive};
        text-shadow: 0 2px 3px rgba(0, 0, 0, 0.8);
    }
`;

export const Navigation: FC<{
    inHeader?: boolean;
    open?: boolean;
    atHome?: boolean;
}> = ({ inHeader, open, atHome }) => {
    const Wrap = inHeader ? HeaderNav : HomeNav;

    return (
        <Wrap open={open} atHome={atHome}>
            {inHeader && (
                <Link href={Routes.home}>home</Link>
            )}
            <Link href={Routes.about}>
                who is this guy?
            </Link>
            <LinkOut href="https://cande.app">
                projects
            </LinkOut>
            <Link href={Routes.more}>
                links
            </Link>
        </Wrap>
    );
};
