
class Queue:
    """
    head: 큐의 맨 앞
    tail: 새 항목이 들어갈 위치
    요소를 제거할 때는 그냥 head 인덱스만 증가시킴
    메모리 관리를 위해 None으로 설정하여 제거
    물리적 이동 없이 O(1) 시간 복잡도로 요소를 추가하고 제거
    """
    
    def __init__(self):
        self.items = []
        self.head = 0
        self.tail = 0
    
    def enqueue(self, item):
        # 리스트 크기가 부족하면 확장
        while len(self.items) <= self.tail:
            self.items.append(None)
        
        self.items[self.tail] = item
        self.tail += 1
    
    def dequeue(self):
        if self.is_empty():
            return None
        
        item = self.items[self.head]
        self.items[self.head] = None  # 메모리 정리
        self.head += 1
        return item
    
    def is_empty(self):
        return self.head == self.tail


# 사용 예제
queue = Queue()

queue.enqueue("A")
queue.enqueue("B")
queue.enqueue("C")

print(queue.dequeue())  # "A"
print(queue.dequeue())  # "B"
print(queue.is_empty())  # False
print(queue.dequeue())  # "C"
print(queue.is_empty())  # True