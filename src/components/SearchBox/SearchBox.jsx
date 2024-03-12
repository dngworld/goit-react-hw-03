import { useId } from 'react';
const SearchBox = ({ value, onChange }) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>Find contact by name</label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={evt => onChange(evt.target.value)}
      />
    </div>
  );
};
export default SearchBox;
