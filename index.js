// let sum=num=>{
//     let sum=0;
//   for(let i=0;i<=num;i++)
//   {
//          sum+=i;
//   }
//   return sum;
// };
// let sum0f=sum(5);
// console.log(sum0f);
// let ashok="GyanaRam";
// let ashok1=[1,3,5,6,6];
// let ashok2={
//     name:"gyanaram",
//     age: 23
//}
//  for(let char in ashok)
// {
//     console.log(char );
// }
// for(let char in ashok1)
// {
//     console.log(char);
// }
// for(let char of ashok)
// {
//     console.log(char);
// }
// for(let char of ashok1 )
// {
//     console.log(char);
// }
// //
// for (let x in ashok2)
// {
//     console.log(x);
// }
// for(let x of ashok2)
// {
//     console.log(x);
// }
// let index=4;
// console.log(ashok.charAt(index));
// console.log(ashok.charCodeAt(index));
// console.log(ashok.includes('n'));
// //console.log(ashok.includes(b));
// console.log(ashok.indexOf('b'));
// console.log(ashok.indexOf('y'));
// console.log(ashok.includes('b'));
// console.log(ashok.toUpperCase());
// console.log(ashok.toLowerCase());
// console.log(ashok[0]);
// console.log(ashok.at[-1]);
// console.log(ashok.slice(0,2));
// console.log(ashok);
// console.log(ashok.substring(2,7));
// console.log(ashok);
// console.log(ashok.slice(2));
// console.log(ashok.substring(2));
// console.log(ashok);
// let harlal="pankaj";
// let viru=harlal.concat(ashok);
// console.log(viru);
// let str3=viru.concat(harlal," chutiya hai");
// console.log(str3);
// let arr=[1,2,3,4,5,6,7,8];
// let x=arr.pop();
// console.log(arr);
// console.log(x);
// let y=arr.slice(1,2);
// console.log(arr);
// console.log(y);
// // let z=splice(1,6,9);
// // console.log(arr);
// // console.log(z);
// function fuffa(a,b)
// {
//    return 0;
// }
// let pankah=arr.includes(2);
// console.log(pankah);
// arr.unshift(11,29,12);
// console.log(arr);
// arr.sort(fuffa);
// console.log(arr);
//let username="ashok";
// let splitedname= username.split("");
// let reversedname=splitedname.reverse();
// let newname=reversedname.join("");
// console.log(username);
// console.log(splitedname);
// console.log(reversedname);
// console.log(newname);
//let arr=[...username];
// let arr2=[2,3,5,6,8];
// // let arrr3=[...arr2];
// // console.log(arrr3);
// // console.log(arr);
// // console.log(arr2["0"]);
// // console.log(arr2[0]);
// // let person={
// //     name:"manku",
// //     1: "lowda"
// // };
// // console.log(person["1"]);
// let B=arr2.reduce((arr,cr)=>{
//     if(cr>3)
//     {
//         arr.push(cr*2);
//     }
//     return arr;
// },[]);
// console.log(B);
// console.log(arr2);
// let arr=['a','b','a','c','b','c','d','e'];
// let x=arr.reduce((acc,cr)=>cr in acc?{...acc,[cr]:acc[cr]+1}:{...acc,[cr]: 1},{});
// // console.log(x);
// let arr1=[1,2,3,4,5,6];
// let y=arr1.reduce((acc,cr)=>cr%2==0?{...acc,even:acc.even+=cr}:{...acc,add:acc.add +=cr},
          
// {even:0,add:0});
// console.log(y);
// let arrx=[10,17,61,54,44,32,39,23];
// let c=arrx.filter(x=>x<40).reduce((ac,y)=>ac=ac+y);
// console.log(c);
// let stri="The quick brown fox jump over the lazy dog";
// function arrwvowels(str){
//        let vowels=["a","e","i","o","u"];
//        let result="";
//       for(let a of str)
//       {
//         if(!vowels.includes[a])
//             {
//                  result+=a;
//             }
            
//       }
//       return result;
// };
// // arrwvowels();
// console.log(arrwvowels(stri));
// let ac=0;
// function loda(a){
//     console.log(arguments);
//     // arguments[0]=9;
//     // console.log(arguments[0]);
//     console.log(a);
// }
// loda(ac);
// console.log(ac);
