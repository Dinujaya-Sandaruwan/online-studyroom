import React, { useState, useEffect } from "react";
import {
  SendHorizontal,
  FileText,
  Sparkles,
  Paperclip,
  Loader2,
  File,
  User,
} from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

// Types for messages and resources
type Message = {
  id: number;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
  isTyping?: boolean;
};

type Resource = {
  id: number;
  name: string;
  type: "pdf" | "txt";
  url: string;
};

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const [resources, setResources] = useState<Resource[]>([]);
  //   const messagesEndRef = useRef<null | HTMLDivElement>(null);

  // Typing animation function
  const typeMessage = (
    message: string,
    messageId: number,
    callback?: () => void
  ) => {
    let currentText = "";
    let index = 0;

    const typeNextCharacter = () => {
      if (callback) callback();
      if (index < message.length) {
        currentText += message[index];
        setMessages((prevMessages) =>
          prevMessages.map((msg) =>
            msg.id === messageId ? { ...msg, content: currentText } : msg
          )
        );
        index++;
        setTimeout(typeNextCharacter, 20);
      } else {
        setMessages((prevMessages) =>
          prevMessages.map((msg) =>
            msg.id === messageId ? { ...msg, isTyping: false } : msg
          )
        );
      }
    };

    typeNextCharacter();
  };

  // Initial effect to start the conversation
  useEffect(() => {
    const initialQuestion =
      "What types of registers are found in the 8086 architecture?";

    // Add user message
    const userMessage: Message = {
      id: 0,
      content: initialQuestion,
      sender: "user",
      timestamp: new Date(),
    };

    const aiMessage: Message = {
      id: 1,
      content: "",
      sender: "ai",
      timestamp: new Date(),
      isTyping: true,
    };

    setMessages([userMessage, aiMessage]);

    // Start typing after a brief delay
    setTimeout(() => {
      const aiResponseText =
        "The 8086 microprocessor has several types of registers:\n\n1. General-Purpose Registers: AX, BX, CX, DX (can be used as 16-bit or split into 8-bit high and low registers)\n2. Segment Registers: CS (Code Segment), DS (Data Segment), SS (Stack Segment), ES (Extra Segment)\n3. Pointer and Index Registers: SP (Stack Pointer), BP (Base Pointer), SI (Source Index), DI (Destination Index)\n4. Instruction Pointer (IP): Keeps track of the next instruction to be executed\n5. Flag Register (FLAGS): Contains condition codes and control flags";

      typeMessage(aiResponseText, 1, () => {
        // Generate resources after typing is complete
        const newResources: Resource[] = [
          {
            id: 1,
            name: "ICSLecture-3.pdf",
            type: "pdf",
            url: "#",
          },
          {
            id: 2,
            name: "Voice from Dulmi...",
            type: "txt",
            url: "#",
          },
          {
            id: 3,
            name: "Voice from Thimir...",
            type: "txt",
            url: "#",
          },
        ];
        setResources(newResources);
      });
    }, 1000);
  }, []);

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    // Add user message
    const userMessage: Message = {
      id: messages.length,
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    // Create AI message with loading state
    const aiMessage: Message = {
      id: messages.length + 1,
      content: "",
      sender: "ai",
      timestamp: new Date(),
      isTyping: true,
    };

    setMessages((prevMessages) => [...prevMessages, userMessage, aiMessage]);
    setInputMessage("");

    // Start typing after a brief delay
    setTimeout(() => {
      const aiResponseText =
        "Hi, You can ask me anything related to academic...";
      typeMessage(aiResponseText, aiMessage.id, () => {
        // Generate resources after typing is complete
        const newResources: Resource[] = [
          {
            id: 1,
            name: "ICSLecture-3.pdf",
            type: "pdf",
            url: "#",
          },
          {
            id: 2,
            name: "Voice from Dulmi...",
            type: "txt",
            url: "#",
          },
          {
            id: 3,
            name: "Voice from Thimir...",
            type: "txt",
            url: "#",
          },
          {
            id: 4,
            name: "How-To-Say_HI...",
            type: "pdf",
            url: "#",
          },
        ];
        setResources(newResources);
      });
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="chat-page">
      <NavBar />
      <main className="chat-main">
        <div className="chat-container">
          <div className="chat-content">
            {/* Chat Messages Area */}
            <div className="chat-messages">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`message message-${message.sender}`}
                >
                  {message.sender === "ai" ? (
                    message.isTyping ? (
                      <Loader2
                        className="message-icon ai-icon loader-icon"
                        size={24}
                      />
                    ) : (
                      <Sparkles className="message-icon ai-icon" size={24} />
                    )
                  ) : (
                    <div className="message-icon user-icon">
                      <User />
                    </div>
                  )}
                  <div className="message-content">
                    {message.content ||
                      (message.isTyping && "Generating response...")}
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input Area */}
            <div className="chat-input-container">
              <div className="chat-input-wrapper">
                <input
                  type="text"
                  placeholder="Ask a follow-up question..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="chat-input"
                />
                <button
                  className="chat-input-send"
                  onClick={handleSendMessage}
                  disabled={
                    inputMessage.trim() === "" ||
                    messages.some((m) => m.isTyping)
                  }
                >
                  <SendHorizontal size={20} />
                </button>
                <button className="chat-input-attach">
                  <Paperclip size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Resources Sidebar */}
          <div className="resources-sidebar">
            <div className="resources-header">
              <FileText size={24} />
              <h3>Referenced Resources</h3>
            </div>
            <div className="resources-list">
              {resources.length === 0 ? (
                <p className="resources-empty">Loading resources...</p>
              ) : (
                resources.map((resource) => (
                  <div
                    key={resource.id}
                    className={`resource-item resource-item--${resource.type}`}
                  >
                    {resource.type === "pdf" ? (
                      <FileText size={20} />
                    ) : (
                      <File size={20} />
                    )}
                    <span>{resource.name}</span>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-download"
                    >
                      Download
                    </a>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ChatPage;
