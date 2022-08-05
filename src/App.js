import "./app.css";
import Card from "./components/Card";
import Filter from "./components/Filter";
import Input from "./components/Input";
import Navbar from "./components/Navbar";
import data from "./data.json";

const App = () => {
  console.log(data.house_details);

  return (
    <>
      <div className="bg-[#F8F7FD]">
        <Navbar />
        <section className="container py-10 px-24">
          {/* First box -> Heading */}
          <div className="flex justify-between mb-6">
            <h1 className="text-3xl font-bold focus:">
              Search properties to rent
            </h1>
            <Input placeholder={"Search with Search Bar"} />
          </div>

          {/* Second box -> Filter */}
          <Filter />

          {/* Third Box -> houses
           */}
          <div className="grid grid-cols-3 py-10 gap-10">
            {data.house_details.map((data) => {
              return <Card data={data} />;
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
