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
