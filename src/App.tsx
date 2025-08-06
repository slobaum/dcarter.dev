import { type FC } from 'react';
import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import { Route, Switch } from "wouter";
import { theme } from 'src/style/theme';
import { Routes } from 'src/ui/Navigation';
import { Content } from './ui/Content';
import { Timeline } from 'src/ui/TimelineContent';
import { Header } from './ui/Header';
 
const globalStyles = css`
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
    body {
        overscroll-behavior: contain;
    }
    a, a:visited {
        color: ${theme.color.linkText};
        text-decoration: none;
    }
    a:hover, a:active {
        color: ${theme.color.linkTextActive};
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

export const App: FC = () => (
    <Wrap>
        <Global styles={globalStyles} />
        <Header />
        <Switch>
            <Route path={Routes.about}>
                <Content col>
                    <p>
                        Hi, I'm Daniel. I'm a whiz with JavaScript/Typescript and occasionally take notes in JSON. I've led many teams of software engineers to successful product launches.
                    </p>
                    <p>
                        I have a proven record of leading software projects from concept to delivery. I work well independently or with teams, product managers, designers, QA, customer support, leadership, and more. I drive high-value changes that have direct and immediate user impact.
                    </p>
                    <p>
                        I love modern JavaScript/Typescript and CSS most of all, but I'm also an accomplished Python, PHP, REST API, and SQL developer. I have experience with Perl, Java, C#, and Oracle DB.
                    </p>
                </Content>
            </Route>
            <Route path={Routes.launches}>
                <Content>
                    <Timeline />
                </Content>
            </Route>
        </Switch>
    </Wrap>
);

