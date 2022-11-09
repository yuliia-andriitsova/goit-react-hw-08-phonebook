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
      <p>Find contacts by name</p>

      <input type="text" name="filter" onChange={onFilterName} value={filter} />
    </>
  );
}
