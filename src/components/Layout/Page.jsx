import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { SmartWallet, useAddress, useWallet } from "@thirdweb-dev/react";

const Page = ({
  children,
  back = false,
  isGridView = false,
  color = "#fff",
  topBar = true,
}) => {
  const router = useRouter(); // Initialize useRouter hook
  const address = useAddress();
  const wallet = useWallet();

  // useEffect(() => {
  //   // Check if the user is not connected or does not have a SmartWallet instance
  //   if (!address || !(wallet instanceof SmartWallet)) {
  //     router.push("/wallet"); // Redirect to the login page
  //   }
  // }, [address, wallet, router]);

  const childContentClasses = isGridView
    ? "absolute top-0 w-full"
    : "mt-[56px] w-full";

  // Function to handle back navigation, if back prop is provided
  const handleBackClick = () => {
    if (back) {
      router.push(back); // Navigate to the provided back link
    }
  };

  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <div
      className="relative flex flex-col items-center h-[665px] w-[390px]"
      style={{ backgroundColor: color }}
    >
      {topBar && (
        <div className="flex flex-row w-full justify-between absolute top-0 pt-[12px] px-[16px] z-50">
          {/* Conditionally render back arrow or an empty div to maintain layout */}
          {back ? (
            <div
              className="flex flex-col items-center justify-center w-[40px] h-[40px] rounded-full bg-[#616161] opacity-80 cursor-pointer"
              onClick={handleBackClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.8926 12.6653C22.8926 12.4663 22.8136 12.2756 22.6729 12.1349C22.5323 11.9943 22.3415 11.9153 22.1426 11.9153H4.45308L9.17358 7.19625C9.31441 7.05542 9.39353 6.86442 9.39353 6.66525C9.39353 6.46609 9.31441 6.27508 9.17358 6.13425C9.03275 5.99342 8.84174 5.91431 8.64258 5.91431C8.44341 5.91431 8.25241 5.99342 8.11158 6.13425L2.11158 12.1343C2.04173 12.2039 1.98632 12.2867 1.94851 12.3778C1.9107 12.4689 1.89124 12.5666 1.89124 12.6653C1.89124 12.7639 1.9107 12.8616 1.94851 12.9527C1.98632 13.0438 2.04173 13.1266 2.11158 13.1963L8.11158 19.1963C8.25241 19.3371 8.44341 19.4162 8.64258 19.4162C8.84174 19.4162 9.03275 19.3371 9.17358 19.1963C9.31441 19.0554 9.39353 18.8644 9.39353 18.6653C9.39353 18.4661 9.31441 18.2751 9.17358 18.1343L4.45308 13.4153H22.1426C22.3415 13.4153 22.5323 13.3362 22.6729 13.1956C22.8136 13.0549 22.8926 12.8642 22.8926 12.6653Z"
                  fill="white"
                />
              </svg>
            </div>
          ) : (
            // Render an empty div with the same dimensions to maintain layout
            <div className="w-[40px] h-[40px]"></div>
          )}
          <div className="flex flex-row gap-[20px]">
            <div className="flex flex-col w-[90px] h-[40px] rounded-full bg-[#616161] opacity-80">
              <div className="flex flex-row h-full gap-[14px] items-center justify-center">
                <img src="/icons/coin.svg" alt="" />
                <span className="text-white text-[14px]">230</span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-[40px] h-[40px] rounded-full bg-[#616161] opacity-80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="15"
                viewBox="0 0 17 15"
                fill="none"
                onClick={toggleDropdown}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.0400391 13.3101C0.0400391 13.1111 0.119057 12.9204 0.259709 12.7797C0.400361 12.6391 0.591127 12.5601 0.790039 12.5601H15.79C15.989 12.5601 16.1797 12.6391 16.3204 12.7797C16.461 12.9204 16.54 13.1111 16.54 13.3101C16.54 13.509 16.461 13.6997 16.3204 13.8404C16.1797 13.981 15.989 14.0601 15.79 14.0601H0.790039C0.591127 14.0601 0.400361 13.981 0.259709 13.8404C0.119057 13.6997 0.0400391 13.509 0.0400391 13.3101ZM0.0400391 7.31006C0.0400391 7.11115 0.119057 6.92038 0.259709 6.77973C0.400361 6.63908 0.591127 6.56006 0.790039 6.56006H15.79C15.989 6.56006 16.1797 6.63908 16.3204 6.77973C16.461 6.92038 16.54 7.11115 16.54 7.31006C16.54 7.50897 16.461 7.69974 16.3204 7.84039C16.1797 7.98104 15.989 8.06006 15.79 8.06006H0.790039C0.591127 8.06006 0.400361 7.98104 0.259709 7.84039C0.119057 7.69974 0.0400391 7.50897 0.0400391 7.31006ZM0.0400391 1.31006C0.0400391 1.11115 0.119057 0.920381 0.259709 0.779729C0.400361 0.639076 0.591127 0.560059 0.790039 0.560059H15.79C15.989 0.560059 16.1797 0.639076 16.3204 0.779729C16.461 0.920381 16.54 1.11115 16.54 1.31006C16.54 1.50897 16.461 1.69974 16.3204 1.84039C16.1797 1.98104 15.989 2.06006 15.79 2.06006H0.790039C0.591127 2.06006 0.400361 1.98104 0.259709 1.84039C0.119057 1.69974 0.0400391 1.50897 0.0400391 1.31006Z"
                  fill="white"
                />
              </svg>
            </div>
            {showDropdown && (
              <div className="flex flex-col gap-[10px] w-[150px] absolute top-[60px] right-[20px] bg-white opacity-100 shadow-md rounded-lg p-4 z-50">
                <Link href="/">Explore</Link>
                <Link href="/create">Create</Link>
                <Link href="/profile">My Profile</Link>
              </div>
            )}
          </div>
        </div>
      )}

      <div className={childContentClasses}>{children}</div>
    </div>
  );
};

export default Page;
