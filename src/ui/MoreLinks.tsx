import type { FC } from "react";
import styled from '@emotion/styled';
import LinkedInIcon from 'src/assets/linkedin_icon.svg';
import CodepenIcon from 'src/assets/codepen_icon.svg';
import BlogsIcon from 'src/assets/technical_blogs.svg';
import CandEAppsIcon from 'src/assets/c_and_e_apps.png';
import { mediaQuery } from "src/style/mediaQuery";
import { LinkOut } from "./primitives";
import { theme } from "src/style/theme";
import { appear, iterativeDelay } from 'src/style/anim';


const Wrap = styled.div`
    flex: 1;
    display: flex;
    width: 100%;
    flex-direction: column;
    flex-wrap: nowrap;
    box-sizing: border-box;
    gap: .5rem;

    ${mediaQuery.large(`
        flex-direction: row;
        flex-wrap: wrap;
    `)}
`;
const MoreItem = styled.div`
    box-sizing: border-box;
    padding: 1rem;
    flex: 1;
    flex-wrap: wrap;
    display: flex;
    gap: 1rem;
    border-bottom: 1px solid #00000022;
    flex-direction: column;

    opacity: 0;
    animation: ${appear} ${theme.anim.speed.slow} ${theme.anim.ease.inOut};
    animation-fill-mode: forwards;
    ${iterativeDelay(4)}
    
    ${mediaQuery.medium(`
        flex-direction: row;
        align-items: center;
    `)}
    ${mediaQuery.large(`
        min-width: calc(50% - 1rem);
        width: calc(50% - 1rem);
        flex-direction: column;
        border-bottom: none;
    `)}
`;
const LinkWrap = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;
const Description = styled.div`
    flex: 4;
`;
const Logo = styled.img`
    margin: 0 auto;
    width: 6rem;
    opacity: 0.5;
`;
const Title = styled.h4`
    text-align: center;
    margin: .25rem 0;

    a {
        color: ${theme.color.popText};
        font-weight: normal;
        letter-spacing: .25rem;
    }
`;
const CenterLinkOut = styled(LinkOut)`
    display: flex;
    justify-content: center;;
`;

const MoreBlock: FC<{
    icon: string,
    link: string,
    title: string,
    description: string,
}> = ({ icon, link, title, description }) => {
    return (
        <MoreItem>
            <LinkWrap>
                <CenterLinkOut href={link}>
                    <Logo src={icon} />
                </CenterLinkOut>
                <Title>
                    <LinkOut href={link}>{title}</LinkOut>
                </Title>
            </LinkWrap>
            <Description>{description}</Description>
        </MoreItem>
    );
}


export const MoreLinks: FC = () => {
    return (
        <Wrap>
            <MoreBlock
                icon={LinkedInIcon}
                link="https://www.linkedin.com/in/danielftw"
                title="LinkedIn"
                description="Find me on LinkedIn to see my detailed work history, education, and referrals. Work History includes product and feature launches in various positions."
            />
            <MoreBlock
                icon={CandEAppsIcon}
                link="https://cande.app"
                title="Personal Projects"
                description="My wife and I are creators at heart. We've launched a number of web-based tools - some for fun, some because we needed a tool and couldn't find a perfect fit. See them here."
            />
            <MoreBlock
                icon={BlogsIcon}
                link="https://carterembry.com/category/professional-opinions/technical-jargon"
                title="Technical Blogs"
                description="I'm proud to have published at least a few blogs related to React and the NodeJS ecosystem. You can find them here."
            />
            <MoreBlock
                icon={CodepenIcon}
                link="https://codepen.io/slobaum"
                title="CodePen"
                description="Codepen has been a glorious playground for experimentation for years. Some of my pens have garnered over 10k views and hundreds of likes/pins/saves."
            />
        </Wrap>
    );
};
