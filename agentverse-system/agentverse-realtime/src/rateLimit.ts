export function createBucket(capacity = 30, refillPerSecond = 20) {
  let tokens = capacity;
  let last = Date.now();
  return {
    allow(cost = 1) {
      const now = Date.now();
      const elapsed = (now - last) / 1000;
      last = now;
      tokens = Math.min(capacity, tokens + elapsed * refillPerSecond);
      if (tokens < cost) return false;
      tokens -= cost;
      return true;
    }
  };
}
