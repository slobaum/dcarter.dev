import { useMemo, type FC } from "react";
import styled from '@emotion/styled';
import { theme } from 'src/style/theme';
import { LinkOut } from "src/ui/primitives";
import { mediaQuery } from "src/style/mediaQuery";

const Wrap = styled.div`
    padding-bottom: 2rem;
`;
const Headline = styled.h2`
    text-align: center;
    color: ${theme.color.popText}
`;
const SubHeadline = styled.h3`
    text-align: center;
    margin-bottom: 3rem;
    small {
        display: block;
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
    &::before {
        display: block;
        content: "❯";
        font-size: 1.5rem;
        padding-right: .5rem;
        color: ${theme.color.popText};
        font-style: normal;
    }
`;
const CiteContent = styled.div`
    text-align: left;
    span {
        font-style: italic;
        display: block;
        font-weight: normal;
    }
`;
const Columns = styled.div`
    columns: 1;
    ${mediaQuery.large(`
        columns: 2;
    `)}
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
}> = [
    {
        text: [
            "I worked closely with Daniel as his manager, and he's an exceptional engineer who consistently delivers impact in complex, high-pressure environments.",
            "As his manager, I came to deeply value how resilient, dedicated, and trusted Daniel is, especially when things get difficult. He proactively engages in hard conversations constructively and helps teams move forward with clarity and confidence. His presence raises both the quality of execution and the strength of collaboration around him.",
            "Daniel is also a natural mentor and technical leader. He shares knowledge generously, supports the growth of others, and leads by example. His impact extends beyond what he delivers individually. He leaves teams stronger and better positioned for the future.",
            "I would highly recommend Daniel to any organization looking for someone who combines technical excellence, strong execution, and genuine leadership.",
        ],
        source: "Ross Meltz",
        rel: "Direct Manager @ Autodesk",
    },
    {
        text: [
            "I worked on the same team as Daniel at Autodesk, and I strongly believe he would bring significant value to any engineering team. He holds both himself and his teammates to a high engineering standard, not only through the code he writes but also through his thoughtful and thorough code reviews. His technical abilities in frontend web development are extensive, and he communicates complex technical concepts clearly and effectively.",
            "I was consistently impressed by his velocity, communication, and professionalism. He approaches all technical work, including the non-glamorous tasks, thoroughly, thoughtfully, and swiftly. It was an absolute pleasure working with Daniel, and I highly recommend him.",
        ],
        source: "Cory Wolnewitz",
        rel: "Manager @ Autodesk",
    },
    {
        text: [
            "Daniel doesn't shy away from big problems, whatever is the most important work, he'll get it done. He's also one of those engineers thats so productive he'll throw in a \"oh yeah I fixed this too.\" I couldn't recommend Daniel more wholeheartedly!",
        ],
        source: "Chuck Pinkert",
        rel: "Manager @ Autodesk"
    },
    {
        text: [
            'I worked with Daniel on the Autodesk Forms team, and he always impress me with his talent for web development. He is a smart, insightful, and proactive teammate who is also incredibly supportive. Daniel has a rare ability to solve complex technical challenges while ensuring everyone on the team feels heard and empowered. It was a true pleasure working with him, and I would highly recommend Daniel to anyone looking for a strong Frontend Team Lead',
        ],
        source: "Guohao Yan",
        rel: "Engineer, Team Member @ Autodesk"
    },
    {
        text: [
            "Daniel is one of the best engineers I've worked with as a designer. As my engineering counterpart on several projects at Autodesk, Daniel was a true collaborator in solving user problems together. His insights on the designs were smart and helpful. He pushed back on design decisions where he had a different point of view, which ultimately led to the best customer outcomes. He took challenging designs and came up with creative ways to implement them. He was what I'd expect from an ideal engineering partner in a prod dev team of PM's and Designers. I highly recommend him as an engineering partner in any project!",
        ],
        source: "Rohan Singh",
        rel: "Designer @ Autodesk",
    },
    {
        text: [
            "I had the pleasure of working with Daniel, and I can confidently say he is one of the most thorough and reliable engineers I’ve worked with. Daniel brings a rare combination of deep technical expertise, strong ownership, and genuine care for the quality of his work. He approaches every task thoughtfully, makes sure nothing is overlooked, and consistently delivers with a high standard.",
            "Beyond his technical skills, Daniel is a great collaborator. He communicates clearly, is open to feedback, and always looks for the best solution rather than the easiest one. His professionalism, attention to detail, and commitment make him someone you can truly trust on complex projects.",
            "Any team would be lucky to have Daniel, and I wholeheartedly recommend him.",
        ],
        source: "Leah Friedberg",
        rel: "Designer @ Autodesk"
    },
    {
        text: [
            "Daniel is a fantastic developer and leader. He has a lot of excellent qualities, but what most sets him apart is his attention to both the technical and human side of the tools we created. He's the type of developer that never loses sight of the purpose and use of products he builds. As a result, he brings fantastic insights from a technical, UX, and product angle to whatever he touches. He could identify how technical constraints and UX designs would intersect early on in projects and produce creative solutions. Daniel is wonderful combination of thorough, thoughtful, and fast. I strongly recommend him.",
        ],
        source: "Joseph Kappes",
        rel: "Product Manager @ Autodesk"
    },
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
                {randomizedRefs.map(({text, source, rel}) => (
                    <Quote key={`${source}-${rel}`}>
                        {text.map(content => (<p key={content}>{content}</p>))}
                        <Cite>
                            <CiteContent>
                                {source}
                                <span>{rel}</span>
                            </CiteContent>
                        </Cite>
                    </Quote>
                ))}
            </Columns>
        </Wrap>
    )
};
