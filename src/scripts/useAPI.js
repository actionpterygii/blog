import {useSelector, useDispatch} from "react-redux";
import axios from "axios";

import {API_PATH, API_KEY} from "../config";
import {
  fetchBlogInfoAction,
  fetchBlogPostListAction,
  successFetchBlogPostListAction,
  failedFetchBlogPostListAction,
  fetchBlogPostAction,
  successFetchBlogPostAction,
  failedFetchBlogPostAction,
  fetchBlogCategoryListAction,
  successFetchBlogCategoryListAction,
  failedFetchBlogCategoryListAction,
  fetchBlogCategoryAction,
  successFetchBlogCategoryAction,
  failedFetchBlogCategoryAction
} from "./actions";

export default function useAPI() {
  const dispatch = useDispatch();

  const blogInfo = useSelector((state) => state.blogInfo);
  const blogPostList = useSelector((state) => state.blogPostList);
  const blogPost = useSelector((state) => state.blogPost);
  const blogCategoryList = useSelector((state) => state.blogCategoryList);
  const blogCategory = useSelector((state) => state.blogCategory);

  const fetchBlogInfo = () => {
    axios
      .get(API_PATH + "information", {
        headers: {"X-API-KEY": API_KEY}
      })
      .then((res) => {
        dispatch(fetchBlogInfoAction(res.data));
      });
  };

  const fetchBlogPostList = async (
    status = "new",
    target = null,
    value = null,
    limit = "10"
  ) => {
    dispatch(fetchBlogPostListAction(status));
    const offsetQuery = (() => {
      if (status === "continue") {
        return `&offset=${blogPostList.contents.length}`;
      } else {
        return "";
      }
    })();
    const searchQuery = (() => {
      if (target === "all") {
        return `&q=${value}`;
      } else if (target === "category") {
        return `&filters=${target}[equals]${value}`;
      } else if (target === "tags") {
        return `&filters=${target}[contains]${value}`;
      } else {
        return "";
      }
    })();
    await axios
      .get(`${API_PATH}post?limit=${limit}${offsetQuery}${searchQuery}`, {
        headers: {"X-API-KEY": API_KEY}
      })
      .then((res) => {
        dispatch(successFetchBlogPostListAction(res.data, status));
      })
      .catch(() => {
        dispatch(failedFetchBlogPostListAction());
      });
  };

  const fetchBlogPost = async (id) => {
    dispatch(fetchBlogPostAction());
    await axios
      .get(`${API_PATH}post/post${id}`, {
        headers: {"X-API-KEY": API_KEY}
      })
      .then((res) => {
        dispatch(successFetchBlogPostAction(res.data));
      })
      .catch(() => {
        dispatch(failedFetchBlogPostAction());
      });
  };

  const fetchBlogCategoryList = async () => {
    dispatch(fetchBlogCategoryListAction());
    await axios
      .get(`${API_PATH}category?limit=99`, {
        headers: {"X-API-KEY": API_KEY}
      })
      .then((res) => {
        dispatch(successFetchBlogCategoryListAction(res.data));
      })
      .catch(() => {
        dispatch(failedFetchBlogCategoryListAction());
      });
  };

  const fetchBlogCategory = async (id) => {
    dispatch(fetchBlogCategoryAction());
    await axios
      .get(`${API_PATH}category/${id}`, {
        headers: {"X-API-KEY": API_KEY}
      })
      .then((res) => {
        dispatch(successFetchBlogCategoryAction(res.data));
      })
      .catch(() => {
        dispatch(failedFetchBlogCategoryAction());
      });
  };

  const postIdToPath = (id) => {
    return id.replace(/post/g, "");
  };

  return {
    blogInfo,
    fetchBlogInfo,
    blogPostList,
    fetchBlogPostList,
    blogPost,
    fetchBlogPost,
    blogCategoryList,
    fetchBlogCategoryList,
    blogCategory,
    fetchBlogCategory,
    postIdToPath
  };
}
