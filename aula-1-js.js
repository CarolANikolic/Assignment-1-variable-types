const animal = "cachorro";
const numeroFloat = 0.789;
const numeroInt = 3
const numeroDouble = 1.89754638923451763098
const fraseCriada = `Meu ${animal} comeu ${numeroFloat} a casa do buraco negro por ${numeroInt}  e o computador ${numeroDouble} sacudiu.`
const fraseFazSentido = "Meu cachorro e o planeta Terra estão localizados a 1000 anos-luz do mais próximo buraco negro."

if (fraseCriada !== fraseFazSentido) {
    console.log(fraseCriada);  
} else {
    console.log(fraseFazSentido);
}