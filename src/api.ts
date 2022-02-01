const BASE_URL = `https://api.coinpaprika.com/v1`;

export async function fetchCoins() {
  const response = await fetch(`${BASE_URL}/coins`);
  return await response.json();
}

export async function fetchCoinInfo(coinId: string) {
  const response = await fetch(`${BASE_URL}/coins/${coinId}`);
  return await response.json();
}

export async function fetchCoinTickers(coinId: string) {
  const response = await fetch(`${BASE_URL}/tickers/${coinId}`);
  return await response.json();
}

export async function fetchCoinHistory(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7 * 2;
  const response = await fetch(
    `${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
  );
  return await response.json();
}
