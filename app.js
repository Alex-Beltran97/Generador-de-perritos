const button = document.querySelector(".btn");

const API = async ()=>{
    const laAPI = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await laAPI.json();
    
    document.querySelector(".load").setAttribute("style","display: in block")
    
    setTimeout(()=>{
        document.getElementById("imagen").setAttribute("src",data.message);
        console.log(data.status);
        document.querySelector(".load").setAttribute("style","display: none")
    },1000)

}

button.addEventListener("click",API)