import { useEffect, useState, type FC } from "react";
import styled from "@emotion/styled";
import { useRoute } from "wouter";
import { Navigation, Routes } from 'src/ui/Navigation';
import { mediaQuery } from 'src/style/mediaQuery';
import { theme } from "src/style/theme";

const HeaderWrap = styled.header<{ open?: boolean; atHome?: boolean; }>`
    margin: 0;
    background-color: ${theme.color.backgroundDark};
    position: relative;
    overflow: hidden;
    transition: height ${theme.anim.speed.fast} ${theme.anim.ease.inOut}, min-height ${theme.anim.speed.fast} ${theme.anim.ease.inOut};
    border-bottom: 1px solid ${theme.color.borderLight};
    z-index: 10;
    &:after {
        /* second border */
        position: absolute;
        content: '';
        border-bottom: 1px solid ${theme.color.borderDark};
        height: 0;
        overflow: hidden;
        bottom: 0;
        width: 100%;
    }
    height: ${props => props.open && props.atHome ? (
        '40vh'
    ) : props.open ? (
        '12rem'
    ) : (
        '0'
    )};
    min-height: ${props => props.open && props.atHome ? (
        '40vh'
    ) : props.open ? (
        '12rem'
    ) : (
        '0'
    )};
    ${props => props.open && !props.atHome ? mediaQuery.medium(`
        height: 9rem;
        min-height: 9rem;
    `) : ''}
    ${props => props.open && !props.atHome ? mediaQuery.large(`
        height: 7rem;
        min-height: 7rem;
    `) : ''}
`;

const Name = styled.h1<{ visible: boolean; }>`
    position: absolute;
    color: ${theme.color.popText};
    bottom: ${props => props.visible ? '-.15em' : '-2em'};
    right: ${theme.spacing.marginRightSmall};
    margin: 0;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
    letter-spacing: .13em;
    font-size: 3.2em;
    line-height: 0.8em;
    font-family: 'Ubuntu';
    text-align: right;
    transition: bottom ${theme.anim.speed.slow} ${theme.anim.ease.bounce};
    transition-delay: ${theme.anim.speed.fast};
    z-index: 1;
    ${mediaQuery.large(`
        right: ${theme.spacing.marginRight};
    `)}
    &:before {
        /* shadow */
        z-index: -1;
        position: absolute;
        bottom: 0px;
        right: 40px;
        width: 200px;
        height: 0;
        background-color: ${theme.color.backgroundDarker};
        content: '';
        border-radius: 100px;
        box-shadow: 0 0 100px 40px ${theme.color.backgroundDarker};
        transform: rotate(-8deg);
    }
`;

export const Header: FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [match] = useRoute(Routes.home);
    const atHome = !!match;

    useEffect(() => {
        setTimeout(() => {
            setOpen(() => true);
        }, 1000)
    }, []);

    return (
        <>
            <HeaderWrap open={open} atHome={atHome}>
                <Name visible={open}>
                    daniel carter
                </Name>
                <Navigation inHeader open={open} atHome={atHome} />
            </HeaderWrap>
            <Navigation open={open} atHome={atHome} />
        </>
    )
};
