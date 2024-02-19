import { NextRequest, NextResponse } from "next/server";
import Replicate from "replicate";

export const config = {
  runtime: "edge",
};

const replicate = new Replicate({
  auth: process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN || "",
});

export default async function handler(req: NextRequest) {
  const output = await replicate.run(
    "riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05",
    {
      input: {
        alpha: 0.5,
        prompt_a: "funky synth solo",
        prompt_b: "90's rap",
        denoising: 0.75,
        seed_image_id: "vibes",
        num_inference_steps: 50,
      },
    }
  );
  // const output = {
  //   audio:
  //     "https://replicate.delivery/pbxt/SCiO1SBkqj7gL5cTsq8AXz5pIwPajeiWbb9s17KtyQ2G3OFIA/gen_sound.wav",
  //   spectrogram:
  //     "https://replicate.delivery/pbxt/Pf3CLnkdRL3wDyehyATO9xJA9X8dvkQX8ZcGweoBIHuGJ6vkA/spectrogram.jpg",
  // };
  return NextResponse.json(output);
}
