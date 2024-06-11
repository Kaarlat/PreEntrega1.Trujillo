
export const productList =[
    {
        id: 1,
        category: "Figuras personalizadas",
        description: "Personaliza tu figura 3D a tu gusto y medida, elige cada detalle de lo que deseas obtener",
        img: "/figura.jpg",
        name: "Basadas en ilustraciones",
        price: "40 USD",
    },
    {
        id: 2,
        category: "Figuras personalizadas",
        description: "Personaliza tu figura 3D a tu gusto y medida, elige cada detalle de lo que deseas obtener",
        img: "/funko.jpg",
        name: "Versión Funko",
        price: "40 USD",
    },
    {
        id: 3,
        category: "Regalos",
        description: "Sorprende con regalos únicos en 3D: figuras personalizadas y diseños innovadores para cualquier ocasión.",
        img: "/yoda.jpg",
        name: "Figuras",
        price: "50 USD",
    },
    {
        id: 4,
        category: "Regalos",
        description: "Sorprende con regalos únicos en 3D: figuras personalizadas y diseños innovadores para cualquier ocasión.",
        img: "/accesorios.jpg",
        name: "accesorios",
        price: "30 USD",
    },
    {
        id: 5,
        category: "Biodegradable",
        description: "Productos en 3D biodegradables: sostenibilidad y diseño unidos en figuras y objetos impresos con materiales ecológicos, perfectos para cuidar el planeta.",
        img: "/macetero.jpg",
        name: "Maceteras Biodegradables",
        price: "40 USD",
    },
    {
        id: 6,
        category: "Biodegradable",
        description: "Productos en 3D biodegradables: sostenibilidad y diseño unidos en figuras y objetos impresos con materiales ecológicos, perfectos para cuidar el planeta.",
        img: "/contenedor.jpg",
        name: "Envases y Contenedores",
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