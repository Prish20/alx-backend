# 0x00. Pagination

## 0. Simple Helper Function

## Objective

Create a function named `index_range` that takes two integer arguments: `page` and `page_size`. The function returns a tuple containing the start and end indexes for pagination.

**File:** `0-simple_helper_function.py`

## Code

```python
def index_range(page: int, page_size: int) -> Tuple[int, int]:
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return start_index, end_index
```

## Task 1: Simple Pagination

This task involves implementing a `get_page` method in the `Server` class to paginate a dataset of popular baby names stored in a CSV file.

**File:** `1-simple_pagination.py`

**Usage:**

First, ensure the `Popular_Baby_Names.csv` file is in the same directory as the script. The dataset will be loaded and paginated based on the `page` and `page_size` parameters.

You can test the method using the provided `1-main.py` file:

```python
./1-main.py
```
