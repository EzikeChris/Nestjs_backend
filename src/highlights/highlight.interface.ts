export interface IHighlight {
    id: number;
    name: string;
}

export interface IHighlightResponse {
    message: string;
    data: IHighlight | IHighlight[];
}