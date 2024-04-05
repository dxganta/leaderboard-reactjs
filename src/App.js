import { useState } from "react";
import "./App.css";

import Leaderboard from "./components/Leaderboard";
import QuartzAccumulation from "./components/QuartzAccumulation";
import Faq from "./components/Faq";

function App() {
  const [vault, setVault] = useState("sceth");
  return (
    <main className="flex flex-col items-center justify-between p-12 font-aeonik bg-beige">
      <QuartzAccumulation />
      <div className="py-10 text-neutral-800 text-base font-normal">
        <select
          value={vault}
          defaultValue="sceth"
          onChange={(e) => setVault(e.target.value)}
          className="mr-2 rounded-3xl px-1 py-2 shadow-sm ring-inset ring-gray-300 hover:bg-stone-100 bg-white bg-inherit border-white border-2"
        >
          <option value="sceth">scETH</option>
          <option value="scusdc">scUSDC</option>
          <option value="sclusd">scLUSD</option>
        </select>
      </div>
      <Leaderboard vault={vault} />
      <Faq />
    </main>
  );
}

export default App;
