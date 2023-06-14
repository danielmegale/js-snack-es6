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

for(let i=0;i<bicycle.length;i++){
    const minWeight = Math.floor(Math.min (bicycle[i]));
    console.log(minWeight)
}