import { observable, action } from "mobx";
import { getAllTags, queryArticlesByPage, queryArticleDetail } from "../services/article.service";
import { injectable } from "inversify";
import "reflect-metadata";
import { GridParams, ArticleInfo, JsonResultModel } from "../models/GridParams";

@injectable()
export default class ArticleState {

    @observable tags: Array<any> = [];
    @observable articleList: JsonResultModel<ArticleInfo> = { Rows: [], TotalRows: 0 };

    @action.bound
    async queryAllTags() {
        const response = await getAllTags();
        this.tags = response && response.data && response.data.map(x => {
            return {
                Id: x.Id,
                TagName: x.TagName
            }
        });
    }

    @action.bound
    async queryArticlesByPage(params: GridParams) {
        const response = await queryArticlesByPage(params);
        if (response && response.data) {
            this.articleList = response.data;
        }
    }

    @action.bound
    async queryArticleDetail(id: number) {
        const { data } = await queryArticleDetail(id);
        if(data){
            console.log(data);
        }
    }

}