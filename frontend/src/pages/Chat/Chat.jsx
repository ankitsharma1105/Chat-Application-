import './Chat.css'
import ChatBox from '../../components/ChatBox/ChatBox'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import RightSideBar from '../../components/RightSidebar/RightSideBar'

const Chat = () => {
  return (
    <div className='chat'>
        <div clame="div chat-container">
        <LeftSideBar/>
         <ChatBox/> 
        <RightSideBar/>
        </div>
     </div>
  )
}

export default Chat
