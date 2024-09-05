#!/usr/bin/env python3
""" LRUCache module """

from base_caching import BaseCaching


class LRUCache(BaseCaching):
    """ LRUCache defines a LRU caching system """

    def __init__(self):
        """ Initialize the class """
        super().__init__()
        self.usage_order = []  # To keep track of the usage order of keys

    def put(self, key, item):
        """ Add an item to the cache using LRU policy """
        if key is not None and item is not None:
            if key in self.cache_data:
                # If the key already exists, update its value and reorder
                self.usage_order.remove(key)
            elif len(self.cache_data) >= BaseCaching.MAX_ITEMS:
                # Remove the least recently used item (LRU)
                lru_key = self.usage_order.pop(0)
                del self.cache_data[lru_key]
                print(f"DISCARD: {lru_key}")

            # Add the key-value pair to the cache
            self.cache_data[key] = item
            self.usage_order.append(key)

    def get(self, key):
        """ Get an item by key from the cache """
        if key is None or key not in self.cache_data:
            return None
        # Mark the key as recently used by updating its order
        self.usage_order.remove(key)
        self.usage_order.append(key)
        return self.cache_data[key]
