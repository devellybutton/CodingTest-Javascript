# 큐 (Queue)
- 정의: 데이터를 저장하는 선형 자료구조
- 특징: 선입선출(FIFO, First In First Out)

## 기본 연산
- `Enqueue`: 데이터를 큐의 맨 뒤(tail)에 추가
- `Dequeue`: 데이터를 큐의 맨 앞(head)에서 제거하고 반환

## 파이썬 구현
- <b>Enqueue 연산</b>: `items[tail] = item` → O(1) 복잡도
- <b>Dequeue 연산</b>: `items[head]` 반환 후 head 증가 → O(1) 복잡도
- <b>Front 접근</b>: head 인덱스(`items[head]`)로 접근

## 자바스크립트 구현
- <b>Enqueue 연산</b>: `items[tail] = item` → O(1) 복잡도
- <b>Dequeue 연산</b>: `items[head]` 반환 후 head 증가 → O(1) 복잡도
- <b>Front 접근</b>: head 인덱스(`items[head]`)로 접근

## 주의사항
- head와 tail을 통해서만 enqueue, dequeue 수행해야 함
- 큐가 비어있는지 항상 확인 필요 (`head === tail`)

## 활용
- <b>BFS(너비 우선 탐색)</b>: 그래프/트리 탐색에서 레벨 순서로 방문
- <b>작업 스케줄링</b>: 프로세스 대기열, 인쇄 작업 대기열
- <b>버퍼링</b>: 데이터 스트림 처리, 키보드 입력 처리