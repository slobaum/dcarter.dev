import { useMemo, type FC } from "react";
import styled from '@emotion/styled';
import { theme } from 'src/style/theme';
import { Columns, LinkOut } from "src/ui/primitives";
import { appear, iterativeDelay } from 'src/style/anim';

const Wrap = styled.div`
    padding-bottom: 2rem;
`;
const Headline = styled.h2`
    text-align: center;
`;
const SubHeadline = styled.h3`
    text-align: center;
    margin-bottom: 3rem;
    color: ${theme.color.popText};
    small {
        display: block;
        color: ${theme.color.text};
    }
`;
const Quote = styled.blockquote`
    display: block;
    background: ${theme.color.backgroundDark};
    padding: 15px 20px 15px 45px;
    margin: 0 0 20px;
    position: relative;
    font-size: 1rem;
    line-height: 1.5rem;
    color: ${theme.color.text};
    border-left-style: solid;
    border-left-width: 15px;
    border-color: ${theme.color.borderLight};
    break-inside: avoid;
    border-radius: .2rem;

    opacity: 0;
    animation: ${appear} ${theme.anim.speed.slow} ${theme.anim.ease.inOut};
    animation-fill-mode: forwards;
    ${iterativeDelay()}

    &::before {
        content: "“";
        font-size: 8rem;
        font-weight: bold;
        color: ${theme.color.popText};
        position: absolute;
        left: -1.1rem;
        top: 1.6rem;
    }
`;
const Cite = styled.cite`
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 1rem;
    line-height: 1.25rem;
    font-style: none;
    font-weight: bold;
    margin-top: .7rem;
    &::before {
        display: block;
        content: "❯";
        font-size: 1.1rem;
        padding-right: .5rem;
        color: ${theme.color.popText};
        font-style: normal;
        position: relative;
        top: -.15rem;
    }
`;
const Rel = styled.small`
    margin-top: .8rem;
    font-style: italic;
    text-align: right;
    display: block;
    line-height: 1.2rem;
    font-size: .9rem;
    padding-left: 30%;
    box-sizing: border-box;
`;

const shuffleArray = <T, >(array: T[]) => {
    // fischer-yates algorithm for shuffling
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

const references: Array<{
    text: string[],
    source: string,
    rel: string,
    linkedin: string,
}> = [
    {
        text: [
            "I worked closely with Daniel as his manager, and he's an exceptional engineer who consistently delivers impact in complex, high-pressure environments.",
            "As his manager, I came to deeply value how resilient, dedicated, and trusted Daniel is, especially when things get difficult. He proactively engages in hard conversations constructively and helps teams move forward with clarity and confidence. His presence raises both the quality of execution and the strength of collaboration around him.",
            "Daniel is also a natural mentor and technical leader. He shares knowledge generously, supports the growth of others, and leads by example. His impact extends beyond what he delivers individually. He leaves teams stronger and better positioned for the future.",
            "I would highly recommend Daniel to any organization looking for someone who combines technical excellence, strong execution, and genuine leadership.",
        ],
        source: "Ross Meltz",
        rel: "Ross was my direct manager for 3 years on the Autodesk Forms Team",
        linkedin: "rmeltz",
    },
    {
        text: [
            "I worked on the same team as Daniel at Autodesk, and I strongly believe he would bring significant value to any engineering team. He holds both himself and his teammates to a high engineering standard, not only through the code he writes but also through his thoughtful and thorough code reviews. His technical abilities in frontend web development are extensive, and he communicates complex technical concepts clearly and effectively.",
            "I was consistently impressed by his velocity, communication, and professionalism. He approaches all technical work, including the non-glamorous tasks, thoroughly, thoughtfully, and swiftly. It was an absolute pleasure working with Daniel, and I highly recommend him.",
        ],
        source: "Cory Wolnewitz",
        rel: "Cory was a manager on my team, the Autodesk Forms Team",
        linkedin: "cory-wolnewitz",
    },
    {
        text: [
            "Daniel doesn't shy away from big problems, whatever is the most important work, he'll get it done. He's also one of those engineers thats so productive he'll throw in a \"oh yeah I fixed this too.\" I couldn't recommend Daniel more wholeheartedly!",
        ],
        source: "Chuck Pinkert",
        rel: "Chuck was my direct manager on the Autodesk Forms Team",
        linkedin: "chuckpinkert",
    },
    {
        text: [
            'I worked with Daniel on the Autodesk Forms team, and he always impress me with his talent for web development. He is a smart, insightful, and proactive teammate who is also incredibly supportive. Daniel has a rare ability to solve complex technical challenges while ensuring everyone on the team feels heard and empowered. It was a true pleasure working with him, and I would highly recommend Daniel to anyone looking for a strong Frontend Team Lead',
        ],
        source: "Guohao Yan",
        rel: "Guohao and I worked together on the Autodesk Forms Web Team on a daily basis",
        linkedin: "guohao-yan",
    },
    {
        text: [
            "Daniel is one of the best engineers I've worked with as a designer. As my engineering counterpart on several projects at Autodesk, Daniel was a true collaborator in solving user problems together. His insights on the designs were smart and helpful. He pushed back on design decisions where he had a different point of view, which ultimately led to the best customer outcomes. He took challenging designs and came up with creative ways to implement them. He was what I'd expect from an ideal engineering partner in a prod dev team of PM's and Designers. I highly recommend him as an engineering partner in any project!",
        ],
        source: "Rohan Singh",
        rel: "Rohan was the designer on my team for 2 years, the Autodesk Data Federation Team",
        linkedin: "rohansingh1712",
    },
    {
        text: [
            "I had the pleasure of working with Daniel, and I can confidently say he is one of the most thorough and reliable engineers I've worked with. Daniel brings a rare combination of deep technical expertise, strong ownership, and genuine care for the quality of his work. He approaches every task thoughtfully, makes sure nothing is overlooked, and consistently delivers with a high standard.",
            "Beyond his technical skills, Daniel is a great collaborator. He communicates clearly, is open to feedback, and always looks for the best solution rather than the easiest one. His professionalism, attention to detail, and commitment make him someone you can truly trust on complex projects.",
            "Any team would be lucky to have Daniel, and I wholeheartedly recommend him.",
        ],
        source: "Leah Friedberg",
        rel: "Leah and I collaborated to integrate and co-develop a Platform Component for reuse across the organization. She was a platform designer and I was on the Autodesk Forms Team",
        linkedin: "leahfriedbergdesign",
    },
    {
        text: [
            "Daniel is a fantastic developer and leader. He has a lot of excellent qualities, but what most sets him apart is his attention to both the technical and human side of the tools we created. He's the type of developer that never loses sight of the purpose and use of products he builds. As a result, he brings fantastic insights from a technical, UX, and product angle to whatever he touches. He could identify how technical constraints and UX designs would intersect early on in projects and produce creative solutions. Daniel is wonderful combination of thorough, thoughtful, and fast. I strongly recommend him.",
        ],
        source: "Joseph Kappes",
        rel: "Joe was a Product Manager on my team, the Autodesk Forms Team",
        linkedin: "joseph-kappes-1651abb2",
    },
    {
        text: [
            "Daniel is one of the most exceptional web engineers I've had the privilege of working with during our time at Autodesk—and he is genuinely one of the best colleagues and collaborators I've known.",
            "Daniel is deeply skilled in his craft. He brings a rare combination of strong engineering fundamentals and an excellent eye for visual design, which makes working with him incredibly seamless. He doesn't just build things that work—he builds things that look right, feel right, and make sense for the user.",
            "What truly sets Daniel apart, though, is his emotional intelligence. He's one of those rare engineering gems who leads with empathy and curiosity. He actively seeks to understand user concerns and needs, communicates clearly and thoughtfully across functions, and consistently elevates conversations rather than complicating them. He's a natural collaborator.",
            "Daniel also has an exceptional ability to rapidly put together working prototypes during feature discussions. This skill alone made decision-making faster, more concrete, and more productive—ideas didn't stay abstract for long when Daniel was involved. His work helped teams align quickly and move forward with confidence.",
            "Daniel is an asset to any team, not only because of his technical excellence, but because he is a genuinely good human—thoughtful, collaborative, and grounded— which make building things with him a much more pleasant and productive experience. Any organization would be lucky to have him.",
            "I would absolutely recommend Daniel without hesitation.",
        ],
        source: "Francesca Chua",
        rel: "Fran was the primary designer for the Autodesk Forms team, we worked together for 4 years",
        linkedin: "francescachua",
    }
]

export const References: FC = () => {
    const randomizedRefs = useMemo(() => shuffleArray(references), []);

    return (
        <Wrap>
            <Headline>
                Why work with me?
            </Headline>
            <SubHeadline>
                Let my references answer that question.
                <small>
                    References were copied directly from my <LinkOut href="https://www.linkedin.com/in/danielftw#:~:text=Recommendations">LinkedIn profile</LinkOut>.
                </small>
            </SubHeadline>
            <Columns>
                {randomizedRefs.map(({ text, source, rel, linkedin }) => (
                    <Quote key={`${source}-${rel}`}>
                        {text.map(content => (<p key={content}>{content}</p>))}
                        <LinkOut href={`https://www.linkedin.com/in/${linkedin}`}>
                            <Cite>
                                {source}
                            </Cite>
                            <Rel>{rel}</Rel>
                        </LinkOut>
                    </Quote>
                ))}
            </Columns>
        </Wrap>
    )
};
