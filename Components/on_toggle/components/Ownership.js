import { useState, useEffect } from 'react';

export default function Ownership() {
    const [isOwnershipExpanded, setIsOwnershipExpanded] = useState(false);

  useEffect(() => {
    const containero = document.getElementById('containero');
    const contento = document.getElementById('contento');
    if (isOwnershipExpanded) {
      containero.style.height = `${contento.offsetHeight}px`;
    } else {
      containero.style.height = 0;
    }
  }, [isOwnershipExpanded]);

  const handleIsOwnershipExpanded = () => {
    setIsOwnershipExpanded(prev => !prev);
  }

  return (
    <>
    <div className=" font-ksroam h2  pointer">
      <button onClick={handleIsOwnershipExpanded} style={{border:'0px solid transparent', backgroundColor:'white'}}>{isOwnershipExpanded ? "-" : "+"} 100% Ownership</button>
      <div id="containero" className="content-container-toggle">
        <div id="contento" className="content-toggle">
        
            {isOwnershipExpanded && (
              <p className="font-opensans text-base h6 mt-2 ">
              When you rock CryptaPrint swag, you rock proof of ownership. The only way to print your NFT is to own the IP. No right-click savers allowed!


              </p>
            )}
        </div>
      </div>
        <hr />
    </div>
   
        
    </>


  )
}