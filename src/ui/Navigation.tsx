import { styled } from "@linaria/react";
import type { FC } from "react";
import { Link } from "wouter";
import { theme } from "src/style/theme";

export enum Routes {
    home = "/",
    about = "/about",
    launches = "/launches",
};

const HeaderNav = styled.nav<{ open?: boolean, atHome?: boolean, }>`
    position: absolute;
    bottom: 10px;
    right: 500px;
    a {
        float: right;
        margin: 5px 15px 0 0;
        transform: ${props => props.atHome ? 'translateY(200px)' : 'translateY(0)'};
        transition: transform ${theme.anim.speed.slow} ${theme.anim.ease.bounce};
    }
`;

const HomeNav = styled.nav<{ open?: boolean, atHome?: boolean }>`
    margin: 1em calc(${theme.spacing.nameMarginRight} + 18px) 0 0;
    z-index: 8;
    float: right;
    a, a:visited {
        margin: 10px 0;
        text-align: right;
        display: block;
        font-size: 1.2em;
        border-right: 5px solid ${theme.color.headerLinkText};
        text-shadow: 0 2px 2px rgba(0, 0, 0, 0.6);
        padding: 0px 10px 3px 0;
        text-decoration: none;
        transition: transform ${theme.anim.speed.slow} ${theme.anim.ease.inOut}, opacity ${theme.anim.speed.slow} ${theme.anim.ease.inOut};
        transform: ${props => props.open ? 'translateY(0)' : 'translateY(-50px)'};
        opacity: ${props => props.open ? '1' : '0'};

        &:nth-child(0) {
            transition-delay: .2s;
        }
        &:nth-child(1) {
            transition-delay: .4s;
        }
        &:nth-child(2) {
            transition-delay: .6s;
        }
        &:nth-child(3) {
            transition-delay: .8s;
        }
        &:nth-child(4) {
            transition-delay: 1s;
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
            <Link href={Routes.launches}>
                featured launches
            </Link>
            <a href='https://cande.app' target="_blank" rel="noopener noreferrer">
                personal projects
            </a>
            <a href='https://www.linkedin.com/in/danielftw' target='_blank' rel="noopener noreferrer">
                linkedin
            </a>
        </Wrap>
    );
};
