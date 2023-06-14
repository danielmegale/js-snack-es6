const bicycle=[
    {
        name: 'Bici da città',
        weight:200,
    },
    {
        name: 'Mountain bike',
        weight:230,
    },
    {
        name: 'Bici da corsa',
        weight: 160,
    },
    {
        name:'Bici a scatto fisso',
        weight: 245,
    },
    {
        name:'Downhill',
        weight:300
    },
];

let minWeight=999;
for(let i=0;i<bicycle.length;i++){
const weight=bicycle[i].weight
    if(minWeight>weight){
        minWeight=weight
    }
    if(bicycle[i].weight===weight)
    console.log(bicycle[i])
};
console.log(minWeight)