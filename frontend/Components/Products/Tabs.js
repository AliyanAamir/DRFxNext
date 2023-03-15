import React from 'react'
import Review from './Review'

export const Tabs = ({color}) => {
  return (
   <>

    <ul className="nav justify-content-center nav-tabs justify-content-start" id="myTab" role="tablist" style={{border:'0px'}}>
  <li className="nav-item hover-underline-animation" role="presentation" >
    <button style={{border:'0px'}} className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">DESCRIPTION</button>
  </li>
  <li className="nav-item hover-underline-animation" role="presentation">
    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false" style={{border:'0px'}}>ADDITIONAL INFORMATION</button>
  </li>
  <li className="nav-item hover-underline-animation" role="presentation">
    <button style={{border:'0px'}} className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane"  role="tab" aria-controls="contact-tab-pane" aria-selected="false">REVIEWS</button>
  </li>

</ul>

<div className="tab-content mt-5" style={{paddingLeft:'15%', paddingRight:'15%'}} id="myTabContent">
  <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et fermentum lorem, eu maximus arcu. Etiam feugiat lorem justo, quis tempor erat tincidunt ac. Aenean elementum felis a commodo dictum. Nunc nisl arcu, tempus id scelerisque sed, pretium non leo. Nullam nibh metus, tristique sit amet urna placerat, dapibus elementum nisi. Phasellus finibus ultrices nulla, eu sollicitudin lacus vestibulum eget. Cras rutrum malesuada tincidunt. Proin varius magna in euismod maximus. Nam vel imperdiet dui, eu lobortis turpis. Etiam egestas metus nec molestie faucibus. Aenean nec sapien quis dui semper semper. Phasellus ornare molestie scelerisque. Curabitur rutrum rutrum nulla a auctor. Quisque vel massa congue, dignissim lorem a, efficitur ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Nam non nunc tempus, bibendum urna eget, pellentesque massa. Nam eget tempor nisi. Aliquam vehicula blandit faucibus. Vivamus sit amet tortor id ligula condimentum dignissim. Morbi sodales nibh non odio egestas gravida. Nam sodales augue at lorem sollicitudin, nec porta sapien euismod. Nunc eget elit imperdiet, ultricies mi id, maximus ex. Aliquam pulvinar pulvinar augue eu scelerisque. Aenean eu urna urna. Fusce mauris leo, interdum eu orci vel, consequat efficitur felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

Vivamus varius tempus consectetur. Donec odio diam, molestie eu leo in, hendrerit rhoncus est. Aenean at rutrum nunc, eget mollis leo. Aenean diam dolor, mattis vel quam id, molestie blandit mauris. Cras posuere nibh arcu, ornare vestibulum felis commodo vel. Suspendisse placerat ex ut ex pretium scelerisque. Morbi nec erat quis arcu condimentum mattis. Nulla imperdiet dolor quis pharetra volutpat. Cras et condimentum nibh, sit amet semper mauris. Pellentesque nec hendrerit est. Donec lobortis eleifend enim a lobortis. In hac habitasse platea dictumst. Integer mattis, neque vitae consequat varius, ligula dui porttitor risus, in aliquam ante mauris eget ligula. Pellentesque sollicitudin enim lacinia dignissim lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus eget suscipit mi.
</div>
  <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
    <div className='row'>

    </div>
    <div className='row mt-3 '>
        <div className='col-sm-3 h6 mobile-product-cat'>
            Weight
        </div>
        <div className='col mobile-product-cat'>
           0
        </div>
    </div>
    <div className='row mt-3'>
        <div className='col-sm-3 h6 mobile-product-cat'>
            Dimensions
        </div>
        <div className='col mobile-product-cat'>
           0
        </div>
    </div>
    <div className='row mt-3'>
        <div className='col-sm-3 h6 mobile-product-cat'>
            Size
        </div>
        <div className='col mobile-product-cat'>
0
        </div>
    </div>
    <div className='row mt-3'>
        <div className='col-sm-3 h6 mobile-product-cat'>
            Color
        </div>
        <div className='col mobile-product-cat'>
  {color.map((name, index) => (
    <span key={name}>
      {name}
      {index !== color.length - 1 && ", "}
    </span>
  ))}
</div>
    </div>
    <div className='row mt-3'>
        <div className='col-sm-3 h6 mobile-product-cat'>
            Storage
        </div>
        <div className='col-sm-3 mobile-product-cat'>
            0
        </div>
    </div>
    </div>
  <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">
    <Review/>
  </div>

</div>
</>

  )
}
