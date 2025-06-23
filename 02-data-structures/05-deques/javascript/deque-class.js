/**
 * 클래스를 이용한 덱 구현
 * 
 * head: 덱의 맨 앞
 * tail: 새 항목이 들어갈 위치 (맨 뒤)
 * 양방향에서 요소를 추가하고 제거
 * 물리적 이동 없이 O(1) 시간 복잡도로 모든 연산 수행
 */

class Deque {
  constructor() {
    this.items = [];
    this.head = 0;
    this.tail = 0;
  }

  // 덱 앞쪽에 요소 추가
  addFront(item) {
    this.head--;
    this.items[this.head] = item;
  }

  // 덱 뒤쪽에 요소 추가
  addRear(item) {
    this.items[this.tail] = item;
    this.tail++;
  }

  // 덱 앞쪽에서 요소 제거 및 반환
  removeFront() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  }

  // 덱 뒤쪽에서 요소 제거 및 반환
  removeRear() {
    if (this.isEmpty()) {
      return null;
    }
    this.tail--;
    const item = this.items[this.tail];
    delete this.items[this.tail];
    return item;
  }

  // 덱이 비어있는지 확인
  isEmpty() {
    return this.head === this.tail;
  }

  // 덱 크기 반환
  size() {
    return this.tail - this.head;
  }

  // 앞쪽 요소 확인 (제거하지 않음)
  peekFront() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.head];
  }

  // 뒤쪽 요소 확인 (제거하지 않음)
  peekRear() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.tail - 1];
  }
}

// 사용 예제
const deque = new Deque();

console.log("=== Deque Example ===");

// 양쪽에 요소 추가
deque.addRear("B");      // 뒤에 추가
deque.addFront("A");     // 앞에 추가
deque.addRear("C");      // 뒤에 추가

console.log("Front:", deque.peekFront()); // A
console.log("Rear:", deque.peekRear());   // C
console.log("Size:", deque.size());

// 양쪽에서 요소 제거
console.log("Remove front:", deque.removeFront()); // A
console.log("Remove rear:", deque.removeRear());   // C
console.log("Size:", deque.size());

// 덱을 스택처럼 사용
console.log("\n=== Deque as Stack ===");
deque.addRear("D");
deque.addRear("E");
console.log("Push, current rear:", deque.peekRear());
console.log("Pop:", deque.removeRear()); // E

// 덱을 큐처럼 사용
console.log("\n=== Deque as Queue ===");
deque.addRear("F");
console.log("Enqueue, current rear:", deque.peekRear());
console.log("Dequeue:", deque.removeFront()); // B

console.log("Final front:", deque.peekFront());
console.log("Is empty:", deque.isEmpty());