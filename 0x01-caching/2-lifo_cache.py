#!/usr/bin/env python3
""" LIFOCache module """

from base_caching import BaseCaching


class LIFOCache(BaseCaching):
    """ LIFOCache defines a LIFO caching system """

    def __init__(self):
        """ Initialize the class """
        super().__init__()
        self.last_item = None  # To keep track of the last inserted item

    def put(self, key, item):
        """ Add an item to the cache using LIFO policy """
        if key is not None and item is not None:
            self.cache_data[key] = item
            self.last_item = key

            if len(self.cache_data) > BaseCaching.MAX_ITEMS:
                # Remove the last inserted item (LIFO)
                del self.cache_data[self.last_item]
                print(f"DISCARD: {self.last_item}")
                self.last_item = key  # Update the last inserted item

    def get(self, key):
        """ Get an item by key from the cache """
        if key is None or key not in self.cache_data:
            return None
        return self.cache_data[key]
