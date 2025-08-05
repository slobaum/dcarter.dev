import { useEffect, useState, type FC } from 'react';
import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { Route, Switch, useRoute } from "wouter";
import { theme } from 'src/style/theme';
import { Navigation, Routes } from 'src/ui/Navigation';

css`
    :global() {
        :root {
            font-family: Arial, Helvetica, Tahoma, sans, sans-serif;
            line-height: 1.5;
            font-weight: 400;

            color-scheme: light dark;
            color: ${theme.color.text};
            background-color: ${theme.color.background};

            font-synthesis: none;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        html, body {
            overscroll-behavior: contain;
        }
        a, a:visited {
            color: ${theme.color.linkText};
            text-decoration: none;
        }
        a:hover, a:active {
            color: ${theme.color.linkTextActive};
        }
    }
`;

const Wrap = styled.div`
    position: fixed;
    top: 0.5px;
    right: 0;
    bottom: 0.5px;
    left: 0;
    display: flex;
    flex-direction: column;
    overflow: auto;
`;

const Header = styled.header<{ open?: boolean; }>`
    margin: 0;
    height: ${props => props.open ? '40%' : '0'};
    background-color: ${theme.color.backgroundDark};
    position: relative;
    overflow: hidden;
    transition: height ${theme.anim.speed.fast} ${theme.anim.ease.inOut};
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
`;

const Name = styled.h1<{ visible: boolean; }>`
    position: absolute;
    color: ${theme.color.popText};
    bottom: ${props => props.visible ? '-.15em' : '-2em'};
    right: ${theme.spacing.nameMarginRight};
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


export const App: FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [match] = useRoute(Routes.home);


    useEffect(() => {
        setOpen(() => true);
    }, []);

    return (
        <Wrap>
            <Header open={open}>
                <Name visible={open}>
                    daniel carter
                </Name>
                <Navigation inHeader open={open} />
            </Header>
            <Navigation open={open} />
            <Switch>
                <Route path={Routes.home}></Route>
                <Route path={Routes.about}>
                    <p>
                        Hi, I'm Daniel. I'm a whiz with JavaScript/Typescript and occasionally take notes in JSON. I've led many teams of software engineers to successful product launches.
                    </p>
                    <p>
                        I have a proven record of leading software projects from concept to delivery. I work well independently or with teams, product managers, designers, QA, customer support, leadership, and more. I drive high-value changes that have direct and immediate user impact.
                    </p>
                    <p>
                        I love modern JavaScript/Typescript and CSS most of all, but I'm also an accomplished Python, PHP, REST API, and SQL developer. I have experience with Perl, Java, C#, and Oracle DB.
                    </p>
                </Route>
                <Route path={Routes.launches}>
                    <p>
                        Features Launches timeline will go here.
                    </p>
                </Route>
            </Switch>
        </Wrap>
    )
}

