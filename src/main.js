// import { add } from './add'
// import { Multiply } from './multiply'

// console.log(add(1, 1));

// console.log(new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 100);
// }));

// polyfill이 필요한 코드
// console.log(Object.assign({}, { x: 1 }, { y: 2 }));

// polyfill이 필요한 코드
// console.log(Array.from([1, 2, 3], v => v + v));
// const m = new Multiply(2, 5);
// console.log(m.getMultiply())
import data from '@/data.json'
// let response = fetch("@/data.json");

const btn = document.getElementById("formBtn"),
      forms = document.commentsForm,
      date = new Date(),
      utc = date.getTime() + (date.getTimezoneOffset() * 60 * 1000),
      kstGap = 9 * 60 * 60 * 1000,
      today = new Date(utc + kstGap); 
      // console.log(today.getFullYear(), today.getMonth() + 1, today.getDate(), today.getDay())
      // console.log(today.getTime(), today)
// const currentDay = new Date(today.getFullYear(), today.getMonth(), 0),
//       prevDate = currentDay.getDate(),
//       prevDay = currentDay.getDay(),
//       endDay = new Date(today.getFullYear(), today.getMonth()+1, 0),
//       nextDay = 7 - (endDay.getDay() + 1)
//       for (let i = prevDate - (prevDay + 1); i <= prevDate; i++) {
//         console.log(i)  
//       }
//       for (let i = 1; i <= prevDate; i++) {
//         console.log(i)  
//       }
//       for (let i = 1; i <= nextDay; i++) {
//         console.log(i)  
//       }

// btn.addEventListener("click", (event) => {
//   event.preventDefault()
//   data["sunos"] = {
//     "pass": "1111",
//     "coments": "축하해요~"
//   }
//   console.log(data)
//   if(forms.name.value === '') {alert("이름을 입력해 주세요"); return} 
//   if(forms.pass.value === '') {alert("비밀번호를 입력해 주세요"); return} 
//   if(forms.contents.value === '') {alert("축하메세지를 남겨주세요"); return}
//   console.log(forms.name.value, forms.pass.value, forms.contents.value)
// })