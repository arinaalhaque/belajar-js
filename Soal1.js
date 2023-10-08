// requirement
// 1. output adalah akar pangkat 2 dari x (input)
// 2. input harus bilangan genap
// 3. jika user input angka kurang dari 0, user get error message "Tidak bisa input bilangan negatif"
// 4. jika user input angka ganjil, user get error message "Tidak bisa input bilangan ganjil"

// dev plan
// 1. tampilkan text "enter a number:"
// 2. input number "2"
// 3. tampilkan text "akar pangkat=4"
// 4. input number "-1"
// 5. tampilkan text "tidak bisa input bilangan negatif"
// 6. input number "3"
// 7. tampilkan text "tidak bisa input bilangan ganjil"

const prompt = require('prompt-sync')({sigint:true});
const x = prompt ('enter a number:');
if (x<0){
    console.log ("Tidak bisa input bilangan negatif")
} else if (!(x%2==0)){
    console.log ("Tidak bisa input bilangan ganjil")
}
else {
    console.log ('akar pangkat=')
    console.log(Math.sqrt(x))
}


