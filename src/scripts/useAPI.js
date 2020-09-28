import {useSelector, useDispatch} from "react-redux";
import axios from "axios";

import {PATH, KEY} from "../config";
import {
  fetchBlogInfoAction,
  fetchBlogPostListAction,
  successFetchBlogPostListAction,
  failedFetchBlogPostListAction,
  fetchBlogPostAction,
  successFetchBlogPostAction,
  failedFetchBlogPostAction,
  fetchBlogCategoryAction,
  successFetchBlogCategoryAction,
  failedFetchBlogCategoryAction
} from "./actions";

export default function useAPI() {
  const dispatch = useDispatch();

  const blogInfo = useSelector((state) => state.blogInfo);
  const blogPostList = useSelector((state) => state.blogPostList);
  const blogPost = useSelector((state) => state.blogPost);
  const blogCategory = useSelector((state) => state.blogCategory);

  const fetchBlogInfo = () => {
    axios
      .get(PATH + "information", {
        headers: {"X-API-KEY": KEY}
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
      .get(`${PATH}post?limit=${limit}${offsetQuery}${searchQuery}`, {
        headers: {"X-API-KEY": KEY}
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
      .get(PATH + "post/post" + id, {
        headers: {"X-API-KEY": KEY}
      })
      .then((res) => {
        dispatch(successFetchBlogPostAction(res.data));
      })
      .catch(() => {
        dispatch(failedFetchBlogPostAction());
      });
  };

  const fetchBlogCategory = async (id) => {
    dispatch(fetchBlogCategoryAction());
    await axios
      .get(PATH + "category/" + id, {
        headers: {"X-API-KEY": KEY}
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
    blogCategory,
    fetchBlogCategory,
    postIdToPath
  };
}
