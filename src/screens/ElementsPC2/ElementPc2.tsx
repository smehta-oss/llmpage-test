import React from "react";

interface ElementPc2Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ElementPc2 = ({ isOpen, onClose }: ElementPc2Props): JSX.Element => {
  if (!isOpen) return <></>;

  return (
    <>
      {/* Backdrop/Overlay */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 9998,
          backdropFilter: 'blur(4px)'
        }}
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div
        style={{
          width: '90vw',
          height: '90vh',
          position: 'fixed',
          background: 'rgba(255, 255, 255, 0.8)',
          boxShadow: 'rgba(125, 10, 248, 0.12) 0px 0px 16px 4px',
          overflow: 'hidden',
          borderRadius: '24px',
          outline: 'rgba(0, 122, 200, 0.4) solid 1px',
          outlineOffset: '-1px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '1260px',
          maxHeight: '800px',
          zIndex: 9999
        }}
        onClick={(e) => e.stopPropagation()}
      >
      {/* Close Button */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: 'none',
          background: 'rgba(0, 0, 0, 0.1)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#666',
          zIndex: 10000
        }}
      >
        ×
      </button>
      {/* Header */}
      <div style={{
        width: '100%',
        padding: '14px 80px',
        left: '0px',
        top: '0px',
        position: 'absolute',
        background: 'white',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 8px -1px',
        overflow: 'hidden',
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex'
      }}>
        <div style={{
          width: '135px',
          height: '17px',
          position: 'relative'
        }}>
          <div style={{
            width: '63.97px',
            height: '10.65px',
            left: '71.01px',
            top: '5.67px',
            position: 'absolute',
            background: '#395BB6'
          }}></div>
          <div style={{
            width: '64.84px',
            height: '17px',
            left: '0px',
            top: '0px',
            position: 'absolute',
            background: 'black'
          }}></div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        width: '80%',
        left: '50%',
        top: '45%',
        position: 'absolute',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: '26px',
        display: 'flex',
        maxWidth: '958px',
        transform: 'translate(-50%, -50%)'
      }}>
        {/* Chat Bubble */}
        <div style={{
          width: '649px',
          padding: '7px 14px',
          position: 'relative',
          background: '#E6E5EB',
          borderRadius: '16px',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: '10px',
          display: 'inline-flex'
        }}>
          <div style={{
            flex: '1 1 0px',
            color: 'black',
            fontSize: '17px',
            fontFamily: '"SF Pro"',
            fontWeight: '400',
            lineHeight: '22px',
            overflowWrap: 'break-word'
          }}>
            Hi! Let's find the right pet insurance in under a minute. I'll start by asking you two quick questions. First question is, who is the policy for? A cat or a dog?
          </div>
          <div style={{
            width: '20px',
            height: '19px',
            left: '-5px',
            top: '44px',
            position: 'absolute'
          }}></div>
        </div>

        {/* Selection Buttons */}
        <div style={{
          alignSelf: 'stretch',
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
          gap: '8px',
          display: 'inline-flex'
        }}>
          <div style={{
            width: '100px',
            height: '56px',
            background: 'rgb(248, 248, 250)',
            boxShadow: 'rgba(0, 0, 0, 0.11) 0px 0px 0.5px inset',
            borderRadius: '28px',
            outline: 'rgb(190, 190, 190) solid 1px',
            outlineOffset: '-1px',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '8px',
            display: 'inline-flex',
            cursor: 'pointer'
          }}>
            <div style={{
              height: '56px',
              paddingLeft: '16px',
              paddingRight: '16px',
              justifyContent: 'flex-start',
              alignItems: 'center',
              display: 'inline-flex'
            }}>
              <div style={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                display: 'flex'
              }}>
                <div style={{
                  textAlign: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  color: '#1D1D1F',
                  fontSize: '14px',
                  fontFamily: '"Work Sans"',
                  fontWeight: '600',
                  lineHeight: '20px',
                  overflowWrap: 'break-word'
                }}>
                  Cat
                </div>
              </div>
            </div>
          </div>
          <div style={{
            width: '100px',
            height: '56px',
            background: 'rgb(248, 248, 250)',
            boxShadow: 'rgba(0, 0, 0, 0.11) 0px 0px 0.5px inset',
            borderRadius: '28px',
            outline: 'rgb(190, 190, 190) solid 1px',
            outlineOffset: '-1px',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '8px',
            display: 'inline-flex',
            cursor: 'pointer'
          }}>
            <div style={{
              height: '56px',
              paddingLeft: '16px',
              paddingRight: '16px',
              justifyContent: 'flex-start',
              alignItems: 'center',
              display: 'inline-flex'
            }}>
              <div style={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                display: 'flex'
              }}>
                <div style={{
                  textAlign: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  color: '#1D1D1F',
                  fontSize: '14px',
                  fontFamily: '"Work Sans"',
                  fontWeight: '600',
                  lineHeight: '20px',
                  overflowWrap: 'break-word'
                }}>
                  Dog
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Suggestion Pills */}
      <div style={{
        left: '50%',
        position: 'absolute',
        justifyContent: 'center',
        gap: '16px',
        display: 'flex',
        bottom: '120px',
        transform: 'translateX(-50%)',
        flexWrap: 'wrap'
      }}>
        <div style={{
          justifyContent: 'center',
          display: 'inline-flex',
          padding: '10px',
          background: 'white',
          boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 8px -1px',
          borderRadius: '8px',
          outline: '1px #F4F5F8 solid',
          outlineOffset: '-1px',
          alignItems: 'center',
          gap: '10px',
          cursor: 'pointer'
        }}>
          <div style={{
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            color: 'rgb(96, 111, 127)',
            fontSize: '12px',
            fontFamily: '"Work Sans"',
            fontWeight: '400',
            lineHeight: '18px',
            overflowWrap: 'break-word'
          }}>
            Cheapest pet insurance for a dog
          </div>
          <div style={{
            width: '20px',
            height: '20px',
            position: 'relative'
          }}>
            <div style={{
              width: '10px',
              height: '10px',
              left: '5px',
              top: '5px',
              position: 'absolute',
              background: 'rgb(96, 111, 127)'
            }}></div>
          </div>
        </div>
        <div style={{
          padding: '10px',
          background: 'white',
          boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 8px -1px',
          borderRadius: '8px',
          outline: '1px #F4F5F8 solid',
          outlineOffset: '-1px',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          display: 'inline-flex',
          cursor: 'pointer'
        }}>
          <div style={{
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            color: 'rgb(96, 111, 127)',
            fontSize: '12px',
            fontFamily: '"Work Sans"',
            fontWeight: '400',
            lineHeight: '18px',
            overflowWrap: 'break-word'
          }}>
            Best coverage for a cat
          </div>
          <div style={{
            width: '20px',
            height: '20px',
            position: 'relative'
          }}>
            <div style={{
              width: '10px',
              height: '10px',
              left: '5px',
              top: '5px',
              position: 'absolute',
              background: 'rgb(96, 111, 127)'
            }}></div>
          </div>
        </div>
        <div style={{
          padding: '10px',
          background: 'white',
          boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 8px -1px',
          borderRadius: '8px',
          outline: '1px #F4F5F8 solid',
          outlineOffset: '-1px',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          display: 'inline-flex',
          cursor: 'pointer'
        }}>
          <div style={{
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            color: 'rgb(96, 111, 127)',
            fontSize: '12px',
            fontFamily: '"Work Sans"',
            fontWeight: '400',
            lineHeight: '18px',
            overflowWrap: 'break-word'
          }}>
            Which plan covers dental?
          </div>
          <div style={{
            width: '20px',
            height: '20px',
            position: 'relative'
          }}>
            <div style={{
              width: '10px',
              height: '10px',
              left: '5px',
              top: '5px',
              position: 'absolute',
              background: 'rgb(96, 111, 127)'
            }}></div>
          </div>
        </div>
      </div>

      {/* Input Section */}
      <div style={{
        left: '50%',
        position: 'absolute',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: '10px',
        display: 'flex',
        width: '80%',
        maxWidth: '958px',
        bottom: '40px',
        transform: 'translateX(-50%)',
        flexDirection: 'column'
      }}>
        <div style={{
          justifyContent: 'flex-start',
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'stretch',
          alignItems: 'flex-start',
          gap: '8px'
        }}>
          <div style={{
            alignSelf: 'stretch',
            padding: '12px 16px',
            background: 'white',
            overflow: 'hidden',
            borderRadius: '8px',
            outline: 'rgb(206, 212, 219) solid 1px',
            outlineOffset: '-1px',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '10px',
            display: 'inline-flex'
          }}>
            <div style={{
              width: '24px',
              height: '24px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                width: '20px',
                height: '20px',
                left: '2px',
                top: '2px',
                position: 'absolute',
                outline: 'rgb(235, 64, 21) solid 1.5px',
                outlineOffset: '-0.75px'
              }}></div>
            </div>
            <div style={{
              flex: '1 1 0px',
              color: 'rgb(182, 182, 182)',
              fontSize: '16px',
              fontFamily: '"Work Sans"',
              fontWeight: '500',
              lineHeight: '24px',
              overflowWrap: 'break-word'
            }}>
              Hi there! What are you interested in...
            </div>
            <div style={{
              width: '48px',
              height: '48px',
              minWidth: '48px',
              padding: '12px 14px',
              background: 'rgb(0, 122, 200)',
              boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 8px -1px',
              overflow: 'hidden',
              borderRadius: '44px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
              display: 'flex',
              cursor: 'pointer'
            }}>
              <div style={{
                width: '24px',
                height: '24px',
                position: 'relative'
              }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  left: '0px',
                  top: '0px',
                  position: 'absolute'
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
