"use client";
import Categorywise from "@/components/Categorywise";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function CategorywisePage() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="container">
      <Sidebar isOpen={isSidebarOpen} />

  
      <div className={`content ${isSidebarOpen ? "shifted" : ""}`}>
       
        <Categorywise />
      </div>
    </div>
  );
}