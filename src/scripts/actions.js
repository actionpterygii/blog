export const fetchBlogInfoAction = () => ({
  type: "FETCH_BLOG_INFO"
});
export const successFetchBlogInfoAction = (blogInfo) => ({
  type: "SUCCESS_FETCH_BLOG_INFO",
  blogInfo
});
export const failedFetchBlogInfoAction = () => ({
  type: "FAILED_FETCH_BLOG_INFO"
});

export const fetchBlogPostListAction = (status) => ({
  type: "FETCH_BLOG_POST_LIST",
  status
});
export const successFetchBlogPostListAction = (blogPostList, status) => ({
  type: "SUCCESS_FETCH_BLOG_POST_LIST",
  blogPostList,
  status
});
export const failedFetchBlogPostListAction = () => ({
  type: "FAILED_FETCH_BLOG_POST_LIST"
});

export const fetchBlogPostAction = () => ({
  type: "FETCH_BLOG_POST"
});
export const successFetchBlogPostAction = (blogPost) => ({
  type: "SUCCESS_FETCH_BLOG_POST",
  blogPost
});
export const failedFetchBlogPostAction = () => ({
  type: "FAILED_FETCH_BLOG_POST"
});

export const fetchBlogCategoryListAction = () => ({
  type: "FETCH_BLOG_CATEGORY_LIST"
});
export const successFetchBlogCategoryListAction = (blogCategoryList) => ({
  type: "SUCCESS_FETCH_BLOG_CATEGORY_LIST",
  blogCategoryList
});
export const failedFetchBlogCategoryListAction = () => ({
  type: "FAILED_FETCH_BLOG_CATEGORY_LIST"
});
export const fetchBlogCategoryAction = () => ({
  type: "FETCH_BLOG_CATEGORY"
});
export const successFetchBlogCategoryAction = (blogCategory) => ({
  type: "SUCCESS_FETCH_BLOG_CATEGORY",
  blogCategory
});
export const failedFetchBlogCategoryAction = () => ({
  type: "FAILED_FETCH_BLOG_CATEGORY"
});

export const fetchBlogTagListAction = () => ({
  type: "FETCH_BLOG_TAG_LIST"
});
export const successFetchBlogTagListAction = (blogTagList) => ({
  type: "SUCCESS_FETCH_BLOG_TAG_LIST",
  blogTagList
});
export const failedFetchBlogTagListAction = () => ({
  type: "FAILED_FETCH_BLOG_TAG_LIST"
});
export const fetchBlogTagAction = () => ({
  type: "FETCH_BLOG_TAG"
});
export const successFetchBlogTagAction = (blogTag) => ({
  type: "SUCCESS_FETCH_BLOG_TAG",
  blogTag
});
export const failedFetchBlogTagAction = () => ({
  type: "FAILED_FETCH_BLOG_TAG"
});

export const changeSearchTextAction = (text) => ({
  type: "CHANGE_SEARCH_TEXT",
  text
});
