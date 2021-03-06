import axios from "./axios";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { chatMessage, chatMessages, newMessage, deleteMsg } from "./actions";
import { socket } from "./socket";
// Must import the socket object from socket.js so that `emit` can be called on it

export default function Chat() {
    const textRef = useRef("");
    const scrollRef = useRef();

    //  Component must use `useSelector` to get the chat messages out of Redux.
    //  It needs to map them into elements and render them. CKECK RETURN
    const allChatMessages = useSelector((state) => state.messages);

    const handleChange = (e) => {
        textRef.current.value = e.target.value;
        console.log(e.target.value);
    };
    const scrollToBottom = () => {
        scrollRef.current.scrollTop =
            scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
    };

    useEffect(() => {
        scrollToBottom();
    });
    const enterMsg = (e) => {
        e.keyCode === 13 && sendMsg();
    };

    const sendMsg = (e) => {
        console.log("send mssg clicked");
        console.log("text value ", textRef.current.value);
        e.preventDefault();
        socket.emit("chatMessage", textRef.current.value);

        textRef.current.value = "";
    };

    const deleteMsg = (text) => {
        console.log("clicked delete");
        console.log("message for chat delete : ", text.id);
        socket.emit("delete", {
            messageId: text.id,
        });
    };

    return (
        <div className="chat-container">
            <h2>Chat with your peers</h2>
            <div className="old-messages darker" ref={scrollRef}>
                {allChatMessages &&
                    // text is a message
                    allChatMessages.map((text) => (
                        <div key={text.id}>
                            <div className="chatter-container">
                                <img
                                    className="chat-img"
                                    src={text.profile_pic_url || "/default.jpg"}
                                />

                                <p>
                                    {text.first} {text.last} on{" "}
                                    {text.created_at
                                        .slice(0, 16)
                                        .replace("T", " at ")}
                                    :
                                    <div className="chat-box">
                                        <p>{text.message}</p>
                                    </div>
                                </p>
                            </div>
                            <div className="delete-chat">
                                <button onClick={() => deleteMsg(text)}>
                                    delete
                                </button>
                            </div>
                        </div>
                    ))}
            </div>

            {/* must do is emit a socket event with the current value of the */}
            {/* textarea in the payload */}
            <div className="chat-text-area">
                <textarea
                    name="msg-input"
                    ref={textRef}
                    placeholder="Type here"
                    onKeyDown={(e) => enterMsg(e)}
                    onChange={(e) => handleChange(e)}
                ></textarea>
                <button className="send-chat" onClick={(e) => sendMsg(e)}>
                    Send
                </button>
            </div>
        </div>
    );
}
