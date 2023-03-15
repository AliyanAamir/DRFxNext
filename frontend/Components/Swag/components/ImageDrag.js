import React, { useState, useRef } from 'react';
import Image from './Image';


export default function ImageDrag({main,nft}) {
  const [position, setPosition] = useState({ x: 130, y: 130 });
  const [isDragging, setIsDragging] = useState(false);
  const draggableRef = useRef(null);
  const parentRef = useRef(null);

  const handleMouseDown = (event) => {
    event.preventDefault()
    setIsDragging(true);
  };

  const handleMouseMove = (event) => {
    event.preventDefault()
    if (isDragging) {
      const parentRect = parentRef.current.getBoundingClientRect();
      const draggableRect = draggableRef.current.getBoundingClientRect();

      const newPosition = {
        x: event.clientX - draggableRect.width / 2 - parentRect.left,
        y: event.clientY - draggableRect.height / 2 - parentRect.top,
      };

      // Check if the draggable div is within its parent bounds
      if (
        newPosition.x >= 0 &&
        newPosition.y >= 0 &&
        newPosition.x + draggableRect.width <= parentRect.width &&
        newPosition.y + draggableRect.height <= parentRect.height
      ) {
        setPosition(newPosition);
      }
    }
  };

  const handleMouseUp = (event) => {
    event.preventDefault()
    setIsDragging(false);
  };

  return (
    <div
      ref={parentRef}
      style={{
       
        
        position: 'relative',
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseUp}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseDown}
    >
      
      <Image image={main} />
      <img src={nft}
        ref={draggableRef}
        className="rounded"
        style={{
          width: 120,
          height: 120,
          position: 'absolute',
          border:'0px solid transparent',
          
          top: position.y,
          left: position.x,
          cursor: 'move',
        }}
        
        
      />
    </div>
  );
}
