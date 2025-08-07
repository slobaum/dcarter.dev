import { type FC } from 'react';
import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import { Route, Switch } from "wouter";
import { theme } from 'src/style/theme';
import { Routes } from 'src/ui/Navigation';
import { Content } from 'src/ui/Content';
import { Header } from 'src/ui/Header';
import { About } from 'src/ui/About';
import { MoreLinks } from 'src/ui/MoreLinks';
 
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
                <Content col key="about">
                    <About />
                </Content>
            </Route>
            <Route path={Routes.more}>
                <Content key="more">
                    <MoreLinks />
                </Content>
            </Route>
        </Switch>
    </Wrap>
);

