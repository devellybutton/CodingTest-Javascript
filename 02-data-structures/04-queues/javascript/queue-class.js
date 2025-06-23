/**
 * 클래스를 이용한 큐 구현
 *
 * head: 큐의 맨 앞
 * tail: 새 항목이 들어갈 위치
 * 요소를 제거할 때는 그냥 head 인덱스만 증가시킴
 * 메모리 관리를 위해 delete로 제거
 * 물리적 이동 없이 O(1) 시간 복잡도로 요소를 추가하고 제거
 */

class Queue {
  constructor() {
    this.items = [];
    this.head = 0;
    this.tail = 0;
  }

  // 큐 뒤쪽에 요소 추가
  enqueue(item) {
    this.items[this.tail] = item;
    this.tail++;
  }

  // 큐 앞쪽에서 요소 제거 및 반환
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  }

  // 큐가 비어있는지 확인
  isEmpty() {
    return this.head === this.tail;
  }
}

// 사용 예제
const queue = new Queue();

queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");

console.log(queue.dequeue()); // "A"
console.log(queue.dequeue()); // "B"
console.log(queue.isEmpty()); // false
console.log(queue.dequeue()); // "C"
console.log(queue.isEmpty()); // true
