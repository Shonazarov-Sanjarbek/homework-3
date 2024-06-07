// {
//     // 1 - masala
//     alert("Butun son kiritganda u musbat bo'lsa 1 ga oshirilsin aks holda o'zgarmasdan ekranga chiqsin")
//     let a = +prompt("butun son kiriting")
//     if(a > 0){
//         a++
//         alert(a)
//     }else{
//         alert(a)
//     }
// }

// {
//     // 2 - masala
//     alert("Butun son kiritganda u musbat bo'lsa 1 ga oshirilsin aks holda 2 ga kamayib ekranga chiqsin")
//     let a = +prompt("butun son kiriting")
//     if(a > 0){
//         a++
//         alert(a)
//     }else{
//         a -= 2
//         alert(a)
//     }
// }


// {
//     // 3 - masala
//      alert("Butun son kiritganda u musbat bo'lsa 1 ga oshirilsin, manfiy bo'lsa 2 ga kamaysin, 0 ga teng bo'lsa 10 soni chiqsin ekranga chiqsin")
//     let a = +prompt("butun son kiriting")
//     if(a == 0){
//         a = 10
//         alert(a)
//     }else if(a > 0){
//         a++
//         alert(a)
//     }else{
//         a -= 2
//         alert(a)
//     }   
// }

// {
//     // 4 - masala 
//     alert("Uchta son kiritilganda nechta musbat son borligi aniqlansin")
//     let a = +prompt("birinchi sonni kiriting")
//     let b = +prompt("ikkinchi sonni kiriting")
//     let c = +prompt("uchinchi sonni kiriting")
//     let musbat = 0

//     if(a > 0){
//         musbat++
//     }

//     if(b > 0){
//         musbat++
//     }

//     if(c > 0){
//         musbat++
//     }

//     alert(`${musbat} ta musbat son bor`)
// }

// {
//     // 5 - masala
//     alert("Uchta son kiritilganda nechta musbat va manfiy son borligi aniqlansin")

//     let a = +prompt("birinchi sonni kiriting")
//     let b = +prompt("ikkinchi sonni kiriting")
//     let c = +prompt("uchinchi sonni kiriting")
//     let musbat = 0
//     let manfiy = 0

//     if(a > 0){
//         musbat++
//     }else{
//         manfiy++
//     }

//     if(b > 0){
//         musbat++
//     }else{
//         manfiy++
//     }

//     if(c > 0){
//         musbat++
//     }else{
//         manfiy++
//     }

//     alert(`${musbat} ta musbat va ${manfiy} ta manfiy son bor`)
// }

// {
//     // 6 - masala
//     alert("Ikkita butun son kiritganda shu sonlarning kattasi aniqlansin")

//     let a = +prompt("a sonini kiriting")
//     let b = +prompt("b sonini kiriting")

//     if(a > b){
//         alert(`${a} soni katta`)
//     }else{
//         alert(`${b} soni katta`)
//     }

// }

// {
//     // 7 - masala
//     alert("Ikkita son kiritilganda kichigini tartib raqamini chiqarilsin")

//     let a = +prompt("birinchi sonni kiriting")
//     let b = +prompt("ikkinchi sonni kiriting")

//     if(a > b){
//         alert(`ikkinchidagi ${b} soni kichik`)
//     }else{
//         alert(`birinchidagi ${a} soni kichik`)
//     }
// }

// {
//     // 8 - masala
//     alert("Ikkita son kiritganda shu sonlarning avval kattasini kegin kichigin chiqaruvchi programma tuzlsin")

//     let a = +prompt("birinchi sonni kirting")
//     let b = +prompt("ikkinchi sonni kirting")

//     if(a >b){
//         alert(`${a} soni ${b} sonidan katta`)
//     }else{
//         alert(`${b} soni ${a} sonidan katta`)
//     }
// }

// {
//     // 9 - masala
//     alert("a va b haqiqiy sonlarini kiritib shunaqa o'zgartirish kerakki a soni b sonidan kichik holatda a va b sonlari ekranga chiqsin")

//     let a = +prompt("a sonini kiriting")
//     let b = +prompt("b sonini kiriting")

//     if(a < b){
//         alert(`${a} soni ${b} sonidan kichik`)
//     }
// }

// {
//     // 10 - masala
//     alert("a va b butun sonlari kritilganda o'zgaruvchilar o'zaro teng bo'lmasa ularning yig'indisi chiqsin, teng bo'lsa 0 chiqsin.")

//     let a = +prompt("a sonini kiriting")
//     let b = +prompt("b sonini kiriting")

//     if(a != b){
//         let sum = a + b
//         alert(`a soni = ${a} va b soni teng ${b} va ularning yig'indisi = ${sum}`)
//     }else{
//         let c = 0
//         alert(`Javob: ${c},   a soni = ${a} b soni = ${b}`)
//     }
// }

// {
//     // 11 - masala
//     alert("a va b sonlari kiritilganda o'zaro teng bo'lmasa kattasi chiqsin, teng bo'lsa 0 chiqsin. a va b sonlari chiqarilsin")

//     let a = +prompt("a sonini kiriting")
//     let b = +prompt("b sonini kiriting")
//     let c = 0

//     if(a == b){
//         alert (`a soni = ${a} va b soni = ${b} Javob: ${c}`)
//     }else if(a > b){
//         alert(`a soni katta. a soni = ${a} b soni = ${b}`)
//     }else{
//         alert(`b soni katta. a soni = ${a} b soni = ${b}`)
//     }
// }

// {
//     // 12 - masala
//     alert("Uchta son kiritganda ularni kichigi chiqarilsin")

//     let a = +prompt("a sonini kiriting")
//     let b = +prompt("b sonini kiriting")
//     let c = +prompt("c sonini kiriting")

//     if(a < b && a < c){
//         alert (`a soni kichik`)
//     }else if(b < a && b < c){
//         alert (`b soni kichik`)
//     }else if(c < a && c < b){
//         alert (`c soni kichik`)
//     }
// }

// {
//     // 13 - masala
//     alert("uchta son kiritganda ularning o'rtachasi (ya'ni kattasi va kichigi orasidagi son) topilsin")

//     let a = +prompt("a sonini kiriting")
//     let b = +prompt("b sonini kiriting")
//     let c = +prompt("c sonini kiriting")

//     if((a > b && a < c) || (a < b && a > c)){
//         alert(`kattasi va kichigi orasidagi son ${a}`)
//     }else if((b > a && b < c) || (b < a && b > c)){
//         alert(`kattasi va kichigi orasidagi son ${b}`)
//     }else if((c > a && c < b) || (c < a && c > b)){
//         alert(`kattasi va kichigi orasidagi son ${b}`)
//     }
// }

// {
//     // 14 - masala
//     alert("uchta son kiritganda shu sonlarni avval kichigini kegin kattasini kiriting")

//     let a = +prompt("a sonini kiriting")
//     let b = +prompt("b sonini kiriting")
//     let c = +prompt("c sonini kiriting")

//     if((a < b && a < c) && (b > a && b > c)){
//         alert(`kichigi ${a} va kattasi ${b}`)
//     }else if((a < b && a < c) && (c > a && c > b)){
//         alert(`kichigi ${a} va kattasi ${c}`)
//     }else if((b < a && b < c) && (a > b && a > c)){
//         alert(`kichigi ${b} va kattasi ${a}`)
//     }else if((b < a && b < c) && (c > a && c > b)){
//         alert(`kichigi ${b} va kattasi ${c}`)
//     }else if((c < a && c < b) && (a > b && a > c)){
//         alert(`kichigi ${c} va kattasi ${a}`)
//     }else if((c < a && c < b) && (b > a && b > c)){
//         alert(`kichigi ${c} va kattasi ${b}`)
//     }
// }

// {
//     // 15 - masala
//     alert("Uchta son kiritganda ularning yig'indisi eng katta bo'ladigan ikkitasi chiqsin")

//     let a = +prompt("a sonini kiriting")
//     let b = +prompt("b sonini kiriting")
//     let c = +prompt("c sonini kiriting")

//     if((a + b > b + c) || (a + b > a + c)){
//         alert(`${a} va ${b}`)
//     }else if((a + c > a + b) || (a + c > b + c)){
//         alert(`${a} va ${c}`)
//     }else if((b + c > a + b) || (b + c > a + c)){
//         alert(`${b} va ${c}`)
//     }
// }