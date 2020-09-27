const initialState = {blogInfo: {}, blogPost: {}, blogCategory: {}};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_BLOG_INFO": {
      return {
        ...state,
        blogInfo: action.payload
      };
    }

    case "FETCH_BLOG_POST": {
      return {
        ...state,
        blogPost: {fetching: true}
      };
    }
    case "SUCCESS_FETCH_BLOG_POST": {
      return {
        ...state,
        blogPost: {
          ...action.blogPost,
          success: true
        }
      };
    }
    case "FAILED_FETCH_BLOG_POST": {
      return {
        ...state,
        blogPost: {failed: true}
      };
    }

    case "FETCH_BLOG_CATEGORY": {
      return {
        ...state,
        blogCategory: {fetching: true}
      };
    }
    case "SUCCESS_FETCH_BLOG_CATEGORY": {
      return {
        ...state,
        blogCategory: {
          ...action.blogCategory,
          success: true
        }
      };
    }
    case "FAILED_FETCH_BLOG_CATEGORY": {
      return {
        ...state,
        blogCategory: {failed: true}
      };
    }

    default: {
      return state;
    }
  }
}
