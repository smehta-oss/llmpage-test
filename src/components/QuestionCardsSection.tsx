import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { ChatDialog, Message } from "./ChatDialog";

const questionCards = [
  {
    id: 1,
    question:
      "Does pet insurance cover both dogs and cats under the same plan?",
  },
  {
    id: 2,
    question: "Does pet insurance cover vaccinations and annual checkups?",
  },
  {
    id: 3,
    question: "Are pre-existing conditions covered?",
  },
];

export const QuestionCardsSection = (): JSX.Element => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSearchClick = () => {
    setIsChatOpen(true);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addMessage = (text: string, sender: 'user' | 'bot') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      // Add user message to chat
      addMessage(inputValue.trim(), 'user');
      
      // Open chat dialog
      setIsChatOpen(true);
      
      // Clear input after sending
      setInputValue("");
      
      // Simulate bot response after a delay
      setTimeout(() => {
        addMessage("Thanks for your message! How can I help you find the right pet insurance?", 'bot');
        
        // Add more messages to test scrolling
        setTimeout(() => {
          addMessage("I can help you compare different pet insurance providers based on your needs.", 'bot');
        }, 2000);
        
        setTimeout(() => {
          addMessage("What type of pet do you have? A dog or a cat?", 'bot');
        }, 3000);
        
        setTimeout(() => {
          addMessage("Also, what's your pet's age and breed? This will help me find the best coverage options for you.", 'bot');
        }, 4000);
        
        setTimeout(() => {
          addMessage("Based on your location and pet details, I can show you personalized quotes from top-rated insurance providers.", 'bot');
        }, 5000);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      <ChatDialog isOpen={isChatOpen} onClose={handleCloseChat} messages={messages} />
    <div className="fixed bottom-0 left-0 right-0 z-[10000] flex justify-center p-4">
      <div className="flex flex-col w-full max-w-[958px] items-center gap-[21px] relative flex-[0_0_auto]">
        <div className="flex flex-col items-center gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
            {questionCards.map((question) => (
              <Card
                key={question.id}
                className="flex items-center justify-center gap-2.5 p-2.5 relative flex-1 grow bg-white rounded-lg border border-solid border-[#F4F5F8] shadow-SEM-shadows-4dp cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-0 flex items-center justify-center gap-2.5 w-full">
                  <div className="relative flex items-center justify-center flex-1 mt-[-1.00px] font-SEO-forbesmedia-body-sans-xs-regular font-[number:var(--SEO-forbesmedia-body-sans-xs-regular-font-weight)] text-[#606F7F] text-[length:var(--SEO-forbesmedia-body-sans-xs-regular-font-size)] tracking-[var(--SEO-forbesmedia-body-sans-xs-regular-letter-spacing)] leading-[var(--SEO-forbesmedia-body-sans-xs-regular-line-height)] [font-style:var(--SEO-forbesmedia-body-sans-xs-regular-font-style)]">
                    {question.question}
                  </div>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.83333 5C5.3731 5 5 5.3731 5 5.83333C5 6.29357 5.3731 6.66667 5.83333 6.66667H12.1548L5.24408 13.5774C4.91864 13.9028 4.91864 14.4305 5.24408 14.7559C5.56951 15.0814 6.09715 15.0814 6.42259 14.7559L13.3333 7.84518V14.1667C13.3333 14.6269 13.7064 15 14.1667 15C14.6269 15 15 14.6269 15 14.1667V5.83333C15 5.3731 14.6269 5 14.1667 5H5.83333Z" fill="#606F7F"/>
                  </svg>
                </CardContent>
              </Card>
            ))}
          </div>
              <div 
                className="flex items-center justify-between px-10 py-2 relative self-stretch w-full flex-[0_0_auto] bg-[#ffffffcc] rounded-lg border-[none] shadow-[0px_0px_16px_4px_#7d0af81f,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(90deg,rgba(0,122,200,0.4)_0%,rgba(255,177,54,0.4)_50%,rgba(220,0,0,0.4)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
              >
                <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                  <img
                    className="relative w-6 h-6"
                    alt="Line star"
                    src="/-line-star-06.svg"
                  />
                  <Input
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    className="relative w-[466px] h-6 mt-[-1.00px] font-forbesmedia-body-sans-md-medium font-[number:var(--forbesmedia-body-sans-md-medium-font-weight)] text-black text-[length:var(--forbesmedia-body-sans-md-medium-font-size)] tracking-[var(--forbesmedia-body-sans-md-medium-letter-spacing)] leading-[var(--forbesmedia-body-sans-md-medium-line-height)] [font-style:var(--forbesmedia-body-sans-md-medium-font-style)] border-none bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 z-10"
                    placeholder="Hi there! What are you interested in..."
                  />
                </div>
                <Button 
                  onClick={handleSendMessage}
                  className="flex w-12 h-12 items-center justify-center gap-2 px-3.5 py-3 relative bg-[#007AC8] rounded-[44px] overflow-hidden shadow-4dp h-auto hover:bg-[#007AC8]/90 z-10"
                >
                  <img
                    className="relative w-6 h-6 ml-[-2.00px] mr-[-2.00px]"
                    alt="Send"
                    src="/trailing-icon.svg"
                  />
                </Button>
              </div>
        </div>
      </div>
    </div>
    </>
  );
};
