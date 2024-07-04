
export const productList =[
    {
        id: 1,
        category: "Figuras",
        description: "Personaliza tu figura 3D a tu gusto y medida, elige cada detalle de lo que deseas obtener",
        img: "/figure1.png",
        name: "Basadas en ilustraciones",
        price: "40 USD",
    },
    {
        id: 2,
        category: "Figuras",
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

// Función para obtener todos los productos o filtrarlos por categoría
export const getProducts = (idCategory) => {
    const list = idCategory ? productList.filter(product => product.category === idCategory) : productList;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            list.length > 0 ? resolve(list) : reject("No hay datos");
        }, 500);
    });
};

// Función para obtener un producto por su ID
export const getProductById = (id) => {
    const product = productList.find(p => p.id === parseInt(id));
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product ? resolve(product) : reject("Producto no encontrado");
        }, 500);
    });
};