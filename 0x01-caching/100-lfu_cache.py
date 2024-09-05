#!/usr/bin/env python3
""" LFUCache module """

from base_caching import BaseCaching


class LFUCache(BaseCaching):
    """ LFUCache defines a LFU caching system """

    def __init__(self):
        """ Initialize the class """
        super().__init__()
        self.frequency = {}  # To track the frequency of usage of keys
        self.usage_order = []  # To track the order of usage for LRU ties

    def put(self, key, item):
        """ Add an item to the cache using LFU policy """
        if key is not None and item is not None:
            if key in self.cache_data:
                # Update the item and increment its frequency
                self.cache_data[key] = item
                self.frequency[key] += 1
                self.usage_order.remove(key)
                self.usage_order.append(key)
            else:
                if len(self.cache_data) >= BaseCaching.MAX_ITEMS:
                    # Find the least frequently used key
                    min_freq = min(self.frequency.values())
                    lfu_keys = [k for k, v in self.frequency.items()
                                if v == min_freq]

                    # If there is more than one LFU, use LRU to break the tie
                    if len(lfu_keys) > 1:
                        lfu_key = None
                        for k in self.usage_order:
                            if k in lfu_keys:
                                lfu_key = k
                                break
                    else:
                        lfu_key = lfu_keys[0]

                    # Remove the LFU key
                    del self.cache_data[lfu_key]
                    del self.frequency[lfu_key]
                    self.usage_order.remove(lfu_key)
                    print(f"DISCARD: {lfu_key}")

                # Add the new key and set its frequency to 1
                self.cache_data[key] = item
                self.frequency[key] = 1
                self.usage_order.append(key)

    def get(self, key):
        """ Get an item by key from the cache """
        if key is None or key not in self.cache_data:
            return None
        # Increment the access frequency and update the usage order
        self.frequency[key] += 1
        self.usage_order.remove(key)
        self.usage_order.append(key)
        return self.cache_data[key]
