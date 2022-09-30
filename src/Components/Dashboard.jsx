import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard flex">
      <div className="bodyContainer w-2/3">
        <div className="container flex">
          <div className="fiatCurrency bg-white p-2 rounded-md my-2">
            USD-INR
          </div>

        {/* search */}
          <div className="searchBar w-full flex space-x-4 items-center justify-start py-2 bg-white rounded-md my-2 mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 mx-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>

              <input
                type="text"
                placeholder="Search by coin"
                className="bg-transparent outline-none"
              />
          </div>
        </div>

        <div className="container-2 flex">
          <div className="pagiNation bg-white p-2 rounded-md my-2">
            1D 1W 1M 1Y
          </div>
          <div className="cryptoCurrency bg-white p-2 rounded-md mx-2 my-2">
            Cryptocurrency Dropdown
          </div>
          <div className="chartType bg-white p-2 rounded-md mx-2 my-2">
            Chart Type Dropdown
          </div>
        </div>
        <div className="graphCrypto bg-white p-2 rounded-md my-2">ChartJs</div>
        <div className="container-3 flex">
          <div className="portfolio bg-white p-2 rounded-md my-2">
            Pie Chart
          </div>
          <div className="coinExchange bg-white p-2 rounded-md mx-2 my-2">
            Exchnge Coins
          </div>
        </div>
      </div>
      <div className="marketCap w-1/3 bg-white p-6 rounded-md mx-2 my-2 ">
        MarketCap
      </div>
    </div>
  );
};

export default Dashboard;
