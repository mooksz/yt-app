import React, { useState } from "react";

const SearchBar = props => {
	const { onSearchBarSubmit } = props;
	const [term, setTerm] = useState("");

	const onFormSubmit = e => {
		e.preventDefault();
		onSearchBarSubmit(term);
	};

	const onInputChange = e => {
		setTerm(e.target.value);
	};

	return (
		<div className="ui segment searchbar">
			<form onSubmit={onFormSubmit} className="ui form">
				<div className="field">
					<label htmlFor="">Video Search</label>
					<input onChange={onInputChange} type="text" value={term} />
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
