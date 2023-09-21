import prismadb from "@/lib/prismadb";


export const getSalesCount = async(storeId: string) => {
    const salesCount = await prismadb.order.count({
        where: {
            storeId,
            isPaid: true,
        },
    });

    return salesCount;
}

// create queries for count of specific product, categories, colors, sizes, by user?