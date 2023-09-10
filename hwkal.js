// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab

// Base Haikal Hw Mods : Copyan Dari Base Dika


const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://chat.whatsapp.com/CdG6vpiRlxC2QhRsv6zT1u'
global.ig = '@denzcuyz_' // ubah aja
global.email = 'denzcuyz8746@gmail.com' //serah
global.region = 'indonesia' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Denzcuyz Botz' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['6289654690926'] // ubah aja pake nomor lu
//==========================BY Hw Mods=======================//
global.keyopenai = `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`
//====================BY Hw Mods=============================//
global.botname = 'Denzcuyz Botz' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'Denzcuyzxx' // ubah aja ini nama sticker
global.author = 'Denzcuyzxx' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'haikal' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = true
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})