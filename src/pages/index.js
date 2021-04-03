import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";

import TimeContainer from "../components/TimeContainer";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
  }

  body {
    color: #232129;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  .pad-bot-4 {
    padding-bottom: 4px;
  }

  .pad-bot-8 {
    padding-bottom: 8px;
  }

  .pad-right-10 {
    padding-right: 10px;
  }

  .link {
    color: #eee;
  }

  .link:visited {
    color: #eee;
  }
`;

const ContentWrapper = styled.main`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;

const Header = styled.h1`
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
	width: 1px;
`;

const FooterWrapper = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 6px;
	background-color: #39181f;
	color: #eee;
`;

// data
const times = [
	{
		title: "Retail Opens",
		date: "2021-04-12-12:00",
		description:
			"Initially this will be 12:00 – 18:00 weekdays and 10:00 – 18:00 weekends but these times may change depending on customer demand.",
		backgroundColor: "#003049",
		color: "#eee",
	},
	{
		title: "Booked Gaming without Pizza 🚫🍕",
		date: "2021-05-17-10:00",
		description:
			"Only booked gaming can take place. These bookings will need to be done online and more information about this will follow.",
		backgroundColor: "#f77f00",
		color: "#3e3e3e",
	},
	{
		title: "Walk-in Gaming with Pizza 🍕🍕🍕",
		date: "2021-06-21-10:00",
		description: "Await further advice from the Government and council.",
		backgroundColor: "#fcbf49",
		color: "#3e3e3e",
	},
];

const IndexPage = () => {
	return (
		<React.Fragment>
			<GlobalStyle />
			<title>Not long now</title>

			<ContentWrapper>
				<Header>
					I don't know how to calculate dates in my head. Check how long until
					dice saloon opens here.
				</Header>

				{times.map((time, i) => (
					<TimeContainer props={time} key={i} />
				))}

				<FooterWrapper>
					<p class="pad-right-10">made with ♥ in Hove, actually</p>
					<p>
						see source on{` `}
						<a
							href="https://github.com/pekac45/dice-saloon-open"
							className="link"
						>
							github
						</a>
					</p>
				</FooterWrapper>
			</ContentWrapper>
		</React.Fragment>
	);
};

export default IndexPage;
