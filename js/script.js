// 1.მოცემულია მასივი: let array2 = [14, 150, 'css', null, 'javascript', 25];შექმენით ახალი მასივი 
// map ფუნქციის საშუალებით შემდეგი ლოგიკით: თუ ელემენტი არის რიცხვი, ამ მასივში უნდა იყოს ამ რიცხვის 
// კვადრატი. თუ ელემენტი არის სტირნგი, მაშინ ახალ მასივში უნდა  იყოს ეს ტექსტი დიდი ასოებით. სხვა 
// შემთხვევაში ელემენტი უნდა დაემატოს უცვლელად.

let array2 = [14, 150, 'css', null, 'javascript', 25];
let newArray = array2.map(item => typeof item === 'number' ? item * item : (typeof item === 'string') ? item.toUpperCase() : item);
console.log(newArray)

 // 2. prompt ფუნქციის საშუალებით კითხეთ მომხმარებელს შემდეგი კითხვა: საქართველოს დედაქალაქი? სწორი პასუხი ჩაწერეთ პატარა ასობიეთ 
// და  შეინახეთ ცვლადში. როდესაც მიიღებთ პასუხს მომხმარებლისგან, გადაიყვანეთ ეს პასუხი პატარა ასოებად და შეადარეთ სწორ პასუხს. თუ 
// მომხმარებლის პასუხი სწორია, დაბეჭდეთ სწორია, თუ არა მაშინ დაბეჭდეთ არასწორია.


let citizen = 'tbilisi';
let answer =prompt('საქართველოს დედაქალაქი');
let correct = (answer.toLowerCase()===citizen) ? 'სწორია' : 'არასწორია' 
console.log(correct);

// 3. მოცემულია მასივი, შემდეგი მნიშვნელობებით - let array1 =[“hello1”, 14,24, “hello2”] გამოიტანეთ მარტო ციფრები მეთოდის საშუალებით;

let array1 =['hello1', 14,24, 'hello2'];
let newArray1 = array1.filter(item => typeof item === 'number');
console.log(newArray1);

// 4. მოცემულია მასივი:let languages = ['html', 'css', 'javascript', ‘python’, 'php'];
// ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვა რომლის სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;

let languages = ['html', 'css', 'javascript', 'python', 'php'];
let newLanguages = languages.filter(item => item.length > 3);
console.log(newLanguages);

// 5. მოცემულია მასივი: let words = ['Madrid', 'rome', 'Milan', 'berlin'];filter მეთოდის საშუალებით დააბრუნეთ 
// მასივი, რომელიც შედგება ისეთი სიტყვებისგან რომელიც შეიცავს ასო m-ს ან M-ს;

let words = ['Madrid', 'rome', 'milan', 'berlin'];
let alphabet = words.filter(item => item.toLowerCase().includes('m'));
console.log(alphabet);

// 6 მოცემულია: let link = “https://google.com”. დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს ამ ცვლადს, და შეამოწმეთ 
// მეთოდის საშუალებით არის თუ არა ამ ცვლადში “https://“. თუ კი გამოიტანეთ - კი მოიცავს, თუ არა - არა, არ მოიცავს

let link = 'https://google.com';
let  wrightLink= (item => item.includes('https://') ?'კი მოიცავს':'არა, არ მოიცავს');
console.log(wrightLink(link));

// 7.მოცემულია მასივი:let array7 = [5,4,3,2,1];მეთოდის საშუალებით მიიღეთ ახალი მასივი, რომელშიც array3-ის მასივიდან 
// თითოეული რიცხვი იქნება თავის თავზე გამრავლებული;

array7 = [5,4,3,2,1];
let multiply = array7.map(item=> item *item );
console.log(multiply);

// 8.მოცემულია სტრინგი - ‘12345’, გაიგეთ ამ რიცხვებსის ჯამი. ( უნდა გადაიყავნოთ მასივში, გამოთვალეთ ჯამი, და შემდგ თითოეული 
// სტრინგი გადაიყავნოთ რიცხვში)

let string = '12345';
let numb =string.split('');
let sum = numb.reduce((a,b) => a +Number(b),0);
console.log(sum);

// 9.Გამოთვალეთ ნებისმიერი რიცხვებს ჯამი reduce მეთოდით

let number = [2, 4, 7, 10, 14];
let sum2 = number.reduce((a,b) => a + b, 0);
console.log(sum2);

// 10. Გაერთიანეთ სამი მასივის მნიშვენლობები let arr1 = [1, 2]; let arr2 = [3, 4]; let arr3 = [5, 6];

let arr1 = [1, 2]; 
let arr2 = [3, 4]; 
let arr3 = [5, 6];
let masiveArray = arr1.concat(arr2, arr3);
let sum3 = masiveArray.reduce((a,b) => a + b, 0);
console.log(sum3);

// 11.მოცემულია მასივი, რომელშიც არის ერთზე მეტი მნიშვნელობა, მაგრამ კონკრეტულად რამდენი არ ვიცით, შეიძლება 100 ან 200 ან 10. 
// მაგ: arr  splice მეთოდის საშუალებით წაშალეთ ბოლოს წინა მნიშვნელობა და მაგის მაგივრად ჩასვით “strawberry”. 

let arr4 = [1, 3, 6, 2, 10, 14, 21, 13]
let last = arr4.length-2;
arr4.splice(last,1,'strawberry');
console.log(arr4);

// 12. მოცემულია სტრინგი: let info= ‘good day”, ამოიღეთ სიტყვა day და ჩასვით ახალ ცვლადში slice მეთოდის საშუალებით.

let info = 'good day';
let start = info.indexOf('day');
let word = info.slice(start, start + 3);
console.log(word);

// 13. დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს სტრინგს, და დააბრუნებს ჩაწერილი სტრინგის სიგრძეს.

let stringLeng=(str)=> str.length
let string2 = 'hello i`m lasha bokuchava';
let leng= stringLeng(string2);
console.log(leng);

// 14.შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): 
// javascript და python;მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
// წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;

let arr5 =[5, 25, 89, 120, 36];
arr5.push('javascript', 'python')
arr5.unshift('html', 'css');
console.log(arr5);
console.log(arr5.length);
arr5.shift()
arr5.pop()
console.log(arr5)

// 15.შექმენით მასივი, შემდეგი ელემენტებით:ფორთოხალი,ბანანი,კივი;გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
//   მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო; გამოიტანეთ ეკრანზე, 
//   რამდენი ელემენტი გაქვთ მასივში;მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
//   გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;

let fruits = ['orange', 'banana', 'kiwi'];
console.log(fruits.length);
fruits.unshift ('apple', 'pineapple');
fruits.push('watermelon');
console.log(fruits);
console.log(fruits.length);
fruits.splice(2,0, 'mango');
fruits.shift();
fruits.pop();
console.log(fruits.length);

// 16. მოცემულია მასივი let array6 =[1, 2, 3, 4, 5]. splice მეთოდის საშუალებით მიიღეთ: [1, 2, 3, 'a', 'b', 'c', 4, 5].	

let arr6 =[1, 2, 3, 4, 5];
arr6.splice(3,0,'a','b','c');
console.log(arr6);


// 17. მოცემულია მასივი: let array17 =  [15, 100, 25, 10, 36]წაშალეთ ამ მასივიდან რიცხვი 10;

let arr7 =  [15, 100, 25, 10, 36];
 let index =arr7.indexOf(10);
 if(index !==-1){
    arr7.splice(index,1)
 }
 console.log(arr7);

//  18.მოცემულია მასივი:   let array18 = [ 1, 2 , 3 , 4, 5]  Splice მეთოდის საშალებით 3-ის მაგივრად ჩასვით სიტყვა three;

let array8 = [ 1, 2 , 3 , 4, 5]
let index1 = array8.indexOf(3);
array8.splice(index1,1,'three')
console.log(array8);

// 19. მოცემულია მასიცი:let array19 = [14, 150, 'css', null, 'javascript', 25];შექმენით ახალი მასივი map ფუნქციის საშუალებით შემდეგი 
// ლოგიკით: თუ ელემენტი არის რიცხვი, ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი. თუ ელემენტი არის სტირნგი, მაშინ ახალ მასივში უნდა იყოს 
// ეს ტექსტი დიდი ასოებით. სხვა შემთხვევაში ელემენტი უნდა დაემატოს უცვლელად.
let array9 = [14, 150, 'css', null, 'javascript', 25]
let newArray3 = array9.map(item => typeof item === 'number' ? item * item : typeof item === 'string' ? item.toUpperCase() : item);
console.log(newArray3);


// 20. მოცემულია მასივი:let  array10 = [12, 25, 3, 6, 8, 14, 7, 23];map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array20 მასივიდან 
// თითოეული ელემენტი იქნება 3-ზე გაყოფილი;

let  arr8 = [12, 25, 3, 6, 8, 14, 7, 23];
let newArr8 = arr8.map(item => item / 3)
console.log(newArr8);

// 21. მოცემულია მასივი: let array21 =['apple', 'orange', 'mango', 'kiwi']. მეთოდის საშუალებით მიიღეთ: ['apple', 'orange', 'strawberry', 'avocado','mango', 'kiwi'  ].   

let arr9 =['apple', 'orange', 'mango', 'kiwi'];
let index2 = arr9.indexOf('mango')
arr9.splice(index2, 0,  'strawberry', 'avocado' )
console.log(arr9);

// 22. .მოცემულია მასივი:let numbers = [12, 56, 18, 35, 10]; მეთოდის საშუალებით ამოიღეთ მხოლოდ ლუწი რიცხვები; 

let numbers = [12, 56, 18, 35, 10];
let even = numbers.filter( item => item %  2 === 0);
console.log(even); 

// 23. მოცემულია მასივი:let array23 = [1,2,3,4,5];reduce მეთოდის საშუალებით მიიღეთ რიცხვების გამრავლების შედეგი (1 * 2 * 3 * 4 * 5);

let arr10 = [1,2,3,4,5]
let newArr9 = arr10.reduce((a,b)=> a * b, 1) 
console.log(newArr9);

// 24. მოცემულია მასივი: let array24 =  [15, 100, 25, 10, 36]წაშალეთ ამ მასივიდან რიცხვი 10;

let arr11 =  [15, 100, 25, 10, 36]
index3 = arr11.indexOf(10);
arr11.splice(index,1)
console.log(arr11);


















// // const numbers = [1, 2, 3, 4, 5];
// // let newNumbers = numbers.map(num => num * 2);
// // console.log(newNumbers);

// // const names = ['ana', 'giorgi', 'nino'];
// // let capital = names.map(name => name.toUpperCase())
// // console.log(capital);

// // const users = [
// //     { name: 'Luka', age: 20 },
// //     { name: 'Mariam', age: 25 },
// //     { name: 'Nika', age: 30 }
// //   ];
// // let Names = users.map(name =>name.name )
// // console.log(Names);

// // const Numbers = [10, 20, 30, 40];
// // let total = Numbers.reduce((a,b) => a+b,0)
// // console.log(total);

// // const words = ['Hello', ' ', 'world', '!'];
// // let oneString = words.reduce((a,b) => a+b ,'')
// // console.log(oneString);

// // const products = [
// //     { name: 'Laptop', price: 1000 },
// //     { name: 'Phone', price: 500 },
// //     { name: 'Tablet', price: 300 }
// //   ];
  
// //   let Total = products.reduce((a,b) => a + b.price, 0);
// //   console.log(Total);

// //   const temperaturesC = [0, 10, 20, 30];
// // let temperaturesF = temperaturesC.map(cel => cel * 1.8 + 32 )
// // console.log(temperaturesF);

// // const Words = ['apple', 'banana', 'cherry'];
// // let lenght = Words.map (wordLenght => wordLenght.length )
// // console.log(lenght);

// // const numbers = [4, 9, 16, 25];
// // let quadro = numbers.map( num => Math.sqrt(num) )
// // console.log(quadro);

// // const people = [
// //     { name: 'Nina', age: 28 },
// //     { name: 'Gio', age: 33 }
// //   ];
// //   let about = people.map( nm => `${nm['name']} is ${nm['age']} years old`)
// //   console.log(about);

// //   const numbers = [2, 3, 4];
// //   let quadro = numbers.reduce((a,b) => a*b, 1 )
// //   console.log(quadro);

//   const names = ['ana', 'giorgi', 'nino'];
//   let one = names.reduce((a, b) => a + ', ' + b );
//   console.log(one);
  
// //   const grades = [70, 85, 90, 100];
// //   let sum = grades.reduce((a,b) =>a + b , 0 )
// //   let midle = sum / grades.length
// //   console.log(midle);

//   const votes = ['yes', 'no', 'yes', 'yes', 'no'];
//   let count = votes.reduce((a,b) => {
//     a[b]=(a[b] || 0 ) +1
//     return a
//   },{})
//   console.log(count);

//   const fullNames = ['Luka Kalandadze', 'Nino Mgeladze'];
//   let lastName = fullNames.map(name => name.split(' ')[1])
//   console.log(lastName);

//   const fullnames = [
//     'Giorgi Nodar Khutsishvili',
//     'Nino Lasha Mgeladze',
//     'Luka Davit Kalandadze' ];
//     let lastname = fullnames.map(name=> name.split(' ')[fullnames.length-1])
//     console.log(lastname);

//     const numbers = [5, 12, 8, 130, 44];
//     let result = numbers.map(num =>{
//         return{
//             original : num,
//             double : num *2,
//         };
//     });
//     console.log(result);

//     const strings = ['js', 'react', 'node'];
//     let capital = strings.map(num => num.toUpperCase())
//     console.log(capital);

//     const users = [
//         { name: 'Ana', email: 'ana@gmail.com' },
//         { name: 'Gio', email: 'gio@yahoo.com' }
//       ];
//       let string = users.map( num =>`${num['name']} <${num['email']}>` )
//       console.log(string);

//       const items = [
//         { name: 'pen', quantity: 2 },
//         { name: 'book', quantity: 3 },
//         { name: 'notebook', quantity: 5 }
//       ];
      
//       let sum = items.reduce((sum,item) => sum + item.quantity,0);
//       console.log(sum);

//       const scores = [10, 20, 30, 40 ,42];
//       let revers = scores.reduce((a,b)=> [b, ...a],[] )
//       console.log(revers);
//       let lastEven = scores[scores.length-1] % 2 === 0;
//       let reverse = lastEven ? scores.reduce((a,b)=> [b,...a],[]):scores;
//       console.log(reverse);