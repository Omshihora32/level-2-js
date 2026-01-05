// localstorage → browser ni andar data ne store kar te data ne hold kri rakhe even if brower badh pan hoy (data size ~ 5mb and they store only strings)

// session storage → aa apda data temporary store kare che atle ke tab bandh thayu and data will lost (data size ~ 5mb)

// cookies → aa pan data store kare che pn aa data browser ni cookie name ni properties ma save thay che ane a cookie concept nana athva light data mate hoy che.(data size ~ 4kb)


// what we need to learned(used in both local and sessionstorage).
// 1. how to store the data in storage. → setItem
// 2. how to fetch the data in storage. → getItem
// 3. how to remove the data in storage.→ removeItem
// 4. how to update the data in storage.→ setItem(use overwritting to update the value.)

//1. 
// localStorage.setItem("name" , "Om");

//2.
// let val = localStorage.getItem("name");
// console.log(val);

//3.
// localStorage.removeItem("name");

//4.
// localStorage.setItem("name" , "om_shihora");

localStorage.setItem("friends" , JSON.stringify(["om" , "tirth" , "utsav" , "deepo" , "jaylo"]));
// friends: '["om","tirth","utsav","deepo","jaylo"]'. store like this.

JSON.parse(localStorage.getItem("friends")); 
// convert string into Array :- ['om', 'tirth', 'utsav', 'deepo', 'jaylo'];