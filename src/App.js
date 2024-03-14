import "./App.css";

import Leaderboard from "./components/Leaderboard";
import QuartzAccumulation from "./components/QuartzAccumulation";

function App() {
  return (
    <main className="flex flex-col items-center justify-between p-12">
      <QuartzAccumulation />
      <div className="py-10 text-2xl font-bold">scETH Leaderboard</div>
      <Leaderboard />
    </main>
  );
}

export default App;
