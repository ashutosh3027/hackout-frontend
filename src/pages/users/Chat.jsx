import React from 'react'
import { user_data,chat } from '../../data'
import '../assets/styles/Chat.css'

function Chat({match}) {
    const checkChat = (req_data) => {
        return req_data.chat_id === match.params.chatId; 
    }
    const request = user_data.All_Requests.filter(checkChat)[0]

    return (
        <div className="chat-main">
        <div className="messages">
            <div className="message">
            {
                chat.Messages.map(item => {
                    if (item.sent_by === "user"){
                        return <p key={item.id}><em>you : </em>{item.message}</p>
                    }
                    else{
                        return <p key={item.id}><em>admin : </em>{item.message}</p>
                    }
                })
            }
            </div>
            <div className="sendMessage">
                <input type="text" placeholder="Send a message" />
                <button>Send</button>
            </div>
        </div>
        <div className="chat-head">
            <div className="chat-det">   
                <h1>CHAT</h1>
                <h3>chat-session-id : {match.params.chatId}</h3>
                <h3>admin : {request.admin_details.admin_name}</h3>
                <h3>User : {user_data.username}</h3>
            </div>
            <div className="productDetails">
                <h1>DETAILS</h1>
                <h3>Product name : {request.product_name}</h3>
                <h3>Product link : <a href={request.product_link} target="_blank">Link</a></h3>
                <h3>Bank required : {request.bank}</h3>
            </div>
        </div>

        </div>
    )
}

export default Chat
