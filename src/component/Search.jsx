import { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
	const [searchCountrie, setSearchCountrie] = useState("");
	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();
		navigate("/countrie/" + searchCountrie);
	};

	const [addrtype, setAddrtype] = useState([
		"Filter by Region",
		"Africa",
		"America",
		"Asia",
		"Europe",
		"Oceania",
	]);
	const Add = addrtype.map((Add) => Add);

	const handleAddrTypeChange = (e) => {
		e.preventDefault();
		let regionName = addrtype[e.target.value];
		navigate("/region/" + regionName);
	};

	return (
		<Form onSubmit={submitHandler}>
			<Conteiner>
				<StyledInput>
					<FaSearch />
					<input
						type="text"
						placeholder="Search by a countrie"
						value={searchCountrie}
						onChange={(e) => setSearchCountrie(e.target.value)}
					/>
				</StyledInput>
				<StyledSelect>
					<select
						onChange={(e) => handleAddrTypeChange(e)}
						defaultValue="Filter by Region"
					>
						{/* <option value="default" disabled hidden>
							Filter by Region
						</option> */}
						{Add.map((address, key) => (
							<option value={key}>{address}</option>
						))}
					</select>
				</StyledSelect>
			</Conteiner>
		</Form>
	);
}

const Form = styled.form`
	width: 100%;
`;

const Conteiner = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 2.5rem 3rem 0;
	padding: 0 2rem;
`;

const StyledInput = styled.div`
	position: relative;
	width: 50%;
	input {
		display: flex;
		color: hsl(0, 0%, 100%);
		background-color: hsl(209, 23%, 22%);
		box-shadow: -1px 4px 34px -7px #0000003b;
		font-size: 0.8rem;
		padding: 1rem 3.5rem;
		border-radius: 5px;
		border: none;
		outline: none;
		width: 70%;
	}
	svg {
		position: absolute;
		left: 0;
		top: 50%;
		transform: translate(150%, -50%);
		color: hsl(0, 0%, 100%);
	}
`;

const StyledSelect = styled.div`
	width: 50%;
	display: flex;
	justify-content: end;
	select {
		color: hsl(0, 0%, 100%);
		background-color: hsl(209, 23%, 22%);
		box-shadow: -1px 4px 34px -7px #0000003b;
		padding: 1rem 3rem;
		border-radius: 5px;
		text-align: center;
		border: none;
		outline: none;
		appearance: none;
	}
`;

export default Search;
