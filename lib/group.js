const fs = require('fs')

exports.groupResponse_Remove = async (lexxy, update) => {
try {
ppuser = await lexxy.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
}
const metadata = await lexxy.groupMetadata(update.id)
for (let participant of update.participants) {
try{
let metadata = await lexxy.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'remove'){
await lexxy.sendMessage(update.id, {text: `*Sayonara @${num.split("@")[0]}*\n*kalo mau balik lagi ke group ini, wajib bawa gorengan 1 truk😊*`, mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}
  
exports.groupResponse_Welcome = async (lexxy, update) => {
try {
ppuser = await lexxy.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
}
const metadata = await lexxy.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let metadata = await lexxy.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'add') {
await lexxy.sendMessage(update.id, { text: `*Hello @${num.split("@")[0]}*\n*Welcome to ${metadata.subject}* \n\n*Jangan Lupa Intro*\n*Nama:*\n*Umur:*\n*Hobi:*\n*Askot:*\n\n*Sering² Baca Deskripsi Ya Kak🙏*`, mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}
  
exports.groupResponse_Promote = async (lexxy, update) => {  
const metadata = await lexxy.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let metadata = await lexxy.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'promote') {
await lexxy.sendMessage(update.id, { text: `*@${num.split("@")[0]} Naik jabatan jadi admin grup*`, mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}
  
exports.groupResponse_Demote = async (lexxy, update) => {  
const metadata = await lexxy.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let metadata = await lexxy.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'demote') {
await lexxy.sendMessage(update.id, { text: `*@${num.split("@")[0]} Turun jabatan jadi admin grup*`, mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}