// LRU cache

class LRUCache {
  constructor(limit) {
    this.limit = limit;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    const value = this.cache.get(key);
    this.cache.delete(key); // refresh position
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) this.cache.delete(key);
    else if (this.cache.size === this.limit) {
      const oldest = this.cache.keys().next().value;
      this.cache.delete(oldest);
    }
    this.cache.set(key, value);
  }
}



// Used in real systems like browser caching.

// If cache limit is reached, it removes the Least Recently Used (LRU) item.

// Map keeps insertion order; used here to simulate LRU behavior.

// Shows data structure mastery.