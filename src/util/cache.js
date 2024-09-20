const CACHE_VALIDITY_DURATION = 0 // 1 * 60 * 60 * 1000;

export function getCachedData(type) {
  const cached = JSON.parse(localStorage.getItem(type));

  if (!cached) {
    return null;
  }

  const currentTime = Date.now();
  const cacheAge = currentTime - cached.timestamp;

  // If the cache is less than 1 hour old, return both the cached data and the timestamp
  if (cacheAge < CACHE_VALIDITY_DURATION) {
    return { data: cached.data, timestamp: cached.timestamp };
  }

  // Otherwise, the cache is expired, return null
  return null;
}

export function setCachedData(type, data) {
  const cacheEntry = {
    data,
    timestamp: Date.now(),
  };

  localStorage.setItem(type, JSON.stringify(cacheEntry));
}
