import React, { useState, useEffect } from 'react';

function Stills() {
    let gap = "15px"
    let mobileGap = "7px"

    const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 768px)").matches);
    
    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 768px)");
        const handleResize = (e) => setIsMobile(e.matches);
    
        mediaQuery.addEventListener("change", handleResize);
    }, []);

    return (
        <div style={{display: "flex", gap: isMobile ? gap : mobileGap, flexDirection: "column"}}>
            <img style={{width: "100%"}} src={`${process.env.PUBLIC_URL}/DSC09248.jpg`}></img>
            <div style={{display: "flex", width: "100%", gap: isMobile ? gap : mobileGap}}>
                <img style={{flex: "1 1 0", width: "100%"}} src={`${process.env.PUBLIC_URL}/DSC00288.jpg`}/>
                <img style={{flex: "1 1 0", width: "100%"}} src={`${process.env.PUBLIC_URL}/DSC05089.jpg`}/>
            </div>
            <div style={{display: "flex", width: "100%", gap: isMobile ? gap : mobileGap}}>
                <img style={{flex: "1 1 0", width: "100%", objectFit: "cover", aspectRatio: "2/3"}} src={`${process.env.PUBLIC_URL}/DSC08484.jpg`}/>
                <img style={{flex: "2 1 0", width: "100%"}} src={`${process.env.PUBLIC_URL}/DSC08142.jpg`}/>
                <img style={{flex: "1 1 0", width: "100%"}} src={`${process.env.PUBLIC_URL}/DSC03352.jpg`}/>
            </div>
            <div style={{display: "flex", width: "100%", gap: isMobile ? gap : mobileGap}}>
                <img style={{flex: "1 1 0", width: "100%", height: "100%"}} src={`${process.env.PUBLIC_URL}/DSC05975.jpg`}/>
                <img style={{flex: "1 1 0", width: "100%"}} src={`${process.env.PUBLIC_URL}/DSC04273-Enhanced-NR.jpg`}/>
                <img style={{flex: "2 1 0", width: "100%", height: "100%", objectFit: "cover", aspectRatio: "4/3"}} src={`${process.env.PUBLIC_URL}/DSC07136.jpg`}/>
            </div>
        </div>
    )
}

export default Stills;