export const shortenAddress = (address) => {
  if (address.length < 10) {
    return address;
  }
  return `${address.slice(0, 6)}...${address.slice(-3)}`;
};

export const databaseUrl = "https://leaderboard-backend-acz8.onrender.com";

export const vaultToToken = {
  sceth: "ETH",
  scusdc: "USDC",
  sclusd: "LUSD",
};
