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
### 스택:
- [`Python`](../python/queue-list.py): list 사용 - 파이썬에서는 리스트의 append()/pop()이 스택의 표준적인 구현
- [`JavaScript`](../javascript/queue-class.js): 클래스 구현 - 객체지향적이고 명확한 인터페이스 제공

### 큐:
- [`Python`](../python/queue-deque.py): `collections.deque` 사용 - 양방향에서 O(1) 연산을 지원하는 파이썬의 표준 큐 구현
- [`JavaScript`](../javascript/queue-class.js): 클래스 구현 (head/tail) - 일반 배열의 shift()는 O(n)이라 비효율적이므로