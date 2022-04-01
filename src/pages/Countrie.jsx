import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { VscArrowLeft } from "react-icons/vsc";

function Countrie() {
	const [details, setDetails] = useState({});

	const params = useParams();

	useEffect(() => {
		const fetchDetails = async () => {
			const data = await fetch(
				`https://restcountries.com/v2/name/${params.id}`
			);
			const countrie = await data.json();
			setDetails(countrie[0]);
		};
		fetchDetails();
	}, [params.id]);

	return (
		<Wrapper>
			<StyledLink to={`/`}>
				<button>
					<ArrowBack />
					 Back
				</button>
			</StyledLink>
			<Conteiner>
				<Photo>
					<img src={details.flag} alt="" />
				</Photo>
				<Info>
					<h2>{details.name}</h2>
					<Grid>
						<div>
							<p>
								<span>Native name:</span>
								{details.nativeName}
							</p>
							<p>
								<span>Population:</span>
								{details.population}
							</p>
							<p>
								<span>Region:</span>
								{details.region}
							</p>
							<p>
								<span>Sub Region:</span>
								{details.subregion}
							</p>
							<p>
								<span>Capital:</span>
								{details.capital}
							</p>
						</div>
						<div>
							<p>
								<span>Top Level Domain:</span>
								{details.topLevelDomain?.map((domain) => {
									return domain;
								})}
							</p>
							<p>
								<span>Currencies:</span>
								{details.currencies?.map((currencie) => {
									return currencie.name;
								})}
							</p>

							<p>
								<span>Languages:</span>
								{details.languages?.map((language) => {
									return language.name;
								})}
							</p>
						</div>
					</Grid>
					<Footer>
						<p>Border Countries:</p>
						{details.borders?.map((countrie,id) => {
							return <span>{countrie}</span>;
						}) ?? <span>None</span>}
					</Footer>
				</Info>
			</Conteiner>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	padding: 3rem;
`;

const StyledLink = styled(Link)`
	display: flex;
	margin-left: 2.5rem;
	margin-bottom: 3rem;
	text-decoration: none;
	button {
		padding: 0.4rem 2rem;
		color: hsl(0, 0%, 100%);
		background-color: hsl(209, 23%, 22%);
		box-shadow: -1px 4px 34px -7px #0000003b;
		border-radius: 5px;
		outline: none;
		border: none;
		cursor: pointer;
	}
`;

const ArrowBack = styled(VscArrowLeft)`
	font-size: 0.8rem;
`;

const Conteiner = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	grid-gap: 2rem;
`;

const Photo = styled.div`
	img {
		max-height: 350px;
		width: 500px;
		border: 1rem solid hsl(209, 23%, 22%);
	}
	@media (max-width: 1100px) {
		img {
			max-height: 300px;
		}
	}
	@media (max-width: 950px) {
		img {
			max-height: 250px;
		}
	}
`;

const Info = styled.div`
	text-align: left;
	color: #fff;
	h2 {
		margin: 2.5rem 0 1.5rem 0;
	}
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	font-size: 0.9rem;
	p {
		padding: 0.3rem 0;
		font-size: 0.8rem;
		span {
			font-weight: 600;
			margin-right: 0.3rem;
		}
	}
`;

const Footer = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	font-size: 0.8rem;
	margin-top: 2rem;
	p {
		font-weight: 600;
	}
	span {
		margin: 0.4rem;
		font-size: 0.6rem;
		padding: 0.2rem 1.5rem;
		color: hsl(0, 0%, 78.03921568627452%);
		background-color: hsl(209, 23%, 22%);
		box-shadow: -1px 4px 34px -7px #0000003b;
		border-radius: 5px;
	}
`;

export default Countrie;
