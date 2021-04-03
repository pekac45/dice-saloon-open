import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";

import TimeContainer from "../components/TimeContainer";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
  }

  body {
    color: #232129;
    font-family: -apple-system, Roboto, sans-serif, serif;
  }

  .pad-bot-4 {
    padding-bottom: 4px;
  }

  .pad-bot-8 {
    padding-bottom: 8px;
  }
`;

const ContentWrapper = styled.main`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;

// dayjs.duration(dayjs().diff(dayjs("2021-04-12-12:00")));

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
	// {
	// 	title: "Booked Gaming without Pizza 🚫🍕",
	// 	date: "2021-05-17-10:00",
	// 	description:
	// 		"Only booked gaming can take place. These bookings will need to be done online and more information about this will follow.",
	// 	backgroundColor: "#f77f00",
	// 	color: "#3e3e3e",
	// },
	// {
	// 	title: "Walk-in Gaming with Pizza 🍕🍕🍕",
	// 	date: "2021-06-21-10:00",
	// 	description: "Await further advice from the Government and council",
	// 	backgroundColor: "#fcbf49",
	// 	color: "#3e3e3e",
	// },
];

const IndexPage = () => {
	return (
		<React.Fragment>
			<GlobalStyle />
			<title>Not long now</title>

			<ContentWrapper>
				{times.map((time, i) => (
					<TimeContainer props={time} key={i} />
				))}
			</ContentWrapper>
		</React.Fragment>
	);
};

export default IndexPage;
