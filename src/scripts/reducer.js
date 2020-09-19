const initialState = {blogInfo: []};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_BLOG_INFO": {
      return {
        ...state,
        blogInfo: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
