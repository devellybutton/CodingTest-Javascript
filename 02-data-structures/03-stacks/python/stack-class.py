# 클래스를 이용한 스택 구현
class Stack:
    def __init__(self):
        self.items = []
    
    def push(self, item):
        """스택 맨 위에 요소 추가"""
        self.items.append(item)
    
    def pop(self):
        """스택 맨 위 요소 제거 및 반환"""
        if self.is_empty():
            return None
        return self.items.pop()
    
    def peek(self):
        """Top 요소 확인 (제거하지 않음)"""
        if self.is_empty():
            return None
        return self.items[-1]
    
    def is_empty(self):
        """스택이 비어있는지 확인"""
        return len(self.items) == 0
    
    def size(self):
        """스택 크기 반환"""
        return len(self.items)
    
    def print_stack(self):
        """스택 내용 출력"""
        print(f"Stack: {self.items}")


# 사용 예제
if __name__ == "__main__":
    stack = Stack()
    
    print("=== Stack Class Example ===")
    stack.push("A")
    stack.push("B")
    stack.push("C")
    stack.print_stack()
    
    print(f"Top: {stack.peek()}")
    print(f"Size: {stack.size()}")
    
    print(f"Popped: {stack.pop()}")
    print(f"Popped: {stack.pop()}")
    stack.print_stack()
    
    print(f"Is empty: {stack.is_empty()}")
    print(f"Popped: {stack.pop()}")
    print(f"Is empty: {stack.is_empty()}")
    
    # 빈 스택에서 연산 시도
    print(f"Peek empty stack: {stack.peek()}")
    print(f"Pop empty stack: {stack.pop()}")