import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Filter from "./components/Filter";
import Input from "./components/Input";
import Navbar from "./components/Navbar";
import data from "./data.json";
import { TbFileSearch } from "react-icons/tb";

const App = () => {
  const [showProperty, setShowProperty] = useState(data.house_details);

  return (
    <>
      <div className="bg-[#F8F7FD] min-h-screen ">
        <Navbar />
        <section className="container py-10 px-24 w-[100vw]">
          {/* First box -> Heading */}
          <div className="flex justify-between items-center flex-wrap mb-6">
            <h1 className=" text-3xl font-bold mb-3 md:mb-0">
              Search properties to rent
            </h1>
            <Input placeholder={"Search with Search Bar"} />
          </div>

          {/* Second box -> Filter */}
          <Filter setShowProperty={setShowProperty} data={data} />

          {/* Third Box -> houses
           */}
          {showProperty && (
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 py-10 gap-10">
              {showProperty.map((data) => {
                return <Card key={data.id} data={data} />;
              })}
            </div>
          )}

          {showProperty.length === 0 && (
            <div className="flex justify-center items-center text-primary-purple">
              <TbFileSearch />
              <h1 className="ml-1">No Data Found</h1>
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default App;
