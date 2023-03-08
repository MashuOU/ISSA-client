import { useEffect, useState, useRef } from "react";

export default function Chat() {
  const chatAreaRef = useRef(null);
  function sendMessage(event) {
    if (event.key === "Enter") {
      const newMessage = {
        message: event.target.value,
        time: "Message sent at " + new Date().toLocaleTimeString(),
        imgUrl:
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png",
      };
      setMessageList((prevMessages) => [...prevMessages, newMessage]);
      event.target.value = null;

      // const chatbox = document.getElementById("chatArea");
      // chatbox.scrollTop = chatbox.scrollHeight;
      // alert(chatbox.scrollTop)
    }
  }

  const [dummyList, setDummyList] = useState([
    {
      imgUrl:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png",
      name: "Madison Jones",
      message: "What time was our meet",
      time: "20m",
    },
    {
      imgUrl:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%2812%29.png",
      name: "Miguel Cohen",
      message: "Snackwave craft ",
      time: "22m",
    },
    {
      imgUrl:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%288%29.png",
      name: "Sarah Jones",
      message: "Oyoyoy",
      time: "40m",
    },
  ]);

  const [messageList, setMessageList] = useState([
    {
      message: "Luctus et ultrices posuere cubilia curae.",
      time: "Message seen 1.22pm",
      imgUrl:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png",
    },
  ]);

  useEffect(() => {
    // scroll to the bottom of the chat area after each message is added
    chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
  }, [messageList]);

  return (
    <div clasName="  ">
      <div className=" grid h-[100vh] pt-20 grid-rows-[max-content_1fr_max-content] border-black">
        <div className="pl-4">
          <h5 class="text-xl mb-6 font-semibold tracking-tight   text-gray-900 dark:text-white">
            {" "}
            Chat{" "}
          </h5>
        </div>

        <div
          id="chatArea"
          ref={chatAreaRef}
          className=" border-black overflow-scroll "
          style={{
            backgroundImage:
              "url(https://i.pinimg.com/736x/3d/8c/2f/3d8c2f2c82c1c9ef1e27be645cd1aa17.jpg)",
            backgroundSize: "cover",
          }}
        >
          <div className="chat chat-start  ">
            <div className="chat-image avatar">
              {/* <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div> */}
            </div>
            <div className="chat-bubble bg-white text-black ">
              It was said that you would, destroy the Sith, not join them.
            </div>
          </div>
          <div className="chat chat-start text-sm">
            <div className="chat-image avatar">
              {/* <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div> */}
            </div>
            <div className="chat-bubble bg-white text-black   ">
              It was you who would bring balance to the Force
            </div>
          </div>

          {messageList.map((each, index) => {
            return (
              <div key={each.index} className="chat chat-end text-sm  ">
                {/* <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div> */}
                <div className="chat-bubble bg-white text-black   "> {each.message} </div>
              </div>
            );
          })}
        </div>

        <form className=" border-black">
          <label htmlFor="chat" className="sr-only">
            Your message
          </label>
          <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
            <button
              type="button"
              className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Upload image</span>
            </button>
            <button
              type="button"
              className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Add emoji</span>
            </button>
            <textarea
              id="chat"
              rows={1}
              className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your message..."
              defaultValue={""}
              onKeyDown={sendMessage}
            />
            <button
              type="submit"
              className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6 rotate-90"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
              <span className="sr-only">Send message</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
