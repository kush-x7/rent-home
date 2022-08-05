import "./app.css";
import Filter from "./components/Filter";
import Input from "./components/Input";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div className="bg-[#F8F7FD]">
        <Navbar />
        <section class="container py-10 px-24">
          {/* First box -> Heading */}
          <div class="flex justify-between mb-6">
            <h1 className="text-2xl font-semibold focus:">
              Search properties to rent
            </h1>
            <Input placeholder={"Search with Search Bar"} />
          </div>

          {/* Second box -> Filter */}
          <Filter />

          <div class="grid grid-cols-3 py-10 gap-10">
            <div class="max-h-[450px]  bg-slate-600">
              <div class="h-[50%] w-[100%]">
                <img
                  class="h-full w-full object-cover"
                  src="https://source.unsplash.com/random"
                  alt=""
                />
              </div>
              <div class="p-4">
                <div class="flex justify-between">
                  <h2>200/month</h2>
                  <div>icon</div>
                </div>
                <h2>Palm harbor</h2>
                <p>Krishna Nagr Lucknpe</p>
                <hr class="mx-auto w-3/4" />
                <div class="flex justify-between">
                  <div>3 Beds</div>
                  <div>3 Beds</div>
                  <div>3 Beds</div>
                </div>
              </div>
            </div>
            <div class="max-h-[450px]  bg-slate-600">
              <div class="h-[50%] w-[100%]">
                <img
                  class="h-full w-full object-cover"
                  src="https://source.unsplash.com/random"
                  alt=""
                />
              </div>
              <div class="p-4">
                <div class="flex justify-between">
                  <h2>200/month</h2>
                  <div>icon</div>
                </div>
                <h2>Palm harbor</h2>
                <p>Krishna Nagr Lucknpe</p>
                <hr class="mx-auto w-3/4" />
                <div class="flex justify-between">
                  <div>3 Beds</div>
                  <div>3 Beds</div>
                  <div>3 Beds</div>
                </div>
              </div>
            </div>
            <div class="max-h-[450px]  bg-slate-600">
              <div class="h-[50%] w-[100%]">
                <img
                  class="h-full w-full object-cover"
                  src="https://source.unsplash.com/random"
                  alt=""
                />
              </div>
              <div class="p-4">
                <div class="flex justify-between">
                  <h2>200/month</h2>
                  <div>icon</div>
                </div>
                <h2>Palm harbor</h2>
                <p>Krishna Nagr Lucknpe</p>
                <hr class="mx-auto w-3/4" />
                <div class="flex justify-between">
                  <div>3 Beds</div>
                  <div>3 Beds</div>
                  <div>3 Beds</div>
                </div>
              </div>
            </div>
            <div class="max-h-[450px] max-w-[250px] bg-slate-600">
              <div class="h-[50%] w-[100%]">
                <img
                  class="h-full w-full object-cover"
                  src="https://source.unsplash.com/random"
                  alt=""
                />
              </div>
              <div class="p-4">
                <div class="flex justify-between">
                  <h2>200/month</h2>
                  <div>icon</div>
                </div>
                <h2>Palm harbor</h2>
                <p>Krishna Nagr Lucknpe</p>
                <hr class="mx-auto w-3/4" />
                <div class="flex justify-between">
                  <div>3 Beds</div>
                  <div>3 Beds</div>
                  <div>3 Beds</div>
                </div>
              </div>
            </div>
            <div class="max-h-[450px] max-w-[250px] bg-slate-600">
              <div class="h-[50%] w-[100%]">
                <img
                  class="h-full w-full object-cover"
                  src="https://source.unsplash.com/random"
                  alt=""
                />
              </div>
              <div class="p-4">
                <div class="flex justify-between">
                  <h2>200/month</h2>
                  <div>icon</div>
                </div>
                <h2>Palm harbor</h2>
                <p>Krishna Nagr Lucknpe</p>
                <hr class="mx-auto w-3/4" />
                <div class="flex justify-between">
                  <div>3 Beds</div>
                  <div>3 Beds</div>
                  <div>3 Beds</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
