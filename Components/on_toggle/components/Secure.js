import { useState, useEffect } from 'react';

export default function Secure() {
    const [isSecureExpanded, setIsSecureExpanded] = useState(false);

  useEffect(() => {
    const containers = document.getElementById('containers');
    const contents = document.getElementById('contents');
    if (isSecureExpanded) {
      containers.style.height = `${contents.offsetHeight}px`;
    } else {
      containers.style.height = 0;
    }
  }, [isSecureExpanded]);

  const handleIsSecureExpanded = () => {
    setIsSecureExpanded(prev => !prev);
  }

  return (
    <>
    <div className=" font-ksroam h2  pointer">
      <button onClick={handleIsSecureExpanded} style={{border:'0px solid transparent', backgroundColor:'white'}}>{isSecureExpanded ? "-" : "+"} 100% Secure</button>
      <div id="containers" className="content-container-toggle">
        <div id="contents" className="content-toggle">
        
            {isSecureExpanded && (
              <p className="font-opensans text-base h6 mt-2 ">
               We utilize a web3 public API that does not interact with the blockchain. We capture NFT metadata to print ONLY the NFTs you own onto our premium apparel
              </p>
            )}
        </div>
      </div>
        <hr />
    </div>
   
        
    </>


  )
}