import styled from "@emotion/styled";
import type { FC } from "react"
import avatar from "src/assets/dcarter_avatar.png";
import { mediaQuery } from "src/style/mediaQuery";

const Avatar = styled.img`
    width: 20rem;
    min-width: 60%;
    max-width: 70%;
    margin: 0 auto 1rem auto;
    border-radius: .5rem;
    display: block;

    ${mediaQuery.medium(`
       min-width: 20rem;
       float: right;
        margin: 0 0 2rem 2rem;
    `)}
`;

export const About: FC = () => {
    return (
        <div>
            <Avatar src={avatar} alt="A photo of Daniel Carter" />
            <p>
                Hi, I'm Daniel. I'm a whiz with JavaScript/Typescript and occasionally take notes in JSON. I've led many teams of software engineers to successful product launches.
            </p>
            <p>
                I'm a designer by education but my craft is software engineering. My obsession with pixel-perfect design spans back to the start of my career. Whether as the designer or simply the implementer of the design, I always treat my craft as if I'm reproducing the work of a master painter. I still love getting my hands into charcoal sketching and pottery. 
            </p>
            <p>
                Early in my career, I found quite fortuitously that there were many opportunities to apply my visual and motion design skills. Some of these early visually-rich projects included:
            </p>
            <ul>
                <li>A web-based video editor backed by PHP+FFMPEG on the server, written completely from the ground up.</li>
                <li>A web-based video markup tool that allowed researchers to leave indicators and notes at specific timestamps</li>
                <li>A web-based image markup tool that enabled thousands of users to provide qualitative feedback on new product research.</li>
                <li>Movement-rich applications before CSS had properly adopted and implemented modern transitions/keyframes. I'm grateful for these huge steps forward in web-motion.</li>
            </ul>
            <p>
                As time has progressed, my abilities as a programmer, mentor, and technical team lead have grown. They've grown so much, as a matter of fact, that I find fewer and fewer opportunities to build the extremely visually-rich applications that I love best. In my early career at Autodesk, I was able to wow stakeholders by demoing ways in which we could increase usability while adding movement and design pops to an otherwise very corporate app. As their needs have progressed, I again find fewer and fewer opportunities to do that which I love best.
            </p>
            <p>
                I have a proven record of leading software projects from concept to delivery. I work well independently or with teams, product managers, designers, QA, customer support, leadership, and more. I drive high-value changes that have direct and immediate user impact.
            </p>
            <p>
                I love modern JavaScript/Typescript, CSS, and visually rich applications most of all, but I'm also an accomplished Python, PHP, REST API, and SQL developer. I have experience with Perl, Java, C#, and Oracle DB.
            </p>
            <p>
                I would love to have an opportunity to make your application beautiful.
            </p>
        </div>
    )
}