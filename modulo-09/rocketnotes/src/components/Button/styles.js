import styled from 'styled-components'

export const Container = styled.button`
    width:100%;
    background-color:  ${({theme}) => theme.COLORS.ORANGE};
    color:  ${({theme}) => theme.COLORS.BACKGROUND_800};

    height: 5.6rem;
    border: 0;  
    padding: 0;
    margin-top: 1.6rem;
    border-radius: 1rem;
    font-weight: 500;

    &:disabled{
        opacity:.5
    }
`