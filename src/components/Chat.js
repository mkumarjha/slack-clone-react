import React from 'react'
import styled from 'styled-components'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';

function Chat() {
    return (
        <Container>
            <Headers>
                <Channel>
                    <ChannelName>
                        # clever
                    </ChannelName>
                    <ChannelInfo>
                        Companies-wide announcements and work-based matters
                    </ChannelInfo>

                </Channel>
                    <ChannelDetails>
                        <div>
                            Details
                        </div>
                        <Info />
                    </ChannelDetails>
            </Headers>
            <MessageContainer>
                <ChatMessage />
            </MessageContainer>
            <ChatInput />

            {/* <TopContainer>
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
            </TopContainer> */}
        </Container>
    )
}

export default Chat

const Container = styled.div`
    display: grid;
    grid-template-rows: 64px auto min-content;
`
const Headers = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgb(83,39,83,.13);
    justify-content: space-between;
`
const MessageContainer = styled.div``
const Channel = styled.div``;
const ChannelDetails = styled.div`
    display: flex;
    align-items: center;
    color: #606060;


`;
const ChannelName = styled.div`
    font-weight: 700;
`;
const ChannelInfo = styled.div`
    font-weight: 400;
    color: #606060;
    font-size: 13px;
    margin-top: 8px;
`;

const Info = styled(InfoOutlinedIcon)`
    margin-left: 10px;
`;

// const Container = styled.div`
//     height:65px;
//     border-bottom: 1px solid rgb(152 149 149 / 34%);
// `;

// const TopContainer = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     position: relative;

// `;

// const LeftContent = styled.div`
    
// `;
// const RightContent = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding-right: 19px;
//     font-weight: lighter;
//     font-size: 15px;

    
// `;

// const TitleContent = styled.div`
//     display: flex;
//     font-weight: bold;
//     font-size: 18px;
//     padding-left: 10px;
//     padding-top: 10px;
// `;



// const DiscriptinContent = styled.div`
//     font-weight: lighter;
//     font-size: 14px;
//     padding-left: 10px
// `;

