"use client";
import { useState } from "react";
import Image from "next/image";
import DashboardComponent from "./DashboardComponent";

function InfluencerSetup3() {
  const [choose, setChoose] = useState(true);
  return (
    <>
      <div
        className={`w-[90%] flex justify-center items-center gap-10 my-10 ${
          choose ? "flex" : "hidden"
        } `}
      >
        <div className="w-[50%] text-white flex flex-col gap-4">
          <p className="text-3xl font-semibold mb-10">
            Give Your Niche Details
          </p>
          <div className="ml-2 flex flex-col gap-4">
            <div className="flex flex-col w-[70%]">
              <label className="mb-2">
                Your preferred niche (select multiple)
              </label>
              <input
                type="text"
                id="event-name"
                className="bg-[#27292D] rounded-xl p-2 outline-none"
              />
            </div>

            <div className="flex flex-col w-[70%]">
              <label className="mb-2">Select your main platform</label>
              <textarea className="bg-[#27292D] rounded-xl p-2 outline-none resize-none" />
            </div>

            <div className="flex flex-col w-[70%]">
              <label className="mb-2">
                Your follower count on main platform
              </label>
              <input
                type="text"
                id="event-name"
                className="bg-[#27292D] rounded-xl p-2 outline-none"
              />
            </div>
            <button
              className="bg-[#00B24F] px-4 py-2 text-white rounded-xl w-[30%]"
              onClick={() => {
                setChoose(false);
              }}
            >
              Finish Onboarding
            </button>
          </div>
        </div>
        <div className="w-[50%] rounded-2xl bg-[#15A145] flex justify-center items-center">
          <Image
            src="/User.svg"
            width="252"
            height="300"
            className="w-[75%]"
            alt="Ref3r logo"
          />
        </div>
      </div>
      {choose ? "" : <DashboardComponent />}
    </>
  );
}

export default InfluencerSetup3;
