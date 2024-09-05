#!/usr/bin/env python3
""" MRUCache module """

from base_caching import BaseCaching


class MRUCache(BaseCaching):
    """ MRUCache defines a MRU caching system """

    def __init__(self):
        """ Initialize the class """
        super().__init__()
        self.mru_key = None  # To track the most recently used key

    def put(self, key, item):
        """ Add an item to the cache using MRU policy """
        if key is not None and item is not None:
            # If the key is already in the cache, update its value
            if key in self.cache_data:
                self.cache_data[key] = item
            else:
                # If the cache exceeds the max items,
                # remove the most recently used item
                if len(self.cache_data) >= BaseCaching.MAX_ITEMS:
                    if self.mru_key:
                        del self.cache_data[self.mru_key]
                        print(f"DISCARD: {self.mru_key}")

                # Add the key and item to the cache
                self.cache_data[key] = item

            # Update the most recently used key
            self.mru_key = key

    def get(self, key):
        """ Get an item by key from the cache """
        if key is None or key not in self.cache_data:
            return None
        # Mark this key as the most recently used
        self.mru_key = key
        return self.cache_data[key]
