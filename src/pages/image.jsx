import React, { useState } from "react";
import Page from "../components/Layout/Page";

const fetchImageFromDalle = async (userPrompt) => {
  const basePrompt =
    "You are a New emoji creating wizard. Create a cool looking emoji for ";
  const fullPrompt = `${basePrompt} ${userPrompt}`; // Concatenate base prompt with user input

  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`, // Ensure to replace YOUR_API_KEY_HERE with your actual API key
    },
    body: JSON.stringify({ prompt: fullPrompt }),
  });

  const data = await response.json();
  return data;
};

const ImagePage = () => {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // State to control loading text

  const handleGenerateClick = async () => {
    setIsLoading(true); // Set loading to true when generation starts
    const result = await fetchImageFromDalle(prompt);
    setIsLoading(false); // Set loading to false once the image is fetched
    if (result && result.data && result.data[0] && result.data[0].url) {
      setImage(result.data[0].url); // Assuming the API returns an array with at least one item containing an image URL
    } else {
      console.log("Error: No image returned from DALL·E API");
      // Handle error or show a message to the user
    }
  };

  return (
    <Page>
      <div className="flex flex-col items-center justify-center p-4">
        <textarea
          className="textarea textarea-bordered w-full max-w-lg p-2"
          placeholder="Enter your prompt here"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        ></textarea>
        <button
          className="btn btn-primary mt-4"
          onClick={handleGenerateClick}
          disabled={isLoading} // Disable the button while loading
        >
          Generate
        </button>
        {isLoading && <div className="text-lg mt-4">Loading...</div>}
        {image && (
          <div className="mt-4">
            <img
              src={image}
              alt="Generated from DALL·E"
              className="max-w-full max-h-96" // Tailwind classes for max width and height
            />
          </div>
        )}
      </div>
    </Page>
  );
};

export default ImagePage;
