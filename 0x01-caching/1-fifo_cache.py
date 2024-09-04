#!/usr/bin/env python3
""" FIFOCache module """

from base_caching import BaseCaching


class FIFOCache(BaseCaching):
    """ FIFOCache defines a FIFO caching system """

    def __init__(self):
        """ Initialize the class """
        super().__init__()
        self.order = []  # To keep track of the order of keys for FIFO

    def put(self, key, item):
        """ Add an item to the cache using FIFO policy """
        if key is not None and item is not None:
            if key not in self.cache_data:
                self.order.append(key)

            self.cache_data[key] = item

            if len(self.cache_data) > BaseCaching.MAX_ITEMS:
                # Remove the first inserted item (FIFO)
                discarded_key = self.order.pop(0)
                del self.cache_data[discarded_key]
                print(f"DISCARD: {discarded_key}")

    def get(self, key):
        """ Get an item by key from the cache """
        if key is None or key not in self.cache_data:
            return None
        return self.cache_data[key]
