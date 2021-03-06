const initialState = {
  searchText: "",
  blogInfo: {},
  blogPostList: {},
  blogPost: {},
  blogCategoryList: {},
  blogCategory: {},
  blogTagList: {},
  blogTag: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_SEARCH_TEXT": {
      return {
        ...state,
        searchText: action.text
      };
    }

    case "FETCH_BLOG_INFO": {
      return {
        ...state,
        blogInfo: {fetching: true}
      };
    }
    case "SUCCESS_FETCH_BLOG_INFO": {
      return {
        ...state,
        blogInfo: {
          ...action.blogInfo,
          success: true
        }
      };
    }
    case "FAILED_FETCH_BLOG_INFO": {
      return {
        ...state,
        blogInfo: {failed: true}
      };
    }

    case "FETCH_BLOG_POST_LIST": {
      if (action.status === "continue") {
        return {
          ...state,
          blogPostList: {
            ...state.blogPostList,
            moreFetching: true
          }
        };
      } else {
        return {
          ...state,
          blogPostList: {fetching: true}
        };
      }
    }
    case "SUCCESS_FETCH_BLOG_POST_LIST": {
      if (action.status === "continue") {
        return {
          ...state,
          blogPostList: {
            ...action.blogPostList,
            contents: [
              ...state.blogPostList.contents,
              ...action.blogPostList.contents
            ],
            success: true
          }
        };
      } else {
        return {
          ...state,
          blogPostList: {
            ...action.blogPostList,
            success: true
          }
        };
      }
    }
    case "FAILED_FETCH_BLOG_POST_LIST": {
      return {
        ...state,
        blogPostList: {failed: true, err: action.err}
      };
    }

    case "FETCH_BLOG_POST": {
      return {
        ...state,
        blogPostList: {fetching: true}
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

    case "FETCH_BLOG_CATEGORY_LIST": {
      return {
        ...state,
        blogCategoryList: {fetching: true}
      };
    }
    case "SUCCESS_FETCH_BLOG_CATEGORY_LIST": {
      return {
        ...state,
        blogCategoryList: {
          ...action.blogCategoryList,
          success: true
        }
      };
    }
    case "FAILED_FETCH_BLOG_CATEGORY_LIST": {
      return {
        ...state,
        blogCategoryList: {failed: true}
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

    case "FETCH_BLOG_TAG_LIST": {
      return {
        ...state,
        blogTagList: {fetching: true}
      };
    }
    case "SUCCESS_FETCH_BLOG_TAG_LIST": {
      return {
        ...state,
        blogTagList: {
          ...action.blogTagList,
          success: true
        }
      };
    }
    case "FAILED_FETCH_BLOG_TAG_LIST": {
      return {
        ...state,
        blogTagList: {failed: true}
      };
    }

    case "FETCH_BLOG_TAG": {
      return {
        ...state,
        blogTag: {fetching: true}
      };
    }
    case "SUCCESS_FETCH_BLOG_TAG": {
      return {
        ...state,
        blogTag: {
          ...action.blogTag,
          success: true
        }
      };
    }
    case "FAILED_FETCH_BLOG_TAG": {
      return {
        ...state,
        blogTag: {failed: true}
      };
    }

    default: {
      return state;
    }
  }
}
