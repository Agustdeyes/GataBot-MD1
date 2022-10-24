const lenguaje = () => {
return 'ar' } //عرب


//إشعارات الرسائل
const smsAvisoRG = () => {
return `╰⊱✅⊱ *نتيجة* ⊱✅⊱╮\n\n` }
const smsAvisoAG = () => {
return `╰⊱⚠️⊱ *تنبيه قضائي* ⊱⚠️⊱╮\n\n` }
const smsAvisoIIG = () => {
return `╰⊱❕⊱ *معلومة* ⊱❕⊱╮\n\n` }
const smsAvisoFG = () => {
return `╰⊱❌⊱ *خطأ* ⊱❌⊱╮\n\n` }
const smsAvisoMG = () => {
return `╰⊱❗️⊱ *عمل سيء* ⊱❗️⊱╮\n\n` }
const smsAvisoEEG = () => {
return `╰⊱📩⊱ *أبلغ عن* ⊱📩⊱╮\n\n` }
const smsAvisoEG = () => {
return `╰⊱💚⊱ *النجاح* ⊱💚⊱╮\n\n` }


//المعلمات في الأوامر
const smsRowner = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡هذا الأمر أنا فقط بصفتي صانع الروبوت يمكنه استخدامه!!\`\`\`\`` }
const smsOwner = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡هذا الأمر فقط منشئ المحتوى الخاص بي يمكنه استخدامه!!\`\`\`\`` }
const smsMods = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡هذا الأمر فقط للمنسقين ومنشئ المحتوى الخاص بي يمكنهم استخدامه!!\`\`\`\`` }
const smsPremium = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡يتوفر هذا الأمر فقط للمستخدمين المتميزين ومنشئ المحتوى الخاص بي!!\`\`\`\`` }
const smsGroup = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡لا يمكن استخدام هذا الأمر إلا في مجموعات!!\`\`\`\`` }
const smsPrivate = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡لا يمكن استخدام هذا الأمر إلا للخصوصية!!\`\`\`\`` }
const smsAdmin = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡هذا الأمر مخصص فقط للمشرفين!!\`\`\`\`` }
const smsBotAdmin = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡أنا بحاجة إلى أن أكون مشرفًا حتى تتمكن من استخدام هذا الأمر!!\`\`\`\`` }
const smsUnreg = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡أنت بحاجة إلى التسجيل لاستخدام هذا الأمر ، نوع #verify للتسجيل!!\`\`\`\`` }
const smsRestrict = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡هذا الأمر مقيد من قِبل خالقي!!\`\`\`\`` }


//قائمة القائمة
const smsTime = () => {
return `الوقت الحالي`}
const smsUptime = () => {
return `أثناء الجري`}
const smsVersion = () => {
return `إصدار ${global.packname}`}
const smsTotalUsers = () => {
return `إجمالي المستخدمين`}
const smsMode = () => {
return `إنه في الوضع`}
const smsModePublic = () => {
return `عام`}
const smsModePrivate = () => {
return `خاص`}
const smsBanChats = () => {
return `الدردشات المحظورة`}
const smsBanUsers = () => {
return `المستخدمون المحظورون`}
const smsPareja = () => {
return `شريك`}
const smsResultPareja = () => {
return `غير مرتبطة`}
const smsSaludo = () => {
return `👋 أهلا! أهلا بك 👋`}
const smsDia = () => {
return `🌇 صباح الخير ⛅`}
const smsTarde = () => {
return `🏙️ مساء الخير 🌤️`}
const smsTarde2 = () => {
return `🌆 مساء الخير 🌥️`}
const smsNoche = () => {
return `🌃 طاب مساؤك 💫`}


export default { lenguaje, smsAvisoRG, smsAvisoAG, smsAvisoIIG, smsAvisoFG, smsAvisoMG, smsAvisoEEG, smsAvisoEG, smsRowner, smsOwner, smsMods, smsPremium, smsGroup,
smsPrivate, smsAdmin, smsBotAdmin, smsUnreg, smsRestrict, smsTime, smsUptime, smsVersion, smsTotalUsers, smsMode, smsModePublic, smsModePrivate, smsBanChats, smsBanUsers, 
smsPareja, smsResultPareja, smsSaludo, smsDia, smsTarde, smsTarde2, smsNoche};
