import { styled } from "@mui/material";

export const ListStyled = styled('ul')`
    display: grid;
    gap: ${({theme}) => theme.spacing(9)};
    grid-template-columns: 1fr 1fr;

    margin: 0 auto;
    max-width: 900px;
    padding: ${({theme}) => theme.spacing(10, 2, 10, 2)};
    width: 100%;

    ${({theme}) => theme.breakpoints.down('md')} {
        gap: ${({theme}) => theme.spacing(8)};
        grid-template-columns: 1fr;
    }
`;

export const EmptyList = styled('h2')`
    padding: ${({theme}) => theme.spacing(20, 0)};
    text-align: center;
`;

export const ItemList = styled('li')`
    list-style: none;
`;

export const Photo = styled('img')`
    width: 100%;
`;

export const Informations = styled('div')`
    
`;

export const Name = styled('h3')`
    margin: ${({theme}) => theme.spacing(2, 0, 0, 0)};
`;

export const Price = styled('p')`
    color: ${({theme}) => theme.palette.primary.main};
    font-weight: bold;
    margin: 0px;
`;

export const Description = styled('p')`
    word-break: break-word;
`;
