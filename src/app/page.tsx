"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Home() {
  const [inputVal, setInputVal] = useState("");
  const { push } = useRouter();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${inputVal}`);
  };
  return (
    <div className="grid items-center text-center m-20">
      <div>
        <h1 className=" text-3xl">Enter your Name</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type Your Name.."
          value={inputVal}
          className=" text-gray-700 text-2xl p-4 rounded-3xl m-4"
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button
          type="submit"
          className=" shadow-xl bg-slate-900 p-5 rounded-3xl"
        >
          Predict Data
        </button>
      </form>
    </div>
  );
}
