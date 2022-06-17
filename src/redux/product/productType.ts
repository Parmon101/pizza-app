export type SearchProductParams = {
    search: string;
    sortBy: string;
    order: string;
    category: string;
};

export type Product = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    type: number;
    size: number;
    count: number;
    rating: number;
};

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}
