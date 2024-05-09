import { useDispatch, useSelector } from "react-redux";
import { setStatusFilter, selectName } from "../../redux/filtersSlice";

import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();

  const searchValue = useSelector(selectName);

  return (
    <div className={css.inputWrapper}>
      <p>Find contact by name</p>
      <input
        className={css.field}
        type="text"
        value={searchValue}
        onChange={(e) => dispatch(setStatusFilter(e.target.value))}
      />
    </div>
  );
}
