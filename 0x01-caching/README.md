# 0x01. Caching - Task 0: Basic Dictionary

## Task 0: Basic Dictionary

### Description

In this task, we implemented a `BasicCache` class that inherits from `BaseCaching`. The `BasicCache` is a simple caching system with no limit on the number of items it can store. It provides two primary methods:

1. **put(key, item)**:
   - Adds an item to the cache. The `item` is stored in the cache dictionary `self.cache_data` with `key` as its key.
   - If either `key` or `item` is `None`, the method does nothing.

2. **get(key)**:
   - Retrieves an item from the cache by its `key`
   - If `key` is `None` or does not exist in the cache, it returns `None`.

### Files

- **`0-basic_cache.py`**: Contains the implementation of the `BasicCache` class.
- **`base_caching.py`**: The base class `BaseCaching`, which provides the structure for the caching system.
- **`0-main.py`**: A script that tests the `BasicCache` class.

### Example Usage

```python
BasicCache = __import__('0-basic_cache').BasicCache

my_cache = BasicCache()
my_cache.print_cache()
my_cache.put("A", "Hello")
my_cache.put("B", "World")
my_cache.put("C", "Holberton")
my_cache.print_cache()
print(my_cache.get("A"))
print(my_cache.get("B"))
print(my_cache.get("C"))
print(my_cache.get("D"))
my_cache.print_cache()
my_cache.put("D", "School")
my_cache.put("E", "Battery")
my_cache.put("A", "Street")
my_cache.print_cache()
print(my_cache.get("A"))
```
