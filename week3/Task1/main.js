async function getData() {
    try {
        // fetch json file
        let data = await fetch('data.json')
        let finalData = await data.json()

        // print products names
        for (let i = 0; i < finalData.products.length; i++) {
            console.log(`product : ${i + 1} is ${finalData.products[i].name}`)
        }

        // filter products
        let filteredProducts = finalData.products.filter((product) => product.inStock)

        // Total price
        let totalPrices = finalData.products.reduce((total, product) => total + product.price, 0)
        console.log(`Total price is : ${totalPrices}`)

        // Most Expensive Product
        let expensive = finalData.products.reduce((max, product) =>
            product.price > max.price ? product : max, finalData.products[0]
        );

        console.log(`Expensive product has price : ${expensive.price}`)
    }
    catch (error) {
        console.log(error);
    }
}

getData()