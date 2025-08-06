import styled from '@emotion/styled';
import { theme } from 'src/style/theme';


const TimelineNav = styled.div`
    flex: 1;
    max-width: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-right: 1rem;text-align: right;
`;
const TimelineLink = styled.a`
    padding: .5rem .25rem;
    width: 100%;text-align: right;
    display: block;
    text-align: right;
`;
const TimelineWrap = styled.div`
    flex: 4;
    justify-content: space-between;
`;
const TimelineItem = styled.div`
    border: 1px solid ;
    padding: .5rem 1rem;
    margin: .5rem auto;
`;
const TimelineTitle = styled.h4`
    color:  ${theme.color.popText};
    margin-top: .25rem;
`;
const TimelineContent = styled.div`
    
`;
const TimelineButtons = styled.div`
    justify-content: flex-end;
    display: flex;
`;
const TimelineButton = styled.a`
    background-color: ${theme.color.popText};
    color: ${theme.color.backgroundDark};
    padding: .25rem .5rem;
    margin: .5rem;
    border-radius: .25rem;
    white-space: nowrap;

    &:visited {
        color: ${theme.color.backgroundDark};
    }
    &:hover {
        color: ${theme.color.popText};
        background-color: ${theme.color.backgroundDark};
    }
`;

export const Timeline = () => {
    return (
        <>
            <TimelineNav>
                <TimelineLink>Fidget Map</TimelineLink>
                <TimelineLink>Timeline 2 Link Here</TimelineLink>
                <TimelineLink>Timeline 3 Link Here</TimelineLink>
                <TimelineLink>Timeline 4 Link Here</TimelineLink>
            </TimelineNav>
            <TimelineWrap>
                <TimelineItem>
                    <TimelineTitle>Fidget Map</TimelineTitle>
                    <TimelineContent>
                        <p>FidgetMap is a casual game about exploration and discovery. There's a daily map that saves automatically and can be resumed all day. Tomorrow it will be gone but a new one will be ready to explore.</p>
                        <blockquote>There are a few tools lost near your cabin that will help you on your journeys. You'll likely find lots of marbles, too. You get to keep them from map-to-map. Lucky you!</blockquote>
                    </TimelineContent>
                    <TimelineButtons>
                        <TimelineButton href='https://www.fidgetmap.com/'>Check it Out Here</TimelineButton>
                        <TimelineButton href='https://www.fidgetmap.com/'>Learn More</TimelineButton>
                        <TimelineButton href='https://www.fidgetmap.com/'>Three Buttons</TimelineButton>
                    </TimelineButtons>
                </TimelineItem>
            </TimelineWrap>
        </>
    )
}