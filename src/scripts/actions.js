export const fetchBlogInfoAction = (payload) => ({
  type: "FETCH_BLOG_INFO",
  payload
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
