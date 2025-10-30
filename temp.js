const items = [
  { category: "Clothing" },
  { category: "Electronics" },
  { category: "Clothing" },
  { category: "Shoes" },
  { category: "Electronics" }
];



const obj=items.reduce((acc,obj)=>{
    
    if(acc[obj.category])
    {
        
        acc[obj.category]=acc[obj.category]+1;
        
    }
    else{
        acc[obj.category]=1;
    }
    return acc;
},{})

console.log(obj)