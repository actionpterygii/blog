import {useSelector, useDispatch} from "react-redux";
import axios from "axios";

import {PATH, KEY} from "../config";
import {
  fetchBlogInfoAction,
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

  return {
    blogInfo,
    fetchBlogInfo,
    blogPost,
    fetchBlogPost,
    blogCategory,
    fetchBlogCategory
  };
}
