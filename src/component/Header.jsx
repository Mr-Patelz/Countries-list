import React from "react";
import styled from "styled-components";
import { BsFillMoonFill } from "react-icons/bs";

function Header() {
	return (
		<HeaderDiv>
			<h3>Where in the world?</h3>
			<div>
				<button>
					<BsFillMoonFill />
					<span>Dark Mode</span>
				</button>
			</div>
		</HeaderDiv>
	);
}

const HeaderDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: hsl(209, 23%, 22%);
	height: 10vh;
	width: 100%;
	padding: 0 5rem;
	color: hsl(0, 0%, 100%);
	box-shadow: -1px 4px 34px -7px #0000003b;
	h2 {
		font-weight: 600;
	}
	div {
		display: flex;
		flex-direction: row;
		align-items: center;
		button {
			outline: none;
			border: none;
			background-color: inherit;
			font-size: 1rem;
			color: white;
			span {
				margin: 0 1rem;
			}
		}
	}
`;

export default Header;
