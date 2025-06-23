from collections import deque

# deque 사용 (양방향 큐)
queue = deque()

# 사용 예제
print("=== Queue Array Example ===")

# Enqueue 연산
queue.append("A")
queue.append("B")
queue.append("C")
print(f"Queue: {list(queue)}")

# Front 요소 확인
print(f"Front: {queue[0]}")
print(f"Size: {len(queue)}")

# Dequeue 연산
print(f"Dequeued: {queue.popleft()}")
print(f"Dequeued: {queue.popleft()}")
print(f"Queue: {list(queue)}")

# 빈 큐 확인
print(f"Is empty: {len(queue) == 0}")
print(f"Dequeued: {queue.popleft()}")
print(f"Is empty: {len(queue) == 0}")

# 빈 큐에서 dequeue 시도 (에러 발생)
try:
    queue.popleft()
except IndexError:
    print("Dequeue empty queue: IndexError - pop from empty deque")