const teams=[
    {
        nome:'Juventus',
        puntiFatti:655,
        falliSubiti:0,     
    },
    {
        nome:'Inter',
        puntiFatti:0,
        falliSubiti:0,
    },
    {
        nome:'Milan',
        puntiFatti:0,
        falliSubiti:0,
    },
    {
        nome:'Roma',
        puntiFatti:0,
        falliSubiti:0,
    },
]
const points=[]
function random(puntiFatti,falliSubiti) {
    const random=Math.floor(Math.random()*100)+1
    return random
}
for(let i=0;i<teams.length;i++){
    teams[i].puntiFatti=random();
    teams[i].falliSubiti=random();
    const {nome,falliSubiti}=teams[i];
    points.push(
        {
            nome:nome,
            falliSubiti:falliSubiti   
        },
    )
};

console.log(teams);
console.log(points);
