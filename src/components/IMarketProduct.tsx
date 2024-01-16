export interface IProduct {
    productID: number;
    productName: string;
    price: number;
    quantity?: number;
}

export interface ICategory {
    categoryID: number;
    categoryName: string;
    products: IProduct[];
}

export interface IMarketData {
    categories: ICategory[];
}
