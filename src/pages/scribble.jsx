import React, { useEffect, useRef, useState } from "react";
import Page from "../components/Layout/Page";
import Head from "next/head";

const ScribblePage = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [penColor, setPenColor] = useState("#000000"); // Initial pen color
  const [penWidth, setPenWidth] = useState(5); // Initial pen width
  const [imageSrc, setImageSrc] = useState(""); // For storing the drawn image
  const [showCanvas, setShowCanvas] = useState(true); // Toggle between canvas and image view

  // Dynamically set canvas size with a fixed height
  const setCanvasSize = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = Math.min(window.innerWidth - 40, 800); // Dynamic width with a max limit
      canvas.height = 400; // Fixed height
    }
  };

  useEffect(() => {
    setCanvasSize();
    // Adjust canvas size on window resize
    window.addEventListener("resize", setCanvasSize);
    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  const getCoordinates = (event) => {
    if (event.touches) {
      // Handle touch events
      const canvas = canvasRef.current;
      return {
        offsetX: event.touches[0].clientX - canvas.getBoundingClientRect().left,
        offsetY: event.touches[0].clientY - canvas.getBoundingClientRect().top,
      };
    } else {
      // Handle mouse events
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
    ctx.lineWidth = penWidth; // Use penWidth state for the line width
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
    setImageSrc(image);
    setShowCanvas(false); // Switch to image view
  };

  const handleRedraw = () => {
    setImageSrc("");
    setShowCanvas(true); // Switch back to canvas view
    setTimeout(() => {
      // Ensure canvas size is recalculated after it becomes visible again
      setCanvasSize();
    }, 0); // Timeout ensures this runs after the state update has taken effect
  };

  return (
    <Page back="/">
      <Head>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/inobounce/0.2.1/inobounce.min.js"
          integrity="sha512-Yqdl0nKSSuorWbQ4S9gPMG4THi/meaKxojlnfsak9isATD+dYT2/e7YLw6GyqR1W5uk9rSmv7v4Uu9keCvbYAQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        ></script>
      </Head>
      <div className="flex flex-col items-center justify-center p-4">
        {showCanvas ? (
          <>
            <div className="flex flex-wrap items-center justify-center mb-4">
              <label className="mr-2">Pen Color:</label>
              <input
                type="color"
                value={penColor}
                onChange={(e) => setPenColor(e.target.value)}
                className="mr-4"
              />
              <label className="mr-2">Pen Size:</label>
              <input
                type="range"
                min="1"
                max="20"
                value={penWidth}
                onChange={(e) => setPenWidth(e.target.value)}
                className="w-32"
              />
            </div>
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
                style={{ touchAction: "none" }} // Prevent scrolling on touch devices
              />
            </div>
            <button onClick={saveDrawing} className="btn btn-primary mt-4">
              Save
            </button>
          </>
        ) : (
          <>
            <img
              src={imageSrc}
              alt="Saved Drawing"
              className="max-w-full max-h-96 mt-4"
            />
            <button onClick={handleRedraw} className="btn btn-primary mt-4">
              Redraw
            </button>
          </>
        )}
      </div>
    </Page>
  );
};

export default ScribblePage;
