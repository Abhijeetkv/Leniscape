import React from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpeg';
import img5 from '../assets/img5.jpeg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.jpeg';
import img9 from '../assets/img9.jpg';
import img10 from '../assets/img10.jpg';
import img11 from '../assets/img11.jpg';
import img12 from '../assets/img12.jpg';
import img13 from '../assets/img13.jpg';
import img14 from '../assets/img14.jpg';
import img15 from '../assets/img15.jpg';
import img16 from '../assets/img16.jpg';

// Base image data (without position)
const baseImageData = [
  { id: 1, src: img1, alt: 'Image 1' },
  { id: 2, src: img2, alt: 'Image 2' },
  { id: 3, src: img3, alt: 'Image 3' },
  { id: 4, src: img4, alt: 'Image 4' },
  { id: 5, src: img5, alt: 'Image 5' },
  { id: 6, src: img6, alt: 'Image 6' },
  { id: 7, src: img7, alt: 'Image 7' },
  { id: 8, src: img8, alt: 'Image 8' },
  { id: 9, src: img9, alt: 'Image 9' },
  { id: 10, src: img10, alt: 'Image 10' },
  { id: 11, src: img11, alt: 'Image 11' },
  { id: 12, src: img12, alt: 'Image 12' },
  { id: 13, src: img13, alt: 'Image 13' },
  { id: 14, src: img14, alt: 'Image 14' },
  { id: 15, src: img15, alt: 'Image 15' },
  { id: 16, src: img16, alt: 'Image 16' },
];

// Helper to check if a cell or its 8 neighbors are occupied
const isOccupiedOrNeighbor = (row, col, occupied) => {
  for (let dr = -1; dr <= 1; dr++) {
    for (let dc = -1; dc <= 1; dc++) {
      const r = row + dr;
      const c = col + dc;
      if (occupied.has(`${r}-${c}`)) return true;
    }
  }
  return false;
};

// Generate positions with no adjacent neighbors
const generateNonAdjacentPositions = (count, maxRow = 20, maxCol = 8) => {
  const used = new Set();
  const positions = [];
  let attempts = 0;
  const maxAttempts = 10000;

  while (positions.length < count && attempts < maxAttempts) {
    const row = Math.floor(Math.random() * maxRow) + 1;
    const col = Math.floor(Math.random() * maxCol) + 1;

    if (!isOccupiedOrNeighbor(row, col, used)) {
      positions.push({ row, col });
      used.add(`${row}-${col}`);
    }

    attempts++;
  }

  return positions;
};

const ImageGrid = () => {
  const positions = generateNonAdjacentPositions(baseImageData.length);
  const imagesWithPositions = baseImageData.map((img, i) => ({
    ...img,
    r: positions[i]?.row ?? 1,
    c: positions[i]?.col ?? 1,
  }));

  return (
    <div className="grid grid-cols-8 grid-rows-20 gap-2 min-h-screen p-4">
      {imagesWithPositions.map((image) => (
        <div
          key={image.id}
          className="col-span-1 row-span-1 aspect-square"
          style={{
            gridColumnStart: image.c,
            gridRowStart: image.r,
          }}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
