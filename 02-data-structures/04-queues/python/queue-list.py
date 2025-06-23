# 리스트를 이용한 큐 구현 (비효율적)
queue = []

# 사용 예제
print("=== Queue List Example ===")

# Enqueue 연산
queue.append("A")
queue.append("B")
queue.append("C")
print(f"Queue: {queue}")

# Front 요소 확인
print(f"Front: {queue[0]}")
print(f"Size: {len(queue)}")

# Dequeue 연산 (O(n) - 비효율적)
print(f"Dequeued: {queue.pop(0)}")
print(f"Dequeued: {queue.pop(0)}")
print(f"Queue: {queue}")

# 빈 큐 확인
print(f"Is empty: {len(queue) == 0}")
print(f"Dequeued: {queue.pop(0)}")
print(f"Is empty: {len(queue) == 0}")

# 빈 큐에서 dequeue 시도 (에러 발생)
try:
    queue.pop(0)
except IndexError:
    print("Dequeue empty queue: IndexError - pop from empty list")