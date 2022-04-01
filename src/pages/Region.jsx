import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

function Region() {
	const [counties, setCounties] = useState([]);
	const params = useParams();

	const getCountries = async () => {
		const getData = localStorage.getItem(`${params.type}`);

		if (getData) {
			setCounties(JSON.parse(getData));
		} else {
			const response = await fetch(
				`https://restcountries.com/v3.1/region/${params.type}`
			);
			const data = await response.json();
			setCounties(data);
			localStorage.setItem(`${params.type}`, JSON.stringify(data));
		}
	};

	useEffect(() => {
		getCountries();
	}, [params.type]);

	return (
		<Grid>
			{counties.map((countie) => (
				<Link to={`/countrie/${countie.name.common}`}>
					<Card>
						<img src={countie?.flags.svg} alt="" />
						<div>
							<h5>{countie.name.common}</h5>
							<p>
								<span>Population: </span>
								{countie.population}
							</p>
							<p>
								<span>Region: </span>
								{countie.region}
							</p>
							<p>
								<span>Capital: </span>
								{countie.capital}
							</p>
						</div>
					</Card>
				</Link>
			))}
			;
		</Grid>
	);
}

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(235px, 1fr));
	justify-items: center;
	align-items: center;
	grid-gap: 3rem;
	height: 100%;
	width: 100%;
	padding: 3rem;
`;

const Card = styled.div`
	height: 280px;
	width: 230px;
	display: flex;
	flex-direction: column;
	color: hsl(0, 0%, 100%);
	background-color: hsl(209, 23%, 22%);
	box-shadow: -1px 4px 34px -7px #0000003b;
	border-radius: 5px;
	position: relative;
	img {
		position: absolute;
		left: 10;
		top: 0;
		width: 100%;
		height: 50%;
		object-fit: cover;
		border-radius: 5px 5px 0 0;
	}
	div {
		position: absolute;
		padding: 1.5rem 1rem;
		top: 50%;
		left: 0%;
		width: 100%;
		text-align: left;

		h5 {
			font-size: 0.9rem;
			margin-bottom: 1rem;
		}
		p {
			font-size: 0.7rem;
			span {
				font-weight: 600;
			}
		}
	}
`;
export default Region;
