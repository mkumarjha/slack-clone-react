import React from 'react'
import styled from 'styled-components'

function ChatMessage() {
    return (
        <Container>
            <UserAvatar>
                <img src="https://yt4.ggpht.com/ytc/AAUvwnhfzTEIu71gLJVGCZEpl9ChOkpmfn6RCk_4kogBNQ=s32-c-k-c0x00ffffff-no-rj" />

            </UserAvatar>
            <MessageContent>
                <Name>
                    Amaanath Mumtaz
                    <span>2/23/2021 11:13:55 AM</span>
                </Name>
                <Text>
                    This is the best challange bro and challange accepted
                </Text>
            </MessageContent>
        </Container>
    )
}

export default ChatMessage
const Container = styled.div`
    padding: 8px 20px;
    display: flex;
    align-items: center;
    background: #3F0E86;
    color: white;
    :hover{
        background: #350D5E;
    }
    border-radius: 5px;
    width: 60%;
    margin-top: 15px;
    margin-left: 5px;
`
const UserAvatar = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 8px;

    img{
        width: 100%
    }
`
const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
`
const Name = styled.span`
    font-weight: 900;
    font-size: 15px;
    line-height: 1.4;
    color: rgb(216 210 216);
    span{
        margin-left: 15px;
        font-weight: 400;
        font-size: 13px;
        color: rgb(216 210 216);
    }
`
const Text = styled.span`
    padding-top: 2px;
    font-size: 14px;
    color: rgb(216 210 216);
`


