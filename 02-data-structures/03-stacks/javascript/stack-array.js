// 배열을 이용한 스택 구현
const stack = [];

// 사용 예제
console.log("=== Stack Array Example ===");

// Push 연산
stack.push("A");
stack.push("B");
stack.push("C");
console.log("Stack:", stack);

// Top 요소 확인
console.log("Top:", stack[stack.length - 1]);
console.log("Size:", stack.length);

// Pop 연산
console.log("Popped:", stack.pop());
console.log("Popped:", stack.pop());
console.log("Stack:", stack);

// 빈 스택 확인
console.log("Is empty:", stack.length === 0);
console.log("Popped:", stack.pop());
console.log("Is empty:", stack.length === 0);

// 빈 스택에서 pop 시도
console.log("Pop empty stack:", stack.pop()); // undefined
