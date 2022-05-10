# eventbus-todo

## 1. Vuetify 설치하기
```
vue add vuetify
```

## 2. 부모 컴포넌트에서 자식컴포넌트 import 하기
* List.vue import
* ListAdd.vue import

## ListAdd
* vuetify 의 textarea 가져오기
* 클릭 이벤트 추가

## 3. props로 todoList 데이터 넘겨주기
* 할일 내용을 v-for 문으로 돌리기 / key 값 넣기

## 4. fontawesome 적용하기
```
npm install vuetify @fortawesome/fontawesome-free
```
* plugins 에 있는 vuetify.js 파일에  import '@fortawesome/fontawesome-free/css/all.css' 임폴트 시키기
* [https://vuetifyjs.com/en/components/buttons](https://vuetifyjs.com/en/components/buttons])
* fab : 버튼을 동그랗게 하는 단어
* flat : bg와 shadowbox 가 없음 => 2.0 버전에서는 text 로 바뀌었다.

## 5. 버튼을 클릭해서 상태값 바뀌게 하기
* 버튼을 클릭하면, 부모 컴포넌트한테 상태를 전달해주기 ($emit 사용)
* 상태값에 따라서 버튼이 보여지고 안보여지게 하기 (v-if, v-else)

## 6. class 속성을 통해 색상 변경
* 완료가 되면 밑줄과 bg color 변경
* 부활 시키면 다시 원래대로


