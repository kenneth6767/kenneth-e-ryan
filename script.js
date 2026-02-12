function calcular(){

    alert("clicou"); // teste pra ver se botão funciona

    let audio = document.getElementById("audioBeta");

    if(audio){
        audio.currentTime = 0;
        audio.play().catch(e => console.log("erro audio:", e));
    }else{
        alert("audio nao encontrado");
    }

    document.getElementById("resultado").innerText =
    "⚠️ beta detectado\n💀 =0000,0000 — ele percebeu que o universo nao se importa com ele";

}


