import styled from "@emotion/styled";
import type { FC } from "react"
import avatar from "src/assets/dcarter_avatar.png";
import { mediaQuery } from "src/style/mediaQuery";
import { appear, iterativeDelay } from "src/style/anim";
import { theme } from "src/style/theme";
import { Columns, H2, LinkOut } from "src/ui/primitives";

const Avatar = styled.img`
    width: 20rem;
    min-width: 60%;
    max-width: 70%;
    margin: 0 auto 1rem auto;
    border-radius: .5rem;
    display: block;
    opacity: 0;
    animation: ${appear} ${theme.anim.speed.fast} ${theme.anim.ease.inOut};
    animation-delay: 1s;
    animation-fill-mode: forwards;
    position: relative;
    z-index: 20;

    ${mediaQuery.medium(`
        min-width: 20rem;
        float: right;
        margin: 0 0 2rem 2rem;
        top: .5rem;
        right: -.5rem;
        box-shadow: 0 .3rem 1rem #000000cc;
    `)}
`;

const P = styled.p<{ $larger?: boolean; }>`
    padding-left: 1rem;
    ${({ $larger }) => $larger ? 'font-size: 1.2rem' : ''}
`;
const Clear = styled.div`
    clear: both;
`;
const Card = styled.div`
    break-inside: avoid;
    background: ${theme.color.backgroundDark};
    box-sizing: border-box;
    margin-bottom: .5rem;
    color: ${theme.color.text};
    border-left-style: solid;
    border-left-width: 15px;
    border-color: ${theme.color.borderLight};
    border-radius: .2rem;
    overflow: hidden;

    opacity: 0;
    animation: ${appear} ${theme.anim.speed.slow} ${theme.anim.ease.inOut};
    animation-fill-mode: forwards;
    ${iterativeDelay()}

    > p {
        padding: 0 1rem 1rem 2rem;
    }
`;
const SubHeader = styled.h3`
    background: ${theme.color.borderDark};
    color: ${theme.color.text};
    padding: .2rem 1rem;
    margin: 0;
`;
const List = styled.ul`
    list-style-type: disc;
    padding: 0 .5rem 1rem 3rem;
`;
const Strong = styled.strong`
    color: ${theme.color.linkTextActive};
`;

export const About: FC = () => {
    return (
        <div>   
            <Avatar src={avatar} alt="A photo of Daniel Carter" />

            <H2>About me</H2>
            <P>
                I'm Daniel, a designer-by-training turned software engineer who lives for pixel-perfect, motion-rich experiences. I blend a deep appreciation for fine art (charcoal sketching, pottery) with a passion for modern web development, treating every UI as a canvas and every line of code as a brushstroke.
            </P>
            <P>
                I'm also a proven full-stack developer with extensive experience leading engineering teams to ship high-impact products. My primary focus today is building robust, scalable systems with performant web front-end applications, utilizing and contributing to backend services and APIs.
            </P>

            <H2>Technical skill set</H2>
            <Clear />
            <Columns $three $padding="0 0 0 1rem">
                <Card>
                    <SubHeader>Front-end</SubHeader>
                    <List>
                        <li>JavaScript / TypeScript (ES2022+)</li>
                        <li>Modern CSS (Flexbox, Grid, animations, transitions)</li>
                        <li>Framework-agnostic reusable component architecture (custom elements, vanilla JS)</li>
                        <li>State management patterns, performance optimization</li>
                        <li>React, React Hooks, Hook State Management, Redux, CSS-in-JS</li>
                        <li>Web workers, asynchronous processes, concurrency</li>
                    </List>
                </Card>
                <Card>
                    <SubHeader>Design & Motion</SubHeader>
                    <List>
                        <li>Design Systems (Storybook)</li>
                        <li>Resuable components for consistency</li>
                        <li>Pixel-perfect UI</li>
                        <li>Rapid interactive prototypes</li>
                        <li>Motion design</li>
                        <li>Visual storytelling</li>
                    </List>
                </Card>
                <Card>
                    <SubHeader>Technical Team Leadership</SubHeader>
                    <List>
                        <li>Cross-discipline stakeholder communication</li>
                        <li>Translating product ideas to technical requirements</li>
                        <li>Task breakdown and timeline forecasting</li>
                        <li>Ongoing progress reporting</li>
                    </List>
                </Card>
                <Card>
                    <SubHeader>Back-end</SubHeader>
                    <List>
                        <li>Node.js (scripting, Express)</li>
                        <li>Python (Django)</li>
                        <li>PHP (Laravel, custom MVC)</li>
                        <li>RESTful API design</li>
                        <li>Authentication & authorization</li>
                        <li>SQL (PostgreSQL, MySQL)</li>
                        <li>NoSQL (MongoDB, Redis, IndexedDB)</li>
                        <li>Query optimization, schema design, migrations</li>
                        <li>Multithreading, concurrency</li>
                    </List>
                </Card>
                <Card>
                    <SubHeader>Testing & Quality</SubHeader>
                    <List>
                        <li>Unit, integration, and end-to-end testing (Jest, React Testing Library, Cypress, unittest)</li>
                        <li>LLM / AI test writing automation</li>
                        <li>Automated linting, type checking, code coverage enforcement</li>
                        <li>Software release management</li>
                        <li>SEMVER / version incrementation enforcement</li>
                    </List>
                </Card>
                <Card>
                    <SubHeader>Infrastructure</SubHeader>
                    <List>
                        <li>Docker & container basics</li>
                        <li>CI/CD pipelines (Jenkins, Vercel)</li>
                        <li>Groovy for Jenkins pipeline scripting</li>
                        <li>Monitoring & logging (Datadog, New Relic)</li>
                    </List>
                </Card>
            </Columns>

            <H2>Representative projects</H2>
            <Columns $padding="0 0 0 1rem">
                <Card>
                    <SubHeader>Table-to-Calendar View</SubHeader>
                    <P>Worked with platform team to co-develop and implement a reusable calendar component with cross-organizational impact. This introduced a new paradigm in visualizing upcoming date-driven actions.</P>
                </Card>
                <Card>
                    <SubHeader>Migrated web build systems</SubHeader>
                    <P>From Create-React-App to a fully custom Webpack + Babel + Jest configuration. Added custom Typescript, ESlint, and Jest configurations, documenting new systems for team adoption.</P>
                </Card>
                <Card>
                    <SubHeader>React-based Components</SubHeader>
                    <P>Created reusable UI primitives (uploaders, modals, form controls) that integrate cleanly in React-based environments for cross-organizational impact.</P>
                </Card>
                <Card>
                    <SubHeader>Replaced monolithic legacy app with React + Redux SPA</SubHeader>
                    <P>Powered exclusively by a REST API, developed new API capabilities in Python/Django. Migrated functionality from Backbone Marionette + SASS to React, Redux, React-Router. Created new architectural patterns to decrease code coupling and increase development speed. Fully unit tested via Jasmine + Enzyme.</P>
                </Card>
                <Card>
                    <SubHeader>Developed an import system that was previously push-only</SubHeader>
                    <P>This was a hackathon project adopted into the production environment. I demonstrated that our data federation app could allow search + import to change the paradigm of data management from a push to a pull system.</P>
                </Card>
                <Card>
                    <SubHeader>Zero-Framework Component Library</SubHeader>
                    <P>Created reusable UI primitives (typeaheads, modals, form controls) that integrate cleanly into Vanilla JS front-end applications.</P>
                </Card>
                <Card>
                    <SubHeader>Custom Video Editing Platform</SubHeader>
                    <P>Designed and implemented a full-stack solution using PHP + FFmpeg for server-side processing, with a UI for timeline editing and export controls.</P>
                </Card>
                <Card>
                    <SubHeader>Research Video Annotation Tool</SubHeader>
                    <P>Built a timestamp-based markup system exposing a REST API for storing annotations, coupled with a lightweight front-end for real-time playback and note entry.</P>
                </Card>
                <Card>
                    <SubHeader>Legacy Motion Applications</SubHeader>
                    <P>Engineered pre-CSS transition effects using JavaScript animation loops, later refactored to modern CSS where possible for performance gains.</P>
                </Card>
            </Columns>
            <P>
                <LinkOut href="https://cande.app">Personal side projects continue to explore emerging front-end patterns and performance tuning techniques.</LinkOut>
            </P>

            <H2>Leadership &amp; collaboration</H2>
            <List>
                <li><Strong>Engineering Tech Lead</Strong> - Led cross-functional squads (front-end, back-end, QA) from concept through production, ensuring delivery timelines and quality standards.</li>
                <li><Strong>Mentorship</Strong> - Onboarded junior engineers, instituted code-review and unit test best practices, and promoted a culture of continuous learning and technical excellence.</li>
                <li><Strong>Stakeholder Communication</Strong> - Translated business requirements into technical specifications, presented architectural roadmaps, and demonstrated prototypes that align with product goals.</li>
                <li><Strong>Engineering Individual Contributions</Strong> - Primary developer for major projects while implementing and enforced unit test best practices as well as code coverage. Maintained &gt; 90% unit test coverage on a React + Typescript web application.</li>
            </List>

            <H2>What I Bring to Your Team</H2>
            <List>
                <li><Strong>End-to-End Delivery</Strong> - Ability to design, develop, test, and deploy complete product features across the stack.</li>
                <li><Strong>Scalable Architecture</Strong> - Experience building web applications that handle high traffic, large data volumes, and evolving business logic.</li>
                <li><Strong>Technical Depth & Breadth</Strong> - Strong command of both front-end and back-end technologies, plus a pragmatic approach to choosing the right tool for each problem.</li>
                <li><Strong>Leadership & Ownership</Strong> - Proven track record of guiding teams, improving processes, and driving measurable impact on user experience and business metrics.</li>
            </List>

            <H2>Get in Touch</H2>
            <P $larger>
                I'm excited to contribute my front-end leaning, full-stack expertise to challenging projects that demand reliability, scalability, and clean architecture.
            </P>
            <P $larger>
                Feel free to <LinkOut href="https://www.linkedin.com/in/danielftw">reach out on LinkedIn</LinkOut> to discuss how I can help turn your product vision into a robust, production-ready solution.
            </P>
        </div>
    )
}
