import React from "react";

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatDialogProps {
  isOpen: boolean;
  onClose: () => void;
  messages: Message[];
}

export const ChatDialog = ({ isOpen, onClose, messages }: ChatDialogProps): JSX.Element | null => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop with blur */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          zIndex: 9000
        }}
        onClick={onClose}
      />
      
      {/* Dialog */}
      <div 
          style={{
            width: '90vw', 
            height: '90vh', 
            position: 'fixed', 
            background: 'white', 
            boxShadow: 'rgba(125, 10, 248, 0.12) 0px 0px 16px 4px', 
            overflow: 'hidden', 
            borderRadius: 24, 
            outline: 'rgba(0, 122, 200, 0.4) solid 1px', 
            outlineOffset: -1, 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            maxWidth: 1260, 
            maxHeight: 800, 
            zIndex: 9001
          }}
      >
      {/* Close Button */}
      <button 
        onClick={onClose}
        style={{
          position: 'absolute', 
          top: 20, 
          right: 20, 
          width: 32, 
          height: 32, 
          borderRadius: '50%', 
          border: 'none', 
          background: 'rgba(0, 0, 0, 0.1)', 
          cursor: 'pointer', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          fontSize: 18, 
          fontWeight: 'bold', 
          color: 'rgb(102, 102, 102)', 
          zIndex: 9002
        }}
      >
        ×
      </button>

      {/* Header */}
      <div style={{
        width: '100%', 
        padding: '14px 80px', 
        left: 0, 
        top: 0, 
        position: 'absolute', 
        background: 'white', 
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 8px -1px', 
        overflow: 'hidden', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        display: 'flex'
      }}>
        <div style={{width: 135, height: 17, position: 'relative'}}>
          <div style={{width: 63.97, height: 10.65, left: 71.01, top: 5.67, position: 'absolute', background: 'rgb(57, 91, 182)'}} />
          <div style={{width: 64.84, height: 17, left: 0, top: 0, position: 'absolute', background: 'black'}} />
        </div>
      </div>

        {/* Chat Messages Container - Simplified */}
        <div style={{
          position: 'absolute',
          top: 80,
          left: 20,
          right: 20,
          bottom: 20,
          overflowY: 'scroll',
          overflowX: 'hidden',
          padding: 0,
          border: '1px solid #eee' // Debug border to see the scrollable area
        }}>
          {/* Messages Content */}
          <div style={{
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            minHeight: 'calc(100% - 40px)' // Account for padding
          }}>
            {/* Initial Bot Message - always show */}
            <div style={{
              display: 'flex',
              justifyContent: 'flex-start',
              width: '100%'
            }}>
              <div style={{
                maxWidth: 649, 
                padding: '12px 16px', 
                position: 'relative', 
                background: 'rgb(230, 229, 235)', 
                borderRadius: '18px 18px 18px 4px', 
                justifyContent: 'flex-start', 
                alignItems: 'flex-start', 
                gap: 10, 
                display: 'inline-flex'
              }}>
                <div style={{
                  flex: '1 1 0px', 
                  color: 'black', 
                  fontSize: 17, 
                  fontFamily: 'SF Pro', 
                  fontWeight: 400, 
                  lineHeight: '22px', 
                  overflowWrap: 'break-word'
                }}>
                  Hi! Let's find the right pet insurance in under a minute. I'll start by asking you two quick questions. First question is, who is the policy for? A cat or a dog?
                </div>
              </div>
            </div>

            {/* Dynamic Messages */}
            {messages.map((message) => (
              <div key={message.id} style={{
                display: 'flex',
                justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                width: '100%'
              }}>
                <div style={{
                  maxWidth: '70%',
                  padding: '12px 16px',
                  background: message.sender === 'user' 
                    ? '#007AFF' // Apple blue for user messages
                    : 'rgb(230, 229, 235)', // Gray for bot messages
                  borderRadius: message.sender === 'user' 
                    ? '18px 18px 4px 18px' // User bubble (tail on bottom right)
                    : '18px 18px 18px 4px', // Bot bubble (tail on bottom left)
                  color: message.sender === 'user' ? 'white' : 'black',
                  fontSize: 17,
                  fontFamily: 'SF Pro',
                  fontWeight: 400,
                  lineHeight: '22px',
                  overflowWrap: 'break-word'
                }}>
                  {message.text}
                </div>
              </div>
            ))}

            {/* Cat/Dog Buttons - only show if no messages yet */}
            {messages.length === 0 && (
              <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                width: '100%',
                gap: 8
              }}>
                <div style={{
                  width: 100, 
                  height: 56, 
                  background: 'rgb(248, 248, 250)', 
                  boxShadow: 'rgba(0, 0, 0, 0.11) 0px 0px 0.5px inset', 
                  borderRadius: 28, 
                  outline: 'rgb(190, 190, 190) solid 1px', 
                  outlineOffset: -1, 
                  flexDirection: 'column', 
                  justifyContent: 'flex-start', 
                  alignItems: 'center', 
                  gap: 8, 
                  display: 'inline-flex', 
                  cursor: 'pointer'
                }}>
                  <div style={{
                    height: 56, 
                    paddingLeft: 16, 
                    paddingRight: 16, 
                    justifyContent: 'flex-start', 
                    alignItems: 'center', 
                    display: 'inline-flex'
                  }}>
                    <div style={{justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                      <div style={{
                        textAlign: 'center', 
                        justifyContent: 'center', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        color: 'rgb(29, 29, 31)', 
                        fontSize: 14, 
                        fontFamily: 'Work Sans', 
                        fontWeight: 600, 
                        lineHeight: '20px', 
                        overflowWrap: 'break-word'
                      }}>
                        Cat
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{
                  width: 100, 
                  height: 56, 
                  background: 'rgb(248, 248, 250)', 
                  boxShadow: 'rgba(0, 0, 0, 0.11) 0px 0px 0.5px inset', 
                  borderRadius: 28, 
                  outline: 'rgb(190, 190, 190) solid 1px', 
                  outlineOffset: -1, 
                  flexDirection: 'column', 
                  justifyContent: 'flex-start', 
                  alignItems: 'center', 
                  gap: 8, 
                  display: 'inline-flex', 
                  cursor: 'pointer'
                }}>
                  <div style={{
                    height: 56, 
                    paddingLeft: 16, 
                    paddingRight: 16, 
                    justifyContent: 'flex-start', 
                    alignItems: 'center', 
                    display: 'inline-flex'
                  }}>
                    <div style={{justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                      <div style={{
                        textAlign: 'center', 
                        justifyContent: 'center', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        color: 'rgb(29, 29, 31)', 
                        fontSize: 14, 
                        fontFamily: 'Work Sans', 
                        fontWeight: 600, 
                        lineHeight: '20px', 
                        overflowWrap: 'break-word'
                      }}>
                        Dog
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

    </div>
    </>
  );
};
