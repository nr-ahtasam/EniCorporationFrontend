import ArticleDetail from "../ArticleDetail";
import articles from "../articlesData";

export default function ArticleDetailPage({ params }) {
  const article = articles[parseInt(params.id, 10)];
  return <ArticleDetail article={article} />;
}
