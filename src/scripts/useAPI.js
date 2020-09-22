import {useSelector, useDispatch} from "react-redux";
import axios from "axios";

import {PATH, KEY} from "../config";
import {fetchBlogInfoAction, fetchBlogPostAction} from "./actions";

export default function useAPI() {
  const dispatch = useDispatch();

  const blogInfo = useSelector(state => state.blogInfo);
  const blogPost = useSelector(state => state.blogPost);

  const fetchBlogInfo = () => {
    axios
      .get(PATH + "information", {
        headers: {"X-API-KEY": KEY}
      })
      .then(res => {
        dispatch(fetchBlogInfoAction(res.data));
      });
  };

  const fetchBlogPost = id => {
    axios
      .get(PATH + "post/post" + id, {
        headers: {"X-API-KEY": KEY}
      })
      .then(res => {
        dispatch(fetchBlogPostAction(res.data));
      })
      .catch();
  };

  return {
    blogInfo,
    fetchBlogInfo,
    blogPost,
    fetchBlogPost
  };
}
