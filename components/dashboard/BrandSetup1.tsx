"use client";
import { useState } from "react";
import Image from "next/image";
import BrandSetup2 from "./BrandSetup2";

function BrandSetup1() {
  const [choose, setChoose] = useState(true);
  
  return (
    <>
      <div
        className={`w-[90%] justify-center gap-10 ${
          choose ? "flex" : "hidden"
        } `}
      >
        <div className="w-[50%] text-white flex flex-col gap-4 my-10">
          <p className="text-3xl font-semibold">Brand Account Setup</p>
          <p>Give your brand details</p>
          <div className="ml-2 flex flex-col gap-4">
            <div className="w-[15%]">
              <label className="mb-2 cursor-pointer">
                Brand Logo
                <input
                  type="file"
                  name="file_upload"
                  id=""
                  className="hidden"
                />
                <Image
                  src="/LogoUpload.svg"
                  width="252"
                  height="300"
                  className="w-full"
                  alt="Ref3r logo"
                />
              </label>
            </div>

            <div className="flex flex-col w-[70%]">
              <label className="mb-2">Brand Name</label>
              <input
                type="text"
                id="event-name"
                placeholder="Name"
                className="bg-[#27292D] rounded-xl p-2 outline-none"
              />
            </div>

            <div className="flex flex-col w-[70%]">
              <label className="mb-2">Brand Description</label>
              <textarea
                placeholder="Description..."
                rows={4}
                className="bg-[#27292D] rounded-xl p-2 resize-none outline-none"
              />
            </div>

            <div className="flex flex-col w-[70%]">
              <label className="mb-2">Website Link</label>
              <input
                type="url"
                id="event-name"
                placeholder="Link"
                className="bg-[#27292D] rounded-xl p-2 outline-none"
              />
            </div>

            <div className="flex flex-col w-[70%]">
              <label className="mb-2">Address (Optional)</label>
              <input
                type="text"
                id="event-name"
                placeholder="Address"
                className="bg-[#27292D] rounded-xl p-2 outline-none"
              />
            </div>

            <div className="flex flex-col w-[70%]">
              <label className="mb-2">
                Business Registration Code (Optional)
              </label>
              <input
                type="text"
                id="event-name"
                placeholder="Code"
                className="bg-[#27292D] rounded-xl p-2 outline-none"
              />
            </div>
            <button
              className="bg-[#00B24F] px-4 py-2 text-[0.8rem] text-white rounded-2xl md:rounded-lg w-[30%]"
              onClick={() => {
                setChoose(false);
              }}
            >
              Save Details
            </button>
          </div>
        </div>
        
        <div className="w-[50%] h-[94vh] top-[3%] sticky rounded-2xl bg-[#15A145] flex justify-center items-center">
          <Image
            src="/Spaceship.svg"
            width="252"
            height="300"
            className="w-[100%]"
            alt="Ref3r logo"
          />
        </div>
      </div>
      {choose ? "" : <BrandSetup2 />}
    </>
  );
}

export default BrandSetup1;
