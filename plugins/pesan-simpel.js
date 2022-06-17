let handler =  m => m.reply(`ehhmmm..bot miko masih aktif,
jangan spam biar ganteng kyk kyura`.trim()) // Tambah sendiri kalo mau
handler.help = ['miko']
handler.tags = ['info']
handler.command = /^(p|m|miko|bot|hai)$/i

export default handler
