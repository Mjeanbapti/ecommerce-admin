import prismadb from "@/lib/prismadb";


export const getStockCount = async(storeId: string) => {

    const stockCount = await prismadb.product.count({
        where: {
            storeId,
            isArchived: false
        },
    });

    return stockCount;
}


// create queries for count of specific product, categories, colors, sizes, by user?