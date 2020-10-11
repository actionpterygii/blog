import {useSelector, useDispatch} from "react-redux";

import {changeSearchTextAction} from "./actions";

export default function useCommonState() {
  const dispatch = useDispatch();

  const searchText = useSelector((state) => state.searchText);

  const changeSearchText = (text) => {
    return dispatch(changeSearchTextAction(text));
  };

  return {
    searchText,
    changeSearchText
  };
}
