
# collections.deque를 이용한 덱 구현
from collections import deque

# 사용 예제
print("=== Deque Example ===")

# 덱 생성
dq = deque()

# 양쪽에 요소 추가
dq.append("B")      # 뒤에 추가
dq.appendleft("A")  # 앞에 추가
dq.append("C")      # 뒤에 추가
print(f"Deque: {list(dq)}")  # ['A', 'B', 'C']

# 양쪽 끝 요소 확인
print(f"Front: {dq[0]}")   # A
print(f"Rear: {dq[-1]}")   # C
print(f"Size: {len(dq)}")

# 양쪽에서 요소 제거
print(f"Remove front: {dq.popleft()}")  # A
print(f"Remove rear: {dq.pop()}")       # C
print(f"Deque: {list(dq)}")  # ['B']

# 덱을 스택처럼 사용
print("\n=== Deque as Stack ===")
dq.append("D")
dq.append("E")
print(f"Push: {list(dq)}")
print(f"Pop: {dq.pop()}")  # E

# 덱을 큐처럼 사용
print("\n=== Deque as Queue ===")
dq.append("F")
print(f"Enqueue: {list(dq)}")
print(f"Dequeue: {dq.popleft()}")  # B

print(f"Final deque: {list(dq)}")
print(f"Is empty: {len(dq) == 0}")