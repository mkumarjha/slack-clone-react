import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import {sidebarItems} from '../data/SidebarData';
import AddIcon from '@material-ui/icons/Add';
//import { channelsItems } from '../data/ChannelsData';
import db from '../firebase'

function Sidebar(props) {
    console.log('ms');
    console.log(props);
    const addChannel = ()=>{
        const promptName = prompt('Enter Channel Name');
        if(promptName){
            db.collection('rooms').add({
                name: promptName
            })
        }
    }


    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    Clever Programmer
                </Name>
                <NewMessage>
                    <AddCircleOutlineOutlinedIcon />
                </NewMessage>
            </WorkspaceContainer>
            <MainChannels>
                {
                    sidebarItems.map(item=>(
                        <MainChannelItem>
                            {item.icon}
                            {item.text}
                        </MainChannelItem>
                    ))
                }
                
            </MainChannels>
            <ChannelsContainer>
                <NewChannelContainer>
                    <div>
                        Channels
                    </div>
                    <AddIcon onClick={addChannel}/>
                </NewChannelContainer>

                <ChannelList>
                    {
                        props.rooms.map(item=>(
                            <Channel>
                                # {item.name}
                            </Channel>
                        ))
                    }
                    
                </ChannelList>
            </ChannelsContainer>
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
    color: white;
    background: #3F0E86;
`;

const WorkspaceContainer = styled.div`
    color: white;
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    justify-content: space-between;
    border-bottom: 1px solid #532753;
`;
const Name = styled.div`

`;
const NewMessage = styled.div`
    width: 36px;
    height: 36px;
    background: white;
    border-radius: 50%;
    fill: #3F0E40;
    color: #3F0E40;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    cursor: pointer;
`;

const MainChannels = styled.div`
    padding-top: 20px;
    border-bottom: 1px solid #532753;
    padding-bottom: 15px

`;
const MainChannelItem = styled.div`
    color: rgb(188,171,188);
    display: grid;
    grid-template-columns: 15% auto;
    height: 28px;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    padding-bottom: 2px;
    :hover{
        background:#350D6D;
    }
`;

const ChannelsContainer = styled.div`
    color: rgb(188,171,188);
    margin-top: 10px;
`;

const NewChannelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 20px;
    padding-left: 19px;
    padding-right: 12px;
    border-bottom: 1px solid #532753;
    padding-bottom: 15px;
    
`;

const ChannelList = styled.div`
    padding-top: 15px
`;
const Channel = styled.div`
    height: 28px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    :hover{
        background: #350D6D;
    }
`;
