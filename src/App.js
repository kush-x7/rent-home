import { useState } from "react";
import "./app.css";
import Card from "./components/Card";
import Filter from "./components/Filter";
import Input from "./components/Input";
import Navbar from "./components/Navbar";
import data from "./data.json";

const App = () => {
  const [allData, setAllData] = useState(data.house_details);
  const [filteredData, setFilteredData] = useState({
    location: undefined,
    date: undefined,
    price: undefined,
    property: undefined,
  });

  console.log(filteredData, "kush1");

  return (
    <>
      <div className="bg-[#F8F7FD]">
        <Navbar />
        <section className="container py-10 px-24">
          {/* First box -> Heading */}
          <div className="flex justify-between items-center flex-wrap mb-6">
            <h1 className=" text-3xl font-bold mb-3 md:mb-0">
              Search properties to rent
            </h1>
            <Input placeholder={"Search with Search Bar"} />
          </div>

          {/* Second box -> Filter */}
          <Filter
            data={data}
            filteredData={filteredData}
            setFilteredData={setFilteredData}
          />

          {/* Third Box -> houses
           */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 py-10 gap-10">
            {allData.map((data) => {
              return <Card data={data} />;
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
