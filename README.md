# Asynchronous
# Review Materi hari ke 5

  - penjelasan sedikit tentang tugas js-challange
  - penjelasan :
  > JSON.parse() untuk mengubah string JSON menjadi javascript object.
  > JSON.stringify() untuk mengubah javascript object menjadi string JSON.
  > reduce ()Mengakumulasikan atau mengurangi nilai berdasarkan elemen di dalam array.

### Function
Function/fungsi merupakan sub-program yang bisa digunakan kembali baik di dalam program itu sendiri, maupun di program yang lain.
  - Function Expression
    Menyimpan fungsi ke suatu variabel
    example :
    ```sh
    const halo = function(){
        console.log("Hello World!");
    }
    ```
  - Default Parameter
  Membuat parameter default dalam sebuah function
     ```sh
    function perkalian(a, b) {
      b = (typeof b !== 'undefined') ?  b : 1
      return a * b
    }
    
    perkalian(5, 2)  // 10
    perkalian(5)     // 5
    ```
    
  - Arrow Function
   Dengan menggunakan panah ( => ) untuk mempersingkat membuat function
 
    ```sh
    let func = x => x * x;   
    ```

### Array
Array adalah sekumpulan variabel yang memiliki tipe data yang sama dan dinyatakan dengan nama yang sama
  - Spread Operator
    example :
    ```sh
    let array1 = ["a","b","c"]; 
    let array2 = ["d","e"]; 
      
    arr = [...array1,...array2]; 
    console.log(arr);
        }
    ```
- Spread Operator in Parameter
    example :
    ```sh
    const total = (...arr) => {
    console.log(arr.reduce((x,y) => x * y))
    }
    total(2,4,6,8,10,12) //Output:46080
    ```
- Array.sort() digunakan untuk mengurutkan elemen dari array or u can use this :D
 example =
    ```sh
    function compareNumbers(a, b) {
      return a - b;
    }
    ```
- Method push() akan menambahkan elemen array pada akhir dari array, sedangkan method pop()  akan menghapus elemen terakhir dari array
- Method Array.unshift() dan Array.shift() hampir sama dengan Array.push() dan Array.pop() perbedaannya, method unshift() dan shift() akan menambahkan atau menghapus elemen array di awal array.
- Method splice() adalah method ’serba-bisa’ yang bisa digunakan untuk memotong array, menambahkan elemen array, bahkan melakukan keduanya sekaligus.

[Array](https://developer.mozilla.org/id/docs/Web/JavaScript/Reference/Global_Objects/Array) - Link penjelasan lebih detai mengenai Array

### Objek
Objek adalah entitas yang mandiri dengan properti dan tipe
- object.assign() digunakan untuk menyalin object
- object.keys() dan object.values() akan mengembalikan nilai array key / value dari sebuah object
- object.freeze digunakan untuk membekukan nilai yang ada di object agar tidak dapat diubah

[Object](https://developer.mozilla.org/id/docs/Web/JavaScript/Reference/Global_Objects/Object) - Link penjelasan lebih detai mengenai object

### Ecmascript 6 / ES6
Ecmascript 6 merupakan pembaharuan dari ES5 untuk mengerjakan file .js menjadi lebih mudah dan lebih baik
- Variable, constant pada javascript bisa dipakai sejak ES6 dengan menggunakan 'const' dan untuk mutable variable bisa menggunakan 'let'
- Arrow function, melakukan penyederhanaan penulisan sebuah function pada javascript dengan menggunakan panah '=>'
- Spread operator, yang sudah dijelaskan di array. Kalau sebelumnya menggunakan concat dengan spread operator kita dapat menambahkan array di tengah
 example:
    ```sh
    let arr = [1,2,3]; 
    let arr2 = [5,6]; 
      
    arr = [...arr,4,...arr2]; 
    console.log(arr);
    ```
[ES6](http://es6-features.org/#Constants) - Link penjelasan lebih detai mengenai ES6

### Asynchronous
 kalau biasanya program dieksekusi secara synchronous(berurutan) maka ini dengan ini proses eksekusi kode pada program yang berjalan tidak berurutan tanpa harus menunggu perintah kode sebelumnya selesai.
 
  - Callback
 Callback sebenarnya adalah function bedanya dengan function pada umumnya adalah di cara eksekusinya. Jika function pada umumnya di eksekusi berurutan dari atas ke bawah maka callback di eksekusi pada point tertentu, itu sebabnya di sebut callback.
- Promise
Promise menerima satu argumen yang berupa fungsi yang menerima dua argumen yang biasa disebut resolve dan reject. Sebuah object Promise memiliki metode/ fungsi then dan catch yang masing-masing memiliki fungsi untuk mengolah hasil sukses dan gagal.
- Async - Await
Async function merupakan function yang mengandung ekspresi 'await' untuk menunggu hasil dari sebuah promise diselesaikan terlebih dahulu (synchronous).


 
