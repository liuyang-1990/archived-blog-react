import { Container } from "inversify";
import { TYPES } from "../utils/types";
import ArticleState from "../states/article.state";

const myContainer = new Container();
myContainer.bind<ArticleState>(TYPES.ArticleState).to(ArticleState);
export { myContainer };
