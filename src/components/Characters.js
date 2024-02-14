import React from 'react';
import styled from 'styled-components';
import media from '../styles/media';
import colors from '../styles/colors';
import text from '../styles/text';

const Characters = ({data})=>{
    const charData = data.map((char, id)=>{
        return (
          <Card>
              <NameSpan>{char.name}</NameSpan> {char.name}
            <Name>
            </Name>
          </Card>
        );
    })
    return (
      <Wrapper>
        <CardWrapper>{charData}</CardWrapper>
      </Wrapper>
    );
}
export default Characters;
const NameSpan = styled.span`
  ${text.egyption}
  margin: unset;
`;
const Name = styled.p`
${text.h3}
color:black;
margin:unset;
`
const Card = styled.div`
display:flex;
flex-direction:column;
align-items: center;
justify-content: center;
text-align: center;
width:20.833vw;
`
const CardWrapper = styled.div`
display: flex;
max-width: 62.5vw;
flex-wrap:wrap;
`
const Wrapper = styled.div`
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;

`