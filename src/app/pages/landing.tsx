"use client";
import React from "react";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
function LandingPage() {
  const { push } = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/`);
  };
  return (
    <div>
      <div className="  gap-10 flex justify-center">
        <button onClick={handleSubmit}>prediction</button>
      </div>
      <div>
        <motion.div
          className="container"
          initial={{ scale: 0 }}
          animate={{ rotate: 180, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        />
      </div>
    </div>
  );
}

export default LandingPage;
