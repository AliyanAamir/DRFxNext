import Searchbar from '@/Components/Navbar/components/Searchbar'
import {useState} from 'react'

export const Swag = () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const rows = [];
    let currentRow = [];
    items.forEach((item, index) => {
    currentRow.push(
      <div key={index} className="col bg-dark rounded" style={{maxWidth:'92px'}}>
        
      </div>
    );
    if ((index + 1) % 3 === 0) {
      rows.push(
        <div key={index} className="row gap-4 m-4" style={{height:'6rem'}}> 
          {currentRow}
        </div>
      );
      currentRow = [];
    }
  });
  if (currentRow.length > 0) {
    rows.push(
      <div key={items.length} className="row gap-4 m-4" style={{height:'6rem'}}> 
        {currentRow}
      </div>
    );
  }
  const [IsSwag, setIsSwag] = useState("shirt.png");
  
  return (
    <div className='row gap-5 w-100' style={{height:'400px'}}>
        <div className='col bg-dgray' style={{borderRadius:'10px'}}>
            <div className='d-flex justify-content-center mt-3 sticky-top mb-2'>
            <Searchbar />
            </div>
            <div className='overflow-auto' style={{maxHeight:'20rem'}}>
            {rows}
            </div>
             
        </div>
        <div className='col ' style={{borderRadius:'10px'}}>
            
            <img src={`/images/${IsSwag}`} alt="" className='w-100' style={{maxHeight:'25rem'}}/>
        </div >
        <div className='col bg-dgray ' style={{borderRadius:'10px'}} >
           <div style={{ maxHeight:"400px", marginTop:'10px'}} className="overflow-auto" >
           <div className='row gap-4 m-4' style={{height:'6rem'}}>
                <button className='col bg-white hov-btn rounded ' onClick={() =>setIsSwag('cap.png')}>
                    <img src="/Icons/cap.png" className='w-100'></img>
                </button>
                <button className='col bg-white hov-btn rounded ' onClick={() =>setIsSwag('mousepad.png')}>
                <img src="/Icons/mousepad.png" className='w-100'></img>
                </button>
                <button className='col bg-white hov-btn rounded ' onClick={() =>setIsSwag('hoodie.png')}>
                <img src="/Icons/hoodie.png" className='w-100'></img>
                </button>
                
                
            </div>
            <div className='row gap-4 m-4' style={{height:'6rem'}}>
                <button className='col bg-white hov-btn rounded ' onClick={() =>setIsSwag('shirt.png')}>
                <img src="/Icons/shirt.png" className='w-100'></img>
                </button>
                <button className='col bg-white hov-btn rounded ' onClick={() =>setIsSwag('mug.png')} >
                <img src="/Icons/mug.png" className='w-100'></img>
                </button>
                <button className='col bg-white hov-btn rounded ' onClick={() =>setIsSwag('bag.png')}>
                <img src="/Icons/bag-2.png" className='w-100'></img>
                </button>
                
                
            </div>
            <div className='row gap-4 m-4' style={{height:'6rem'}}>
                <button className='col bg-white hov-btn rounded '></button>
                <button className='col bg-white hov-btn rounded '></button>
                <button className='col bg-white hov-btn rounded '></button>
                
                
            </div>
            
            
           </div>
          
        <div >
              
        </div>  
        </div>
    </div>
  )
}
