import React from 'react'
import styled from 'styled-components'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
function Chat() {
    return (
        <Container>
            <TopContainer>
                <LeftContent>
                    <TitleContent>
                        #clever <StarBorderIcon />
                    </TitleContent>
                    <DiscriptinContent>
                        Companies-wide announcements and work-based matters
                    </DiscriptinContent>
                </LeftContent>
                <RightContent>
                    Details <ErrorOutlineIcon />
                </RightContent>
            </TopContainer>
        </Container>
    )
}

export default Chat

const Container = styled.div`
    height:65px;
    border-bottom: 1px solid rgb(152 149 149 / 34%);
`;

const TopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

`;

const LeftContent = styled.div`
    
`;
const RightContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 19px;
    font-weight: lighter;
    font-size: 15px;

    
`;

const TitleContent = styled.div`
    display: flex;
    font-weight: bold;
    font-size: 18px;
    padding-left: 10px;
    padding-top: 10px;
`;



const DiscriptinContent = styled.div`
    font-weight: lighter;
    font-size: 14px;
    padding-left: 10px
`;

