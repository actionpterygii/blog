const initialState = {blogInfo: [], blogPost: []};

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
        blogPost: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
