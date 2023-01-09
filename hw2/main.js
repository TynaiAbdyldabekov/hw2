let list = [10, 20, 30, 50, 235, 3000]
for (element of list) {
    if (String(element)[0] === '1') {
        console.log(element);
    } else if (String(element)[0] === '2') {
        console.log(element);
    } else if (String(element)[0] === '5') {
        console.log(element);
    }
}


for (let i = 20; i >= 0; i--)
    console.log(i)

let kaka = prompt('выберите цвет светофора')
   let kaka2 = {
    red:'красный',
     yellow:'желтый',
       green:'зеленый'
}
if (kaka === kaka2.red){
    alert('стоп')
} else if (kaka === kaka2.yellow){
    alert('подождите')
} else if (kaka === kaka2.green){
    alert('идите')
} else {
    alert('выберите цвет!')
}
