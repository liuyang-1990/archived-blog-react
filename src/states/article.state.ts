import { observable, action } from "mobx";
import { getAllTags } from "../services/article.service";

export default class ArticleState {
    @observable tags: Array<any> = [];

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


}