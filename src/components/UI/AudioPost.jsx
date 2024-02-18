import React, { useEffect, useRef, useState } from "react";

const AudioPost = ({ audioUrl }) => {
  const canvasRef = useRef(null);
  const audioContextRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const initializeAudioAndVisualize = async () => {
    if (!isInitialized && typeof window !== "undefined") {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioContextRef.current = new AudioContext();

      if (audioContextRef.current.state === "suspended") {
        await audioContextRef.current.resume();
      }

      const fetchAudioAndVisualize = async () => {
        const response = await fetch(audioUrl);
        const arrayBuffer = await response.arrayBuffer();
        audioContextRef.current.decodeAudioData(arrayBuffer, (audioBuffer) => {
          const source = audioContextRef.current.createBufferSource();
          source.buffer = audioBuffer;
          source.loop = true;
          const analyser = audioContextRef.current.createAnalyser();
          source.connect(analyser);
          analyser.connect(audioContextRef.current.destination);
          visualize(analyser);
          source.start();
        });
      };

      await fetchAudioAndVisualize();
      setIsInitialized(true);
      setIsPlaying(true);
    }
  };

  const visualize = (analyser) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
    const barWidth = (WIDTH / bufferLength) * 2.5;

    const draw = () => {
      requestAnimationFrame(draw);
      analyser.getByteFrequencyData(dataArray);
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      let x = 0;
      for (let i = 0; i < bufferLength; i++) {
        const barHeight = dataArray[i];
        const r = barHeight + 25 * (i / bufferLength);
        const g = 250 * (i / bufferLength);
        const b = 50;
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
        x += barWidth + 1;
      }
    };
    draw();
  };

  return (
    <div className="flex flex-col items-center justify-center relative w-[370px] h-[350px]">
      <canvas ref={canvasRef} width="370" height="350" />
      {!isPlaying && (
        <button
          onClick={initializeAudioAndVisualize}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            borderRadius: "50%",
            border: "none",
            color: "white",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="41"
            viewBox="0 0 40 41"
            fill="none"
          >
            <path
              d="M40 20.1865C40 25.4909 37.8929 30.5779 34.1421 34.3287C30.3914 38.0794 25.3043 40.1865 20 40.1865C14.6957 40.1865 9.60859 38.0794 5.85786 34.3287C2.10714 30.5779 0 25.4909 0 20.1865C0 14.8822 2.10714 9.79512 5.85786 6.04439C9.60859 2.29366 14.6957 0.186523 20 0.186523C25.3043 0.186523 30.3914 2.29366 34.1421 6.04439C37.8929 9.79512 40 14.8822 40 20.1865V20.1865ZM16.975 12.919C16.7881 12.7859 16.5682 12.7069 16.3393 12.6905C16.1104 12.6741 15.8815 12.721 15.6775 12.8261C15.4736 12.9312 15.3024 13.0904 15.1829 13.2862C15.0634 13.4821 15.0001 13.7071 15 13.9365V26.4365C15.0001 26.666 15.0634 26.8909 15.1829 27.0868C15.3024 27.2827 15.4736 27.4419 15.6775 27.547C15.8815 27.652 16.1104 27.699 16.3393 27.6826C16.5682 27.6662 16.7881 27.5871 16.975 27.454L25.725 21.204C25.887 21.0884 26.0191 20.9357 26.1102 20.7588C26.2014 20.5818 26.2489 20.3856 26.2489 20.1865C26.2489 19.9875 26.2014 19.7913 26.1102 19.6143C26.0191 19.4373 25.887 19.2847 25.725 19.169L16.975 12.919V12.919Z"
              fill="#616161"
              fill-opacity="0.7"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default AudioPost;
