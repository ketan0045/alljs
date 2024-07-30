// const bucket = ["cofee", "chips", "vegetable", "rice","salt"];

// const frieRice = new Promise((resolve, reject) => {
//     if (bucket.includes("rice") && bucket.includes("vegetable") && bucket.includes("salt")) {
//         resolve("yessssssss")
//     } else {
//         reject("noooooo")
//     }
// })

// frieRice.then((one) => {
//     console.log(one 15 == )

// }).catch((errs)=>{
//    console.log(errs) 
// })


// funtcion func1(){
//     return new Promise((resolve, reject) => {
//         const value = true;
//         if (value) {
//             resolve()
//         } else {
//             reject()
//         }
//     })
// }


// func1().then(()=>{
//    console.log("success")
// }).catch(()=>{
//     console.log("errr")
// })

// const data = fetch("https://jsonplaceholder.typiode.com/posts").then((res)=>{
//     console.log(res.url)
// }).catch((ers)=>{
//     console.log(ers)
// })


// async function apiCall(){
//   const apiData1 = await fetch("https://jsonplaceholder.typiode.com/posts");
// //   const apiData2 = await apiData1.json();
//   console.log(apiData1)

// }

// const allData = apiCall().then((datas)=>{
//     console.log(datas)
// })
// console.log(allData)


// const URL ='https://jsonplaceholder.typicode.com/posts';

// const getPosts = async () =>  {
//     const response = await fetch(URL);
//     console.log(response)
//     const data = await response.json();
//     console.log(data)
//     return data;
// }



// const myData = getPosts();
// myData.then((alldata)=>{
//     console.log(alldata)
// }).catch((errs)=>{
//     console.log(errs)
// })


// fetch("https://jsonplaceholder.typicode.com/posts").then((data1) => {
//   return  data1.json()
// }).then((data2) => {
//     console.log(data2)
// })


// async function postdata(){
//   const data1 =await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data2  =await data1.json();
//   return data2

// }

// postdata().then((data11)=>{
//     console.log(data11)
// })

// setInterval(() => {
//     let alldata = new Date().toLocaleTimeString();
//     document.getElementById("timing").innerText = alldata
// }, 1000)


// function input11() {
//     console.log("1122")
//    const data1 = document.getElementById("input1").value
//    const data2 = document.getElementById("input2").value
//    const allshow = document.getElementById("show")
//    console.log(`${data1}  andddd ${data2}`)
//    allshow.innerHTML = `${data1}  andddd ${data2}`


// const datas = document.getElementById("input2");
// console.log(datas);
// datas.addEventListener('change', () => {

//     const data1 = document.getElementById("input1").value
//     const data2 = document.getElementById("input2").value
//     const allshow = document.getElementById("show")
//     console.log(`${data1}  andddd ${data2}`)
//     allshow.innerHTML = `${data1}  andddd ${data2}`

// });


//     const data1 = document.querySelector(".hello")
//     const data2 = document.querySelector("#click");

// const myfunc=()=>{
//   const closee =setTimeout(()=>{
//         data1.innerHTML = "bbbbbbbbbbbb"
//     },1000)
// }


// data2.addEventListener("click",myfunc)



// const showing = document.querySelector(".show");
// const startbtn = document.getElementById("start");
// const stop = document.getElementById("stop");

// let num = 0;
// let stopping;
// const timingfunc=()=>{
//     stopping = setInterval(()=>{
//         showing.innerHTML = `${num}`
//         num++
//     },1000)
// }
// startbtn.addEventListener("click",timingfunc);

// stop.addEventListener("click",()=>{
//     clearInterval(stopping)
// })


// const valculateTemp = () => {
//     const numberTemp = document.getElementById("temp").value
//     const tempSelected = document.getElementById("temp_diff");

//     const valueTemp = temp_diff.options[tempSelected.selectedIndex].value
//     //  console.log(valueTemp)


//     const celTofah = (cel)=>{
//         const fahrenhit = Math.round((cel* 9/5)+ 32);
//         return fahrenhit
//     }

//     const fahTocel = (fehr)=>{
//         const celsius = Math.round((fehr - 32)* 5/9 );
//         return celsius
//     }

//     let result;

//     if (valueTemp == "cel") {
//         result = celTofah(numberTemp);
//         document.getElementById("resultContainer").innerHTML = `= ${result}fahrenheit`
//     } else {
//         result = fahTocel(numberTemp);
//         document.getElementById("resultContainer").innerHTML = `= ${result}celsius`
//     }
// }

// valculateTemp();


const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
    counter.innerHTML = 0;

    const upadateCounter = () => {

        const targetCount = +counter.getAttribute("data-target");
        console.log(targetCount, "targetCount")
        const startCount = Number(counter.innerHTML);
        console.log(startCount, "startCount")
        const incr = targetCount / 100;
        console.log(incr, "incr")

        console.log(startCount < targetCount, "condition")
        if ((startCount < targetCount)) {
            // debugger
            counter.innerHTML = `${Math.round(startCount + incr)}`
            console.log(`${Math.round(startCount + incr)}`, "ifffffff")
            setTimeout(upadateCounter, 10)
        } else {
            counter.innerHTML = targetCount;
            console.log(targetCount, "elseeee")
        }
    }

    upadateCounter();

})


