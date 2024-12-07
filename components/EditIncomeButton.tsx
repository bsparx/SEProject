"use client";

import { useState } from "react";
import { X, Edit2 } from "lucide-react";
import EditIncome from "./EditIncome";

export default function EditIncomeButton({ income }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button
        onClick={handleOpen}
        className="       
          border-2
          border-blue-700
          text-blue-600 
          hover:text-blue-800 
          transition-colors 
          duration-200 
          focus:outline-none 
          focus:ring-2 
          focus:ring-blue-300 
          rounded-full 
          p-1
        "
        aria-label="Edit Income"
      >
        <Edit2 size={18} />
      </button>

      {open && (
        <div
          className="
            fixed 
            inset-0 
            z-50 
            flex 
            items-center 
            justify-center 
            bg-black/40 
            backdrop-blur-sm 
            animate-fade-in
            p-4
          "
          onClick={handleClose}
        >
          <div
            className="
              relative 
              w-full 
              max-w-md 
              h-auto 
              max-h-[95vh] 
              bg-white 
              rounded-2xl 
              shadow-2xl 
              overflow-hidden
              transform 
              scale-100 
              animate-scale-up
            "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="
                absolute 
                top-4 
                right-4 
                z-10 
                text-gray-500 
                hover:text-gray-700 
                transition-colors 
                duration-200 
                focus:outline-none 
                focus:ring-2 
                focus:ring-red-300 
                rounded-full 
                p-1
              "
              aria-label="Close Modal"
            >
              <X size={24} />
            </button>
            <EditIncome income={income}/>
          </div>
        </div>
      )}
    </>
  );
}