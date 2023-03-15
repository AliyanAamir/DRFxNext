import Searchbar from "@/Components/Navbar/components/Searchbar";
import { useState } from "react";
import ImageDrag from "./ImageDrag";
import SelectSize from "./Selectsize";

export const Swag = () => {
  const [IsSwag, setIsSwag] = useState("shirt.png");
  const [selectedColor, setSelectedColor] = useState('');
  const [IsNFT, setIsNFT] = useState("/No-NFT/nonft.png");
  const [NFTbackup,setNFTbackup] = useState("")
  const [isChecked, setIsChecked] = useState(false);

 

  
  const imagesContext = require.context(
    "/public/Nfts",
    true,
    /\.(jpg|jpeg|png|gif|bmp)$/
  );
  

  


  const imagesSet = new Set();
  imagesContext.keys().forEach((imagePath) => {
    imagesSet.add(imagesContext(imagePath).default.src);
  });

  const images = [...imagesSet];

  const rows = [];
  let currentRow = [];
  images.forEach((item, index) => {
    currentRow.push(
      <div key={index} className="col  rounded" style={{ maxWidth: "92px" }}>
        <img
          src={item}
          className="rounded hov-btn "
          style={{ height: "6rem", width: "6rem" }}
          onClick={() => {
            setIsNFT(item)
            setNFTbackup(item)
            if (isChecked){
              setIsChecked(prev => !prev)

            }
          }}           
        />
      </div>
    );
    if ((index + 1) % 3 === 0) {
      rows.push(
        <div key={index} className="row gap-4 m-4" style={{ height: "6rem" }}>
          {currentRow}
        </div>
      );
      currentRow = [];
    }
  });
  if (currentRow.length > 0) {
    rows.push(
      <div
        key={images.length}
        className="row gap-4 m-4"
        style={{ height: "6rem" }}
      >
        {currentRow}
      </div>
    );
  };



  function RemoveBackground() {
  
  const formData = new FormData()
  
 
  // Fetch the image from the URL and convert it to a blob
  fetch(IsNFT)
    .then((res) => res.blob())
    .then((blob) => {
      // Add the blob to the form data
      formData.append('image', blob, 'image.png')
      formData.append('size', 'auto')

      // Send the request to the remove.bg API
      fetch('http://localhost:8000/remove_bg/', {
          method: 'POST',
          body: formData
        })
        .then((res) => res.blob())
        .then((blob) => {
          const reader = new FileReader();
          reader.onloadend = () => setIsNFT(reader.result)
          reader.readAsDataURL(blob); 
        })
        .catch((error) => console.error(error))

    })
    .catch((error) => console.error(error))

  }


  return (
    <div>
      <div className="row gap-5 mobile-row">
        <div className="col-sm bg-dgray" style={{ borderRadius: "10px" }}>
        
          <div className="overflow-auto mt-3">
          <Searchbar/>
            {rows}
          </div>
        </div>
        <div className="col-sm">
          
          <div className="row">
            
            <ImageDrag main={IsSwag} nft={IsNFT} />
            
          </div>
        </div>
        <div className="col-sm bg-dgray" style={{ borderRadius: "10px" }}>
          <div
            style={{ maxHeight: "400px", marginTop: "10px" }}
            className="overflow-auto"
          >
            <div className="row gap-4 m-4 box-mobile" style={{ height: "6rem" }}>
              <button
                className="col bg-white hov-btn rounded "
                onClick={() => setIsSwag("cap.png")}
              >
                <img src="/Icons/cap.png" className="w-100"></img>
              </button>
              <button
                className="col bg-white hov-btn rounded "
                onClick={() => setIsSwag("mousepad.png")}
              >
                <img src="/Icons/mousepad.png" className="w-100"></img>
              </button>
              <button
                className="col bg-white hov-btn rounded "
                onClick={() => setIsSwag("hoodie.png")}
              >
                <img src="/Icons/hoodie.png" className="w-100"></img>
              </button>
            </div>
            <div className="row gap-4 m-4" style={{ height: "6rem" }}>
              <button
                className="col bg-white hov-btn rounded "
                onClick={() => setIsSwag("shirt.png")}
              >
                <img src="/Icons/shirt.png" className="w-100"></img>
              </button>
              <button
                className="col bg-white hov-btn rounded "
                onClick={() => setIsSwag("mug.png")}
              >
                <img src="/Icons/mug.png" className="w-100"></img>
              </button>
              <button
                className="col bg-white hov-btn rounded "
                onClick={() => setIsSwag("bag.png")}
              >
                <img src="/Icons/bag-2.png" className="w-100"></img>
              </button>
            </div>
            <div className="row gap-4 m-4" style={{ height: "6rem" }}>
              <button className="col bg-white hov-btn rounded "></button>
              <button className="col bg-white hov-btn rounded "></button>
              <button className="col bg-white hov-btn rounded "></button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col col-md-6  text-end big">
            Remove Background
          </div>
          <div className="col col-md-6  text-start ">
            <label className="switch " >
              <input type="checkbox" onChange={(e) => {
                setIsChecked(prev=>!prev)
                if(!isChecked){
                  RemoveBackground()
                }else{
                  setIsNFT(NFTbackup) 
                }
                
              }} checked={isChecked} />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col col-md-6  text-end  big">
            Size
          </div>
          <div className="col col-md-6 d-flex gap-3 text-start ">
            <SelectSize/>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col col-md-6  text-end  big">
            Color
          </div>
          <div className="col col-md-6  text-start ">
          <button
        onClick={() => setSelectedColor('Black')}
        style={{ border: selectedColor === 'Black' ? '2px solid black' : '1px solid black' }}
        className="btn rounded-0 fw-bold"
      >
        Black
      </button>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col col-md-6  text-end  " style={{alignSelf: "center"}}>
            <span className="big" ><img src="/Icons/ethereum.png" width="20"/>{"  "}0.025</span>
          </div>
          <div className="col col-md-3  text-start ">
            <div
              className="btn bg-dark text-white  d-flex  justify-content-center "
              style={{ borderRadius: "10rem" ,width:'60%'}}
            >
              <div
                className="bg-white"
                style={{
                  borderRadius: "100%",
                  maxWidth:'30px',
                  marginRight: "20px",
                }}
              >
                <img
                  style={{ height: "30px", marginTop: "4px" }}
                  src="/Icons/add-to-cart.png"
                />
              </div>
              <h4 className="font-ksroam">Add in cart</h4>
            </div>
          </div>
        </div>
        <div className="row mt-4 big fw-bold">
          <div className="col-12">{`NFT: Gutter Birds #1669`}</div>
          <div className="col-12">{`Swag: Premium T-Shirt — Rock NFTs printed in style. This updated essential unisex T shirt fits like a well-loved favorite, featuring a crew neck, short sleeves and designed with superior Airlume combed and ring-spun cotton.`}</div>
        </div>
      </div>
    </div>
  );
};
