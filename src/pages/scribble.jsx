import React, { useEffect, useRef, useState } from "react";
import Page from "../components/Layout/Page";

const ScribblePage = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [penColor, setPenColor] = useState("#000000");

  // Dynamically set canvas size
  const setCanvasSize = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth - 40; // Adjust based on your page's padding/margin
      canvas.height = window.innerHeight - 200; // Adjust based on your page's header/footer height
    }
  };

  useEffect(() => {
    setCanvasSize();
    // Add event listener to resize canvas on window resize
    window.addEventListener("resize", setCanvasSize);
    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  const getCoordinates = (event) => {
    if (event.touches) {
      // For touch events
      const canvas = canvasRef.current;
      return {
        offsetX: event.touches[0].clientX - canvas.getBoundingClientRect().left,
        offsetY: event.touches[0].clientY - canvas.getBoundingClientRect().top,
      };
    } else {
      // For mouse events
      return {
        offsetX: event.nativeEvent.offsetX,
        offsetY: event.nativeEvent.offsetY,
      };
    }
  };

  const startDrawing = (event) => {
    const { offsetX, offsetY } = getCoordinates(event);
    const ctx = canvasRef.current.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = (event) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = getCoordinates(event);
    const ctx = canvasRef.current.getContext("2d");
    ctx.lineTo(offsetX, offsetY);
    ctx.strokeStyle = penColor;
    ctx.stroke();
  };

  const stopDrawing = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.closePath();
    setIsDrawing(false);
  };

  const saveDrawing = () => {
    const canvas = canvasRef.current;
    const image = canvas.toDataURL("image/png");
    const newImg = document.createElement("img");
    newImg.src = image;
    document.body.appendChild(newImg); // Consider adjusting this to fit your app's flow
  };

  return (
    <Page>
      <div className="flex flex-col items-center justify-center p-4">
        <select
          value={penColor}
          onChange={(e) => setPenColor(e.target.value)}
          className="mb-4 select select-bordered w-full max-w-xs"
        >
          <option value="#000000">Black</option>
          <option value="#ff0000">Red</option>
          <option value="#00ff00">Green</option>
          <option value="#0000ff">Blue</option>
        </select>
        <div
          className="canvas-container"
          style={{ width: "100%", overflow: "hidden" }}
        >
          <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
            className="border-2 border-gray-300"
          />
        </div>
        <button onClick={saveDrawing} className="btn btn-primary mt-4">
          Save
        </button>
      </div>
    </Page>
  );
};

export default ScribblePage;
