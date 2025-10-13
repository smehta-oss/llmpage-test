import React from "react";

export const CarouselCard6 = (): JSX.Element => {
  return (
    <div 
      className="insurance-plan-card most-popular-card transition-all duration-300 ease-in-out md:hover:scale-105 md:hover:shadow-lg md:hover:border md:hover:border-[#007AC8] cursor-pointer relative before:content-[''] before:absolute before:inset-0 before:p-[1.5px] before:rounded-3xl before:[background:linear-gradient(90deg,rgba(0,122,200,0.4)_0%,rgba(255,177,54,0.4)_50%,rgba(220,0,0,0.4)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[10] before:pointer-events-none"
      style={{
        width: '100%',
        padding: '12px 8px 8px',
        position: 'relative',
        background: 'white',
        overflow: 'hidden',
        borderRadius: '24px',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        maxWidth: '312px',
        flexShrink: 0,
        backdropFilter: 'blur(2.0px) brightness(110%)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.40), inset 1px 0 0 rgba(255,255,255,0.32), inset 0 -1px 1px rgba(0,0,0,0.13), inset -1px 0 1px rgba(0,0,0,0.11)'
      }}
    >
      <div 
        className="most-popular-title"
        style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: '9px', position: 'relative', alignSelf: 'stretch', width: '100%', flex: '0 0 auto', minHeight: '40px'}}
      >
        <div style={{position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'fit-content', marginTop: '-1px', fontFamily: 'Work Sans', fontWeight: '600', color: 'black', fontSize: '14px', textAlign: 'center', letterSpacing: '0.92px', lineHeight: '20px', whiteSpace: 'nowrap'}}>
          FEATURED PARTNER OFFER
        </div>
      </div>

      <div className="card-content-group flex flex-col flex-grow relative">
        <div 
          className="most-popular-content"
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            alignItems: 'flex-start',
            padding: '12px 16px',
            position: 'relative',
            flexGrow: 1,
            background: 'rgba(255, 255, 255, 0.80)',
            borderRadius: '16px',
            boxShadow: '0px 0px 16px 4px rgba(125, 10, 248, 0.12), inset 0px 1px 0px rgba(255, 255, 255, 0.40), inset 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px -1px 1px rgba(0, 0, 0, 0.13), inset -1px 0px 1px rgba(0, 0, 0, 0.11)',
            backdropFilter: 'blur(2.0px) brightness(110%)',
            marginTop: '0px'
          }}
        >
          <div className="card-content-wrapper" style={{display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '4px'}}>
              <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '4px', display: 'flex', minHeight: 'auto'}}>
                <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: '16px', fontFamily: 'Work Sans', fontWeight: '400', textDecoration: 'underline', lineHeight: '26px', wordWrap: 'break-word'}}>
                  Figo
                </div>
                <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: '20px', fontFamily: 'Work Sans', fontWeight: '600', lineHeight: '26px', wordWrap: 'break-word', whiteSpace: 'pre-line'}}>
                  Best for all-round{'\n'}coverage
                </div>
              </div>
              <div style={{alignSelf: 'stretch', color: '#606F7F', fontSize: '16px', fontFamily: 'Work Sans', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word'}}>
                If you care about fewer exclusions and higher ceilings, then this plan offers high limits and options like dental/orthopedic.
              </div>
            </div>

            <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex', marginTop: '12px'}}>
              <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex', gap: '56px'}}>
                <div className="transition-all duration-200 md:hover:bg-[#006bb3] md:hover:scale-105 md:hover:border md:hover:border-[#007AC8] cursor-pointer" style={{minWidth: '60px', height: '48px', padding: '9px 16px', background: '#007AC8', borderRadius: '8px', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                  <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'row', color: 'white', fontSize: '18px', fontFamily: 'Work Sans', fontWeight: '600', lineHeight: '30px', whiteSpace: 'nowrap'}}>
                    Learn More
                  </div>
                </div>

                <div style={{width: '80px', height: '80px', background: 'white', boxShadow: '0px 8px 16px -3px rgba(0, 0, 0, 0.10)', borderRadius: '8px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '8px', display: 'inline-flex'}}>
                  <img
                    style={{width: '64px', height: '64px', objectFit: 'contain'}}
                    alt="Provider logo"
                    src="/LogoFigo.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute -top-2.5 left-[206px] w-[106px] h-[146px]"
          alt="Pet"
          src="/Dog2.png"
        />
      </div>
    </div>
  );
};
