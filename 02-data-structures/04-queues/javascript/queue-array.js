// 배열을 이용한 큐 구현 (비효율적)
const queue = [];

// 사용 예제
console.log("=== Queue Array Example ===");

// Enqueue 연산
queue.push("A");
queue.push("B");
queue.push("C");
console.log("Queue:", queue);

// Front 요소 확인
console.log("Front:", queue[0]);
console.log("Size:", queue.length);

// Dequeue 연산 (O(n) - 비효율적)
console.log("Dequeued:", queue.shift());
console.log("Dequeued:", queue.shift());
console.log("Queue:", queue);

// 빈 큐 확인
console.log("Is empty:", queue.length === 0);
console.log("Dequeued:", queue.shift());
console.log("Is empty:", queue.length === 0);

// 빈 큐에서 dequeue 시도
console.log("Dequeue empty queue:", queue.shift()); // undefined
