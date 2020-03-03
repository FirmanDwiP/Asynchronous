// const fs = require('fs') //Nodejs, terdapat modul file system (fs) yang memungkinkan kita untuk mengakses file system.

const readDir = new Promise((dipenuhi,ditolak)=>{ // promise baru ditampung ke dalam variabel readdir. didalam promis terdapat 2  parameter yaitu dipenuhi (resolve) & ditolakr(eject )
    fs.readdir('/', (mslh,tdkmslh)=>{  
        mslh? ditolak(mslh) : dipenuhi(tdkmslh) // kodisi if
    })
})

readDir.then(tdkmslh => console.log(tdkmslh)).catch(mslh=> console.log('ada masalah'+mslh)) // method then digunakan untuk menangkap jika promise dipenuhi
//sedangkan pada catch untuk menangkap promise yang tidak dipenuhi

