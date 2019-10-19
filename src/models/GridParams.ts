export interface GridParams {
    PageNum: number;
    PageSize: number;
    Status?: number;
}

export interface ArticleInfo {
    Id: string;
    Title: string;
    Abstract: string;
    ImageUrl: string;
    Views: number;
    Comments: number;
    Likes: number;
    CreateTime: string;
}

export interface JsonResultModel<T> {
    Rows: T[];
    TotalRows: number;
}