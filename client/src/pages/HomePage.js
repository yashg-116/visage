import React from "react";
import ContactForm from "./ContactForm";
function HomePage() {
  return (
    <nav>
      <div className=" bg-gray-100">
        <h1 className="flex justify-center p-3 font-bold" >Dashboard</h1>
        <ContactForm/>
      </div>
    </nav>
  );
}
export default HomePage;
