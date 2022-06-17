import { SortPropertyEnum } from '../../redux/filter/filterType';

export type SortList = {
    name: string;
    sortProperty: SortPropertyEnum;
};

export type FilterType = {
    filter: {
        sort: {
            name: string;
            sortProperty: string;
        };
    };
};

export type ClickType = MouseEvent & {
    path: Node[];
};
