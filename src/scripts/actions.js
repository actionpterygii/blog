export const fetchBlogInfoAction = (payload) => ({
  type: "FETCH_BLOG_INFO",
  payload
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
