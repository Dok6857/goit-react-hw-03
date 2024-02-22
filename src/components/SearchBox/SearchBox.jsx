// import css from './SearchBox.module.css'

export const SearchBox = ({ value, onChange }) => {
  const handleChange = evt => {
    onChange(evt.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};
