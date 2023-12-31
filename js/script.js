const textEl = document.getElementById('xn')
const text = '那便祝你新年快乐，恭喜你与这个世界又亲近了一分，也遇到了许多美好的事物。在新的一年里，祝你更加优秀，事事顺利，遇到的坎坷都能完美渡过，不会再走回头路，困难只会是你成功的阶梯，努力了就一定会有成果，最后，事事顺心，不要悲伤，脸上永远挂满笑容。'
let idx = 1

jsq=setInterval("djstime()",400)
now=new Date()
now1=new Date("2024/1/1")	

if(now>now1){  
    writeText()
function writeText() {
    textEl.innerText = text.slice(0, idx)
    idx++
    if(idx > text.length) {
        clearTimeout(js)
    }
    js=setTimeout(writeText, 100)
}
}



