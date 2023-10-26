# Front Project
- Next.js 를 활용한 Front end project

## Subject
- 아직 무엇을 할 지 결정하지 못했음

## Skill
- Next.js
- axios

## How to run
```bash
npm install

npm run dev # localhost:3000

npm run build

npm run start
```

## How to develop
- 먼저 javascript ES6에 대한 학습이 필요하다

### let, const

#### var
- var 를 사용할 때는 제약이 없다
- 재선언, 재할당이 모두 가능하다

```javascript
var str='a';
console.log(str); // a
 
str='b';
console.log(str); // b
 
var str='c';
console.log(str); // c
```

#### let
- 재선언 불가, 재할당 가능한 선언 키워드

```javascript
let str='a';
console.log(str); // a
 
str='b';
console.log(str); // b
 
let str='c';
// Uncaught SyntaxError: Identifier 'str' has already been declared
```

#### const
- 재선언 불가, 재할당 불가한 상수 키워드

```javascript
const str='a';
console.log(str); // a
str='b';
// Uncaught TypeError: Assignment to constant variable.
```

--- 

### Template literals(템플릿 리터럴)
- `(back tick)으로 사용할 수 있다
- ${} 를 통해 javascript 표현식 사용이 가능하다

```javascript
// ES5
var str1=', ';
var str2='World!';
var str3='Hello ' + str1 + str2;
 
// ES6
let str1=', ';
let strt2='World!';
let str3=`Hello ${str1} ${str2}`;
```

--- 

### Multi-line String
- 문자열이 라인을 넘어가게 되면 ‘\n’ 과 덧셈 연산자를 사용했어야했다.
- 백틱을 사용하게 되면서 여러줄의 문자열 관리도 편해졌다.

```javascript
// ES5
var str = 'asdhasfhfsahsfhfshasfhsfahsfahsfahasfh.\n' 
        + 'mxmxmxmxmxmxmxmmxmxmxmxmxmmxmxmxmxmxm.\n';
// ES6
let str = `asdhasfhfsahsfhfshasfhsfahsfahsfahasfh
mxmxmxmxmxmxmxmmxmxmxmxmxmmxmxmxmxmxm`;
```

--- 

### Import, Export(가져오기, 내보내기)
- ES6에서 새롭게 지원하는 컴포넌트 정의를 위한 모듈 형태를 사용하기 위해 모듈을 내보내고(export) 가져오는(import) 방법

```javascript
// export_detail.js
// ES6
export default function detail(name, age) {
    return `안녕 ${name}, 너의 나이는 ${age}살 이다!`;
}
 
// import_master.js
import detail from './export_detail';
 
console.log(detail('영희', 20));
// 출력 => 안녕 영희, 너의 나이는 20살 이다!
```

--- 

### object literal(객체 리터럴)

#### Object
- javascript 는 Object 기반 프로그래밍 언어로 원시 값을 제외한 나머지 값은 모두 Object 이다.
- Object 는 0개 이상의 Property 로 구성된 집합으로 Property 는 key 와 value 로 구성된다.

##### Property
- Object 의 상태를 나타내는 값
```javascript
var obj={
    name: 'kim', // Property
    age : 23     // Property
//  key : value
}
```

##### method
- Property 의 값이 함수일 경우에는 method 라 부른다
- Property 를 참조하고 조작할 수 있는 행위

```javascript
var obj={
    num : 5, // Property
    decrease : function() { // method
        this.num--;
    }
}
```

#### Object Literal
- literal 은 사람이 이해할 수 있는 문자나 약속된 기호를 사용해 값을 생성하는 표기법
- javascript 에서 객체를 생성하는 가장 일반적인 방법이 object literal 을 사용하는 것이다
- object literal 의 {} 는 code block 을 의미하는 것이 아니라 값으로 평가되기 때문에 닫는 괄호 뒤에 세미콜론(;)을 붙인다

```javascript
// object literal
var me = {
  name : 'Kim',
  intro : function() {
    console.log(`My name is ${this.name}`);
  }
};
 
console.log(typeof me); // object
console.log(me); // { name: 'Kim', intro: [Function: intro] }
```

##### Property
- Property 를 나열할 때는 쉼표(,)로 구분한다
```javascript
var me = {
  name : 'Kim',
  age : 23
};
```

- Property 키(key) : 빈 문자열 포함 모든 string 또는 symbol 값
- Property 값(value) : javascript 에서 사용할 수 있는 모든 값
- Property 키는 Property 값에 접근할 수 있는 이름으로서 식별자 역할을 하는데, 식별자 네이밍 규칙을 준수한다면 따옴표를 생략할 수 있으나 그렇지 않은 경우 반드시 따옴표''를 사용해야 한다. (가급적이면 식별자 네이밍 규칙을 따르는 프로퍼티 키를 사용하는 것이 좋다.)
- 또한 이미 존재하는 Property 키를 중복 선언하면 나중에 선언한 Property 가 이전의 것을 덮어쓰며 에러도 발생하지 않는다.

```javascript
var me = {
  name : 'Kim',
  name : 'Yoo'
};
 
console.log(me.name); // Yoo
```

##### method
- javascript 의 함수는 객체라서 값으로 취급할 수 있기 때문에 Property 값으로도 사용할 수 있다.

```javascript
// method
var square = {
  side: 4, // 한 변의 길이
 
  getArea: function() { // 사각형 넓이 구하는 함수
    return this.side * this.side; // this는 객체 자신을 가리키는 참조 변수
  }
};
 
console.log(square.getArea()); // 16
```

##### Property 접근
- 마침표 표기법(dot notation)
    - 마침표 Property 접근 연산자(.) 사용
- 대괄호 표기법(bracket notation)
    - 대괄호 Property 접근 연산자([ ]) 사용

```javascript
var me = {
  name: 'Kim'
};
 
// dot notation
console.log(me.name); // Kim
 
// bracket notation
console.log(me['name']); // Kim
 
// not exist
console.log(me.birth); // undefined
```

- 대괄호 표기법을 사용할 때는 접근 연산자 내부에 지정하는 Property 키는 반드시 따옴표로 감싼 문자열이어야 한다.
- object 에 존재하지 않는 Property 에 접근하면 undefined를 반환한다.

--- 