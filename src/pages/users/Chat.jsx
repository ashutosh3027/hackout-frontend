import React,{useState,useEffect} from 'react'
import { user_data} from '../../data'
import '../assets/styles/Chat.css'
import io from "socket.io-client";

let socket;
const link = 'http://localhost:3001';

function Chat({match}) {
    const [messages, setmessages] = useState([])
    const [message, setmessage] = useState("");
    const checkChat = (req_data) => {
        return req_data.chat_id === match.params.chatId; 
    }
    const request = user_data.All_Requests.filter(checkChat)[0]

    useEffect(() => {
        socket = io(link);
        socket.emit("join",match.params.chatId );
    },[]);
    
    useEffect(() => {
        socket.on('message',(data) => {
            setmessages([...messages,data])
        })
    })

    const sendMessage = () => {
        const item = { room: match.params.chatId, message , user:user_data.username};
        socket.emit("sendMessage", item);
        setmessage("");
    }

    return (
        <div className="chat-main">
        <div className="messages">
            <div className="message">
            { messages && 
                messages.map((item,index) => {
                    if (item.user === user_data.username){
                        return (
                        <div className="singlemessage" key={index}>
                            <div className="mess-con user" >
                                <sender>You</sender>
                                <p>{item.message}</p>
                            </div>
                        </div>);
                    }
                    else if (item.user === 'bot'){
                        return (
                            <div className="singlemessage"  key={index}>
                                <div className="mess-con bot">
                                    <sender>Bot</sender>
                                    <p>{item.message}</p>
                                </div>
                            </div>);
                    }
                    else{
                        return (
                            <div className="singlemessage"  key={index}>
                                <div className="mess-con">
                                    <sender>Admin</sender>
                                    <p>{item.message}</p>
                                </div>
                            </div>);
                    }
                })
            }
            </div>
            <div className="sendMessage">
                <input type="text" placeholder="Send a message" onChange={(e) => setmessage(e.target.value)} value={message}/>
                <button onClick={sendMessage}>Send</button>
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
