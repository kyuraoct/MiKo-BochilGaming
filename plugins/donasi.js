let handler =  m => m.reply(`Mau Donasi?
All Payment di *https://saweria.co/ArdhiRahma* bayar disana aj :D
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
