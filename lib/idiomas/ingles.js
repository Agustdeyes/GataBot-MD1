const lenguaje = () => {
return 'en' } //ENGLISH

//MESSAGE NOTICES
const smsAviso1 = () => {
return `╰⊱✅⊱ *RESULT* ⊱✅⊱╮\n\n` }
global.rg = lenguajeGB['smsAviso1']()

const smsAviso2 = () => {
return `╰⊱⚠️⊱ *WARNING* ⊱⚠️⊱╮\n\n` }
global.ag = lenguajeGB['smsAviso2']()

const smsAviso3 = () => {
return `╰⊱❕⊱ *INFORMATION* ⊱⊱╮\n\n` }
global.iig = lenguajeGB['smsAviso3']()

const smsAviso4 = () => {
return `╰⊱❌⊱ *ERROR* ⊱❌⊱╮\n\n` }
global.fg = lenguajeGB['smsAviso4']()

const smsAviso5 = () => {
return `╰⊱❗️⊱ *MISUSED ACTION* ⊱❗️⊱╮\n\n` }
global.mg = lenguajeGB['smsAviso5']()

const smsAviso6 = () => {
return `╰⊱📩⊱ *REPORT* ⊱📩⊱╮\n\n` }
global.eeg = lenguajeGB['smsAviso6']()

const smsAviso7 = () => {
return `╰⊱💚⊱ *SUCCESS* ⊱💚⊱╮\n\n` }
global.eg = lenguajeGB['smsAviso7']()


const smsAdmin = (usedPrefix) => {
return `'╰⊱⚠️⊱ *𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼 | 𝙒𝘼𝙍𝙉𝙄𝙉𝙂* ⊱⚠️⊱╮\n\n\`\`\`¡¡This command is for Administrators only!!\`\`\`\``}

const smsGrupo = (plugin, _user) => {
return `'╰⊱⚠️⊱ *𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼 | 𝙒𝘼𝙍𝙉𝙄𝙉𝙂* ⊱⚠️⊱╮\n\n\`\`\`¡¡This command can only be used in groups!!\`\`\``}


export default { lenguaje, smsAviso1, smsAviso2, smsAviso3, smsAviso4, smsAviso5, smsAviso6, smsAviso7, smsAdmin, smsGrupo };
