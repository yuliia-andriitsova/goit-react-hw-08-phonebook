import { useDispatch, useSelector } from 'react-redux';
import { changeFilterAction } from 'redux/phonebook/filterSlice';
import { getFilter } from 'redux/phonebook/selectors';

export function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onFilterName = event => {
    dispatch(changeFilterAction(event.target.value));
  };
  return (
    <>
      <h2 className="contactsTitle">Find contacts by name</h2>
      <div className="findContact">
        <>
          <input
            className="inputContact"
            type="text"
            name="filter"
            onChange={onFilterName}
            value={filter}
          />
        </>
      </div>
    </>
  );
}
