import { PaperClipIcon, PhotoIcon } from "@heroicons/react/24/solid";
import { arrayUnion, doc, serverTimestamp, Timestamp, updateDoc } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());
      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          //TODO:Handle Error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]:{
        text
      },
      [data.chatId+".date"]: serverTimestamp()
    })
    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]:{
        text
      },
      [data.chatId+".date"]: serverTimestamp()
    })
    setImg(null);
    setText("");
  };

  return (
    <div className="h-16 bg-white flex items-center justify-between px-3">
      <input
        onChange={(e) => setText(e.target.value)}
        className="text-sm md:text-base text-slate-900 text-md placeholder:text-slate-700 w-full outline-none"
        type="text"
        placeholder="Type something..."
        value={text}
      />
      <div className="flex space-x-2 items-center">
        <PaperClipIcon className="h-4 w-4 md:h-6 md:w-6 text-blue-800" />
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor="file">
          <PhotoIcon className="cursor-pointer h-4 w-4 md:h-6 md:w-6 text-blue-800" />
        </label>
        <button
          onClick={handleSend}
          className="text-xs sm:text-sm md:text-base bg-blue-800 px-3 py-1 rounded-lg text-white hover:bg-blue-700 transition-all duration-300"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Input;
