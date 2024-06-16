
export const productList =[
    {
        id: 1,
        category: "Figuras personalizadas",
        description: "Personaliza tu figura 3D a tu gusto y medida, elige cada detalle de lo que deseas obtener",
        img: "/figure1.png",
        name: "Basadas en ilustraciones",
        price: "40 USD",
    },
    {
        id: 2,
        category: "Figuras personalizadas",
        description: "Figuras de superhéroes impresas en 3D: captura el poder y la esencia de tus héroes favoritos con detalle y calidad excepcionales.",
        img: "/figure2.png",
        name: "Superhéroes",
        price: "40 USD",
    },
    {
        id: 3,
        category: "Regalos",
        description: "Sorprende con regalos únicos en 3D: figuras personalizadas y diseños innovadores para cualquier ocasión.",
        img: "/accessories1.png",
        name: "Maceteros",
        price: "50 USD",
    },
    {
        id: 4,
        category: "Regalos",
        description: "Accesorios impresos en 3D: personaliza tu estilo con innovación y precisión, desde detalles únicos hasta funcionalidad moderna.",
        img: "/accessories2.png",
        name: "accesorios",
        price: "30 USD",
    },
    {
        id: 5,
        category: "Empresas",
        description: "Galardones impresos en 3D: fusionando elegancia y tecnología para reconocimientos empresariales memorables y distintivos.",
        img: "/award1.png",
        name: "Galardones",
        price: "40 USD",
    },
    {
        id: 6,
        category: "Empresas",
        description: "Descubre nuestros galardones impresos en 3D, diseñados para reflejar el prestigio y la excelencia de tu empresa con un toque moderno y personalizado.",
        img: "/award2.png",
        name: "Galardones personalizados",
        price: "40 USD",
    },
]

 export const getProducts = () => {
    return new Promise((resolve, reject)  => {
        setTimeout(() => {
            productList.length > 0 ?
                resolve(productList)
                :
                reject("No hay datos")
        }, 500
        )
    })
}