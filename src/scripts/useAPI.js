import {useSelector, useDispatch} from "react-redux";
import axios from "axios";

import {PATH, KEY} from "../config";
import {
  fetchBlogInfoAction,
  fetchBlogPostAction,
  successFetchBlogPostAction,
  failedFetchBlogPostAction
} from "./actions";

export default function useAPI() {
  const dispatch = useDispatch();

  const blogInfo = useSelector((state) => state.blogInfo);
  const blogPost = useSelector((state) => state.blogPost);

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

  return {
    blogInfo,
    fetchBlogInfo,
    blogPost,
    fetchBlogPost
  };
}
