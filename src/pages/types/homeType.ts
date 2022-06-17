export type HomeType = {
    state: {};
    filter: {
        categoryId: number;
        searchValue: string;
        sort: {
            sortProperty: string;
        };
    };
    product: {
        items: [{}];
        status: string;
    };
};
