import prismadb from "@/lib/prismadb";


export const getTotalRevenue = async(storeId: string) => {
    const paidOrders = await prismadb.order.findMany({
        where: {
            storeId,
            isPaid: true,
        },
        include: {
            orderItems: {
                include: {
                    product: true
                }
            }
        }
    });

    // extract total of each order then combine for grand total ( total revenue )
    const totalRevenue = paidOrders.reduce((total, order) => {
        const orderTotal = order.orderItems.reduce((orderSum, item) => {
            return orderSum + item.product.price.toNumber();
        }, 0)

        return total + orderTotal;
    }, 0);

    return totalRevenue;
}

// create queries for count of specific product, categories, colors, sizes, by user?