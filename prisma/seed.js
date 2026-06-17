const { PrismaClient } =require= ("@prisma/client/extension")
const prisma=new PrismaClient()
async function main(){
    await prisma.car.createMany({
        data:[
            {name:"Toyota Landcruiser", price:8500000,year:2022,mileage:"12,000km",transmition:"automatic",image:"https://images.unsplash.com/photo-1613859492095-85d9944f09f6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
            {name:"mercedence Benz", price:9500000,year:2021,mileage:"12,000km",transmition:"automatic",image:"https://images.unsplash.com/photo-1610099610040-ab19f3a5ec35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVyY2VkZXMlMjBiZW56fGVufDB8fDB8fHww"},
            {name:"Toyota fielder", price:5000000,year:2021,mileage:"10,000km",transmition:"automatic",image:"https://images.unsplash.com/photo-1780332524552-9119274359a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG95b3RhJTIwZmllbGRlcnxlbnwwfHwwfHx8MA%3D%3D"},

        ]
    })
    console.log("cars seeded successfuly" )
}

main()
.catch (console.error)
.finally(()=>prisma.$disconnect)//always disconnect from db when done