# Title : Vanila Javascript + Vue.js 



## 1. Variable 
* var 변수는 변수를 선언하고 선택적으로 초기화 할 수 있음 
* let 변수는 블록 스코프의 범위를 가지는 지역변수를 선언하고, 선언과 동시에 임의값으로 초기화 가능 
* const는 값이 변화하지 않을 때 사용 (상수)
  

## 2. Datatype 
* Boolean : true or false
* Null : null 하나의 값만 가질 수 있다. 비어있는 값을 표현한다. 
* Undefined EcmaScript5 명세에 따라 설정 불가, 쓰기 불가한 속성입니다. 값을 할당하지 않는 변수입니다.
* Number : 숫자를 다루기위한 변수이고 소수점이하 17자리정도 유지하며 산술은 반올림의 대상이 된다.
  (Number가 가질 수 있는 가장 큰 값은 1.8E308) 
* Bigint : Number 원시 값이 안정적으로 나타낼 수 있는 최대치인 2^53-1보다 큰 정수를 표현할 수 있는 내장 객체 
* String : String 전역 객체는 문자열(문자의 나열)의 생성자

```
예시))
const name = "scalper";
const age = 30;
const isMale = true;
const isFemale = false;

let money = null;
let girlfriend = undefined;

```
## 3. Array 

* Array 클래스는 리스트 형태의 고수준 객체인 배열을 생성할 때 사용하는 전역 객체

```
예시)) 
const animals = ["lion", "rabbit", "monkey", "dog","cat"];

배열 function 사용
animals.push("tigger"); //배열 끝에 요소 추가
animals.pop(); // 배열의 끝에서 요소 제거 
animals.shift(); //배열의 앞쪽에서 요소 제거 
animals.unshift("dog"); // 배열의 앞쪽에서 요소 추가

```
## 4. object

* Object 클래스는 JavaScript의 데이터 유형 중 하나를 나타냅니다. 다양한 키 모음 및 더 복잡한 엔티티들을 저장하는 데 사용됩니다. 

```
예시))

const monkey = {
    name: 'kiki',
    age: 5,
    weight: 40,
    gender: 'male',
    isCute: true,
    food: ["banana", "carrot", "potato"],
    home: {
        location: "zoo",
        size: "big",
        price: 3000
    }
```

## 5. function

* 보통 함수란 자신의 외부(재귀 함수의 경우 스스로) 코드가 '호출'할 수 있는 하위 프로그램입니다. 프로그램과 마찬가지로, 함수 역시 명령문의 시퀀스로 구성된 함수 본문을 가집니다. 함수에 값을 '전달'하면, 함수는 값을 '반환'할 것입니다. 

```
예시))

const item1 = 3000;
const item2 = 2000;
const item3 = 5000;

const loyalty = 1000;

function showPrice(price){
    return price + loyalty;
}
const showPrice = function(price){
    return price + loyalty;
}

```


## 6. loop
* 루프는 어떤 것을 반복적으로 시행할때 빠르고 간편한 방법을 제공합니다 

```
예시))


const animals = [
    {name: 'lion', size:'big'},
    {name:'monkey', size:'medium'},
    {name:'dog', size:'small'}, 
]

for(let i=0; i<animals.length; i++){
    console.log(animals[i])
}

for(let animal of animals){
    console.log(animal);

```

* 6.1 foreach 
* foreach() 메서드는 주어진 함수를 배열 요소 각각에 대해 실행합니다. 
  ```
  예시))

  const coronaCases = [
    {city: 'Seoul', case: 1000},
    {city: 'Daejeon', case: 500},
    {city: 'Daegu', case: 300},
    {city: 'Busan', case: 100},
    {city: 'Gwangju', case: 50},
  ]

    coronaCases.forEach(function(corona, index){
        console.log(corona.city,index)
    });

  ```

## 7. map


* map 어떠한 배열을 가공하여 새로운 형태의 배열을 만들 때 사용


```
예시))

const coronaCities = coronaCases.map((corona)=>{
    //console.log(corona)
    //return corona.city 
    return `${corona.city}의 확진자 발생 수는 ${corona.case}`;
})

console.log(coronaCities)

```

## 8. reduce



* 배열의 값을 이용하여 특정 값을 도출하거나 재가공 할때 사용
  
```
예시))

const numbers = [10,123,22,33,44,55];
const totalNumber = numbers.reduce((acc, cur)=> {
     console.log(acc, cur);
     return acc + cur;
})
```

## 9. filter

*  배열에서 특정한 값을 가진 데이터를 필터링 할때   사용

```
예시))

const dangerousCity = coronaCases.filter(function(corona,index){
    return corona.case  > 300;

})

console.log((dangerousCity))

```

## 10. DOM, Event

* DOM ( Document Object Model ) 은 웹 페이지를 나타내는 HTML과 같은 문서 구조를 메모리에 표시하여 웹 페이지를 스크립트 또는 프로그래밍 언어에 연결합니다. HTML, SVG 또는 XML 문서를 객체로 모델링하는 것이 핵심 JavaScript 언어의 일부가 아니지만 일반적으로 JavaScript를 나타냅니다

* Event : Event 인터페이스는 DOM 내에 위치한 이벤트를 나타냅니다.

이벤트는 마우스를 클릭하거나 키보드를 누르는 등 사용자의 액션에 의해 발생할 수도 있고, 비동기적 작업의 진행을 나타내기 위해서 API가 생성할 수도 있습니다. 요소의 HTMLElement.click() 메서드를 호출하거나, 이벤트를 정의한 후 특정 대상에 대해서 EventTarget.dispatchEvent()로 발송하는 등 프로그래밍적으로도 만들어낼 수 있습니다.


```

예시))

const title = document.getElementById("title");
const list = document.getElementsByClassName("list");


query selector
const title = document.querySelector("#title")
const list = document.querySelector(".list");
const items = document.querySelectorAll(".item")
const btn = document.querySelector("#btn");
const naver = document.querySelector(".naver"); 


btn.addEventListener("click",function(){
    alert("탕수육")
})

naver.addEventListener("click", (e) => {
    e.preventDefault();
    alert("naver")
    console.log(e)
})

title.style.color = "red"
title.style.backgroundColor = "green";
title.innerText = "<input type='text'/>"
btn.innerText = "button"

list.remove()
list.firstElementChild.remove()
list.lastElementChild.remove()
list.lastElementChild.innerHTML = "<a>link</a>"

console.log(title, list, items);

```




## 12. Fetch API

* Fetch API는 리소스를 가져오기 위한 인터페이스를 제공합니다(네트워크 전체 포함). 을(를) 사용해 본 사람에게는 친숙하게 보일 수 XMLHttpRequest있지만 새 API는 더 강력하고 유연한 기능 세트를 제공합니다.

```
예시))

// http request
const url = "https://api.covid19api.com/country/south-korea/status/confirmed?from=2021-09-01T00:00:00Z&to=2021-09-09T00:00:00Z"

// json()
//응답을 받아 읽고 json 데이터를 파싱하여 자바스크립트 Object를 만들어 주는 메서드

// 코드가 긴 버전 
const corona = fetch(url).then(function(res){
    return res.json()
    //console.log(res)
}).then((data)=> console.log(data))


// 코드를 간결하게 압축한 버전
const corona = fetch(url).then(res=> res.json())
.then(data => console.log(data))


```