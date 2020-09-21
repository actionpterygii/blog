import {useSelector, useDispatch} from "react-redux";
import axios from "axios";

import {PATH, KEY} from "../config";
import {fetchBlogInfoAction} from "./actions";

export default function useAPI() {
  const dispatch = useDispatch();

  const blogInfo = useSelector(state => state.blogInfo);

  const fetchBlogInfo = () => {
    axios
      .get(PATH + "information", {
        headers: {"X-API-KEY": KEY}
      })
      .then(res => {
        dispatch(fetchBlogInfoAction(res.data));
      });
  };

  return {blogInfo, fetchBlogInfo};
}
