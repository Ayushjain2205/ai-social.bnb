import React, { useState, useCallback } from "react";
import Page from "../components/Layout/Page";
import { toast } from "react-hot-toast";
import AudioPost from "../components/UI/AudioPost";

const Generate = () => {
  const [prompt, setPrompt] = useState(""); // State to hold the user's input
  const [musicUrl, setMusicUrl] = useState(""); // State to hold the generated music URL
  const [isLoading, setIsLoading] = useState(false); // State to indicate loading status

  const fetchMusic = useCallback(async () => {
    if (!prompt.trim()) {
      toast.error("Prompt cannot be empty");
      return;
    }
    console.log(musicUrl);

    setIsLoading(true);
    try {
      // Call the Next.js API route instead of the Replicate API directly
      const response = await fetch("/api/generate-music", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt_a: prompt, // Use user's prompt
          // You can include other parameters if your API route is designed to accept them
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to generate music");
      }

      // Assuming the API route returns a JSON object with a `audio` URL
      setMusicUrl(data.audio); // Use the returned audio URL
      console.log(data.audio);
    } catch (error) {
      console.error("Error fetching music:", error);
      toast.error("An error occurred while fetching music.");
    } finally {
      setIsLoading(false);
      setPrompt(""); // Optionally clear prompt after fetching
    }
  }, [prompt]);

  const handleRedo = () => {
    setMusicUrl(""); // Clear generated music URL
    setPrompt(""); // Clear the prompt
  };

  return (
    <Page back="/create">
      <div className="relative flex flex-col p-[10px] mt-[20px] mb-[60px]">
        <p className="text-primary text-[20px]">TUNESSSSS</p>
        <p className="text-primary text-[12px] leading-[20px] mt-[12px]">
          users generate fun audio of all genres
        </p>
        <p className="text-black text-[12px] mt-[26px]">
          Keyword (output you expect?)
        </p>
        <div className="flex-none mt-[8px]">
          <div className="flex flex-row items-center pr-[12px] rounded-[6px] border-[0.5px] border-[#909090] bg-transparent w-full h-[40px]">
            <input
              className="bg-transparent w-full p-[18px] focus:outline-none text-[12px]"
              type="text"
              placeholder="Enter your prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button
              onClick={fetchMusic} // Use a button for accessibility
              disabled={isLoading} // Disable while loading
              className="flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M0.417969 3.84033C0.417969 3.04468 0.734039 2.28162 1.29665 1.71901C1.85926 1.1564 2.62232 0.840332 3.41797 0.840332L21.418 0.840332C22.2136 0.840332 22.9767 1.1564 23.5393 1.71901C24.1019 2.28162 24.418 3.04468 24.418 3.84033V21.8403C24.418 22.636 24.1019 23.399 23.5393 23.9617C22.9767 24.5243 22.2136 24.8403 21.418 24.8403H3.41797C2.62232 24.8403 1.85926 24.5243 1.29665 23.9617C0.734039 23.399 0.417969 22.636 0.417969 21.8403V3.84033ZM8.66797 18.8403C8.66793 18.9849 8.70968 19.1264 8.78818 19.2478C8.86669 19.3692 8.97861 19.4653 9.11047 19.5246C9.24233 19.5839 9.38851 19.6038 9.53142 19.5819C9.67433 19.56 9.80787 19.4973 9.91597 19.4013L16.666 13.4013C16.7453 13.331 16.8088 13.2446 16.8522 13.1479C16.8957 13.0512 16.9182 12.9464 16.9182 12.8403C16.9182 12.7343 16.8957 12.6295 16.8522 12.5328C16.8088 12.4361 16.7453 12.3497 16.666 12.2793L9.91597 6.27933C9.80787 6.18334 9.67433 6.12063 9.53142 6.09876C9.38851 6.07689 9.24233 6.09679 9.11047 6.15607C8.97861 6.21534 8.86669 6.31146 8.78818 6.43286C8.70968 6.55426 8.66793 6.69576 8.66797 6.84033V18.8403Z"
                  fill="#909090"
                />
              </svg>
            </button>
          </div>
        </div>
        <p className="text-[10px] text-black opacity-80 mt-[6px]">
          Suggestion: uk rap & psy
        </p>

        {isLoading && <p className="mt-4 text-center">Generating...</p>}
        {musicUrl && <AudioPost audioUrl={musicUrl} />}

        <div className="fixed bg-white bottom-0 flex w-full justify-between p-[10px]">
          <button
            onClick={handleRedo}
            className="bg text-primary h-[40px] w-[35px] "
          >
            Redo
          </button>
          <button className="bg-[#262626] text-white h-[40px] w-[133px] rounded-[8px] mr-[10px]">
            Post
          </button>
        </div>
      </div>
    </Page>
  );
};

export default Generate;
