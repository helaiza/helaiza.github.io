import Styled from 'styled-components';

export const StyledGrid = Styled.div`
display: grid;  
width: 100%;
grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
grid-auto-rows: minmax(40px, auto);           
grid-gap: 1em;
`;

