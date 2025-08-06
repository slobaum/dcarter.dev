import styled from '@emotion/styled';

export const Content = styled.div<{ col?: boolean; }>`
    flex: 1;
    padding: 1rem 2rem;
    overflow: auto;
    display: flex;
    flex-direction: ${props => props.col ? 'column' : 'row'}
`;