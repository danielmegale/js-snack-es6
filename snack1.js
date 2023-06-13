const Vips=['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

// const TavoloVip=[]
// for(let i=0;i<Vips.length;i++){
//     const Objects={Tavolo:'TavoloVip',Vip:Vips[i],Numero:(i+1)}
//     TavoloVip.push(Objects)
// };
const TavoloVip=Vips.map((invited,i)=>{
    return{
        Tavolo:'TavoloVip',
        Vip:invited,
        Numero:(i+1)
    }
})
console.table(TavoloVip)
console.log(TavoloVip)