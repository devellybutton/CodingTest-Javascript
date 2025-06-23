# 리스트를 이용한 스택 구현
stack = []

# 사용 예제
print("=== Stack List Example ===")

# Push 연산
stack.append("A")
stack.append("B")
stack.append("C")
print(f"Stack: {stack}")

# Top 요소 확인
print(f"Top: {stack[-1]}")
print(f"Size: {len(stack)}")

# Pop 연산
print(f"Popped: {stack.pop()}")
print(f"Popped: {stack.pop()}")
print(f"Stack: {stack}")

# 빈 스택 확인
print(f"Is empty: {len(stack) == 0}")
print(f"Popped: {stack.pop()}")
print(f"Is empty: {len(stack) == 0}")

# 빈 스택에서 pop 시도 (에러 발생)
try:
    stack.pop()
except IndexError:
    print("Pop empty stack: IndexError - pop from empty list")