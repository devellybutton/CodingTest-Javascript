# 스택과 큐 파이썬 vs 자바스크립트

- [파이썬](#파이썬)
- [자바스크립트](#자바스크립트)

-------

## 파이썬
### 스택 구현
- 방법: 리스트 사용 (append(), pop())
- 복잡도: 삽입, 삭제 모두 O(1)
- 예시: 
```
stack = []
stack.append(item)  # 삽입
stack.pop()  # 삭제
```

### 큐 구현
- 방법: `collections.deque` 사용
- 복잡도: 삽입, 삭제 모두 O(1)
- 예시: 
```
from collections import deque
queue = deque()
queue.append(item)
queue.popleft()
```

---------------------

## 자바스크립트
### 스택 구현
- 방법: 배열 사용 (push(), pop())
- 복잡도: 삽입, 삭제 모두 O(1)
- 예시: 
```
const stack = []
stack.push(item)  # 삽입
stack.pop()  # 삭제
```

### 큐 구현
- 방법 1: 배열 사용 (push(), shift())
    - 복잡도: 삽입 O(1), 삭제 O(n) - shift()는 모든 요소를 재배치해야 함
- 방법 2: 클래스로 큐 구현
    - 복잡도: 삽입, 삭제 모두 O(1)

----

## 요약
- 파이썬: 스택은 리스트, 큐는 deque로 구현
- 자바스크립트: 스택은 배열로 구현, 큐는 성능이 중요하면 클래스로 구현