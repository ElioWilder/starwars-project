import  React  from "react";


const Search = ({value, setValue}) => {
  
  const onChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  }
    return <div className="search-bar">
              <input type="text" className="search-input" placeholder="Trouver un personnage" value={value} onChange={onChange}></input>
            </div>
  };

export default Search;