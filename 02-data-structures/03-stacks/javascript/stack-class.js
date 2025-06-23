/**
 * 클래스를 이용한 스택 구현
 * top: 스택의 맨 위 (마지막 요소)
 * 요소를 추가할 때는 배열의 끝에 추가
 * 요소를 제거할 때는 배열의 끝에서 제거
 * 물리적 이동 없이 O(1) 시간 복잡도로 요소를 추가하고 제거
 */

class Stack {
  constructor() {
    this.items = [];
  }

  // Push 연산: 스택 맨 위에 요소 추가
  push(item) {
    this.items.push(item);
  }

  // Pop 연산: 스택 맨 위 요소 제거 및 반환
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  // Top 요소 확인 (제거하지 않음)
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  // 스택이 비어있는지 확인
  isEmpty() {
    return this.items.length === 0;
  }

  // 스택 크기 반환
  size() {
    return this.items.length;
  }

  // 스택 내용 출력
  print() {
    console.log("Stack:", this.items);
  }
}

// 사용 예제
const stack = new Stack();

console.log("=== Stack Class Example ===");
stack.push("A");
stack.push("B");
stack.push("C");
stack.print();

console.log("Top:", stack.peek());
console.log("Size:", stack.size());

console.log("Popped:", stack.pop());
console.log("Popped:", stack.pop());
stack.print();

console.log("Is empty:", stack.isEmpty());
console.log("Popped:", stack.pop());
console.log("Is empty:", stack.isEmpty());

// 빈 스택에서 연산 시도
console.log("Peek empty stack:", stack.peek());
console.log("Pop empty stack:", stack.pop());
