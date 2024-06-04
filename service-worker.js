const btn = document.querySelector("#btn")
const results=document.querySelector("#result")

btn.addEventListener("click",()=>{
const eyeDropper = new EyeDropper();
eyeDropper.open()
.then((result)=>{
results.innerHTML=result.sRGBHex
results.style.backgroundColor = result.sRGBHex;
const text=result.sRGBHex
copyContent(text)
})
})


const copyContent = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }