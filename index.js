let chars = "0123456789qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM`~!@#$%^&*()-_+|}{[]:;.,?/"

function generatePassword(){
    pwds = []
    for (let i = 0; i < 4; i++) {
        let pwd = ""
        len = 7
        for (let i = 0; i < len; i++) {
            pwd += chars.charAt(Math.floor(Math.random() * chars.length))
            
        }
        
        pwds.push(pwd)
        
    }
    document.getElementById("gen-1").textContent = pwds[0]
    document.getElementById("gen-2").textContent = pwds[1]
    document.getElementById("gen-3").textContent = pwds[2]
    document.getElementById("gen-4").textContent = pwds[3]
    return pwds
}

function SelfCopy(copyText){
    navigator.clipboard.writeText(copyText);
    alert("You just copied this: (" + copyText + ").");
}