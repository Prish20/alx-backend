# 0x01. Caching - Task 0: Basic Dictionary

## Task 0: Basic Dictionary

### Task 0: Basic Dictionary Description

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

## 0x01. Caching - Task 1: FIFO Caching

### Description: Task 1: FIFO Caching

In this task, we implemented a `FIFOCache` class that inherits from `BaseCaching`. This class uses a First-In-First-Out (FIFO) caching policy, meaning that when the cache reaches its limit, the oldest item (first inserted) is discarded.

**`Methods`**

1. **put(key, item)**:
   - Adds an item to the cache.
   - If the cache exceeds the `MAX_ITEMS` limit, the first item added is removed (FIFO algorithm).
   - Prints `DISCARD: <key>` when an item is removed.

2. **get(key)**:
   - Retrieves an item from the cache by key.
   - If the key is `None` or does not exist in the cache, it returns `None`.

**`Files`**:

- **`1-fifo_cache.py`**: Contains the implementation of the `FIFOCache` class.
- **`base_caching.py`**: The base class `BaseCaching`, which provides the structure for the caching system.
- **`1-main.py`**: A script that tests the `FIFOCache` class.

**`Example Usage`**

```python
FIFOCache = __import__('1-fifo_cache').FIFOCache

my_cache = FIFOCache()
my_cache.put("A", "Hello")
my_cache.put("B", "World")
my_cache.put("C", "Holberton")
my_cache.put("D", "School")
my_cache.print_cache()
my_cache.put("E", "Battery")  # This should discard the first item ("A")
my_cache.print_cache()
my_cache.put("C", "Street")
my_cache.print_cache()
my_cache.put("F", "Mission")  # This should discard the next item ("B")
my_cache.print_cache()
```

## 0x01. Caching - Task 2: LIFO Caching

### Description: Task 2: LIFO Caching

In this task, we implemented a `LIFOCache` class that inherits from `BaseCaching`. This class uses a Last-In-First-Out (LIFO) caching policy, meaning that when the cache reaches its limit, the most recent item (last inserted) is discarded.

**`Methods`**:

1. **put(key, item)**:
   - Adds an item to the cache.
   - If the cache exceeds the `MAX_ITEMS` limit, the last item added is removed (LIFO algorithm).
   - Prints `DISCARD: <key>` when an item is removed.

2. **get(key)**:
   - Retrieves an item from the cache by key.
   - If the key is `None` or does not exist in the cache, it returns `None`.

**`Files`**:

- **`2-lifo_cache.py`**: Contains the implementation of the `LIFOCache` class.
- **`base_caching.py`**: The base class `BaseCaching`, which provides the structure for the caching system.
- **`2-main.py`**: A script that tests the `LIFOCache` class.

**`Example Usage`**:

```python
LIFOCache = __import__('2-lifo_cache').LIFOCache

my_cache = LIFOCache()
my_cache.put("A", "Hello")
my_cache.put("B", "World")
my_cache.put("C", "Holberton")
my_cache.put("D", "School")
my_cache.print_cache()
my_cache.put("E", "Battery")  # This should discard the last item ("D")
my_cache.print_cache()
my_cache.put("C", "Street")
my_cache.print_cache()
my_cache.put("F", "Mission")  # This should discard the last item ("C")
my_cache.print_cache()
```

## 0x01. Caching - Task 3: LRU Caching

### Description: Task 3: LRU Caching

In this task, we implemented an `LRUCache` class that inherits from `BaseCaching`. This class uses a Least Recently Used (LRU) caching policy, meaning that when the cache reaches its limit, the least recently accessed item is discarded.

**`Methods`**:

1. **put(key, item)**:
   - Adds an item to the cache.
   - If the cache exceeds the `MAX_ITEMS` limit, the least recently used item is removed (LRU algorithm).
   - Prints `DISCARD: <key>` when an item is removed.

2. **get(key)**:
   - Retrieves an item from the cache by key and marks it as recently used.
   - If the key is `None` or does not exist in the cache, it returns `None`.

**`Files`**:

- **`3-lru_cache.py`**: Contains the implementation of the `LRUCache` class.
- **`base_caching.py`**: The base class `BaseCaching`, which provides the structure for the caching system.
- **`3-main.py`**: A script that tests the `LRUCache` class.

**`Example Usage`**:

```python
LRUCache = __import__('3-lru_cache').LRUCache

my_cache = LRUCache()
my_cache.put("A", "Hello")
my_cache.put("B", "World")
my_cache.put("C", "Holberton")
my_cache.put("D", "School")
my_cache.print_cache()
print(my_cache.get("B"))  # Accessing B should make it recently used
my_cache.put("E", "Battery")  # This should discard A (least recently used)
my_cache.print_cache()
my_cache.put("C", "Street")  # C is accessed, so no discarding yet
my_cache.print_cache()
```
