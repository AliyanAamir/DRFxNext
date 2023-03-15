import { useState, useEffect } from 'react';

export default function Quality() {
    const [isQualityExpanded, setIsQualityExpanded] = useState(false);

  useEffect(() => {
    const containerq = document.getElementById('containerq');
    const contentq = document.getElementById('contentq');
    if (isQualityExpanded) {
      containerq.style.height = `${contentq.offsetHeight}px`;
    } else {
      containerq.style.height = 0;
    }
  }, [isQualityExpanded]);

  const handleisQualityExpanded = () => {
    setIsQualityExpanded(prev => !prev);
  }

  return (
    <>
    <div className=" font-ksroam h2  pointer">
      <button onClick={handleisQualityExpanded} style={{border:'0px solid transparent', backgroundColor:'white'}}>{isQualityExpanded ? "-" : "+"} 100% Quality</button>
      <div id="containerq" className="content-container-toggle">
        <div id="contentq" className="content-toggle">
        
            {isQualityExpanded && (
              <p className="font-opensans text-base h6 mt-2 ">
                Each print is made and inspected by us to guarantee quality
                every step of the way. From sourcing the best materials for our
                products to the inks we use in our prints. We make sure each
                print that leaves our shop is vivid and long lasting.
              </p>
            )}
        </div>
      </div>
        <hr />
    </div>
   
        
    </>


  )
}
