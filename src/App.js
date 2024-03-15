import { useState } from "react";
import "./App.css";

import Leaderboard from "./components/Leaderboard";
import QuartzAccumulation from "./components/QuartzAccumulation";

function App() {
  const [vault, setVault] = useState("sceth");
  return (
    <main className="flex flex-col items-center justify-between p-12">
      <QuartzAccumulation />
      <div className="py-10 text-2xl font-bold">
        <select
          value={vault}
          defaultValue="sceth"
          onChange={(e) => setVault(e.target.value)}
        >
          <option value="sceth">scEth</option>
          <option value="scusdc">scUsdc</option>
          <option value="sclusd">scLusd</option>
        </select>
        Leaderboard
      </div>
      <Leaderboard vault={vault} />
    </main>
  );
}

export default App;
