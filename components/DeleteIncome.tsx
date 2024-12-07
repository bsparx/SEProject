"use client";

import { deleteExpense, deleteIncome } from "@/utils/crud";
import { useActionState } from "react";
import { Trash2, Loader2 } from 'lucide-react';

export default function DeleteIncome({ income }) {
  const [state, formAction, isPending] = useActionState(deleteIncome, {
    id: income.id,
  });

  return (
    <form action={formAction} className="inline-block">
      <button 
        type="submit" 
        disabled={isPending}
        className="
        border-2
        border-red-600
        ml-2
        
          text-red-500 
          hover:text-red-700 
          transition-colors 
          duration-200 
          focus:outline-none 
          focus:ring-2 
          focus:ring-red-300 
          rounded-full 
          p-1
          disabled:opacity-50
          disabled:cursor-not-allowed
        "
        aria-label="Delete Expense"
      >
        {isPending ? (
          <Loader2 size={18} className="animate-spin" />
        ) : (
          <Trash2 size={18} />
        )}
      </button>
      
      {state?.error && (
        <div className="
          fixed 
          top-4 
          right-4 
          bg-red-100 
          border 
          border-red-400 
          text-red-700 
          px-4 
          py-3 
          rounded 
          z-50
        ">
          {state.error}
        </div>
      )}
    </form>
  );
}