# JavaScript의 해시 기반 자료구조
> ### - [Map](https://github.com/devellybutton/CodingTest-Javascript/tree/main/data-structures/hash-table#map)
> ### - [Set](https://github.com/devellybutton/CodingTest-Javascript/tree/main/data-structures/hash-table#set)

## Map

- <b>정의</b> : 키-값을 저장하는 자료구조
- <b>주요 메서드</b>
  - <b>`set(key, value)`</b> : 키와 값 추가, 이미 존재하는 key에는 value만 업데이트됨.
  - <b>`get(key)`</b> : 주어진 키에 해당하는 값을 반환
  - <b>`has(key)`</b> : 주어진 키가 Map에 존재하는지 여부(boolean) 반환
  - <b>`delete(key)`</b> : 주어진 키를 삭제
  - <b>`clear()`</b> : 모든 키-값 쌍 삭제
  - <b>`size`</b> : Map에 들어 있는 키-값 쌍의 개수 반환
  - <b>`forEach(callback)`</b> : 각 요소에 대해 지정한 콜백 실행 
- <b>특징</b>
  - 모든 타입을 키로 사용할 수 있음.
  - 삽입 순서가 보장됨.
- <b>활용</b>
  - 빈도수 계산
  - 데이터 매핑

-----

## Set

- <b>정의</b> : 중복되지 않는 값들의 집합
- <b>주요 메서드</b>
    - <b>`add(value)`</b> : 값을 추가, 이미 존재하는 값의 경우 변동 없음.
    - <b>`has(value)`</b> : 주어진 값이 Set에 존재하는지 여부를 확인함.
    - <b>`delete(value)`</b> : 주어진 값을 삭제함.
    - <b>`clear()`</b> : 모든 값을 삭제함.
    - <b>`size()`</b> : Set에 들어 있는 값의 개수를 반환함.
    - <b>`forEach(callback)`</b> : 각 요소에 대해 지정한 콜백을 실행함.
- <b>특징</b> :
  - 중복된 값이 허용되지 않음. (자동으로 중복된 값 제거)
  - 값의 순서가 있음.
  - 인덱스가 없어서 순차적으로 접근해야함.
- <b>활용</b> :
  - 중복 제거
  - 집합 연산 (교집합, 차집합 등)