import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css"

const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    return (
        <div className={styles.searchBox}>
            <p>Find contacts by name</p>
            <input
                type="text"
                value={filter}
                onChange={(e) => dispatch(changeFilter(e.target.value))}
                className={styles.input}
            />
        </div>
    );
};

export default SearchBox;