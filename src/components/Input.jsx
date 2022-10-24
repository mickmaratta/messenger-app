import { PaperClipIcon, PhotoIcon, XMarkIcon } from "@heroicons/react/24/solid";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
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

  const handleKey = (e) => {
    e.code === "Enter" && handleSend();
  };

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());

      await uploadBytesResumable(storageRef, img).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          } catch (error) {
            console.log(error);
          }
        });
      });
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
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
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
        onKeyDown={handleKey}
      />
      <div className="flex space-x-2 items-center">
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={(e) => setImg(e.target.files[0])}
        />
        {img && (
          <XMarkIcon
            className="text-red-800 h-8 w-8 cursor-pointer"
            onClick={() => setImg(null)}
          />
        )}
        <label className="flex space-x-2 items-center" htmlFor="file">
          {!img && (
            <PhotoIcon className="cursor-pointer h-4 w-4 md:h-6 md:w-6 text-blue-800" />
          )}
          {img && (
            <span className="text-xs text-blue-500 italic">{img.name}</span>
          )}
        </label>
        <button
          onClick={handleSend}
          disabled={!text && !img && true}
          className="text-xs sm:text-sm md:text-base bg-blue-800 px-3 py-1 rounded-lg text-white hover:bg-blue-700 transition-all duration-300"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Input;
