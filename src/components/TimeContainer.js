import React from "react";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(duration);
dayjs.extend(advancedFormat);

const Container = styled.div`
	background-color: ${(props) => props.backgroundColor};
	color: ${(props) => props.color};
	padding: 20px;
	flex: 1 1 auto;
`;

const TimeContainer = (props) => {
	const data = props.props;

	const timeDiffRef = useRef(dayjs.duration(dayjs(data.date).diff(dayjs())));
	const formattedDate = dayjs(data.date).format("ddd Do MMM");

	const [months, setMonths] = useState(timeDiffRef.current.$d.months);
	const [days, setDays] = useState(timeDiffRef.current.$d.days);
	const [hours, setHours] = useState(timeDiffRef.current.$d.hours);
	const [minutes, setMinutes] = useState(timeDiffRef.current.$d.minutes);
	const [seconds, setSeconds] = useState(timeDiffRef.current.$d.seconds);
	const [ms, setMs] = useState(timeDiffRef.current.$ms);

	useEffect(() => {
		const myInterval = setInterval(() => {
			setMs(timeDiffRef.current.$ms);

			if (ms <= 0) {
				console.log("stop");
				clearInterval(myInterval);
			} else {
				console.log("tick");
				setMonths(timeDiffRef.current.$d.months);
				setDays(timeDiffRef.current.$d.days);
				setHours(timeDiffRef.current.$d.hours);
				setMinutes(timeDiffRef.current.$d.minutes);
				setSeconds(timeDiffRef.current.$d.seconds);
				timeDiffRef.current = dayjs.duration(dayjs(data.date).diff(dayjs()));
				console.log("ref", timeDiffRef.current);
			}
		}, 1000);
		return () => {
			clearInterval(myInterval);
		};
	}, []);

	let monthStr = "";
	if (months === 1) {
		monthStr = "1 month, ";
	} else if (months === 2) {
		monthStr = "2 months, ";
	}

	let dayStr = "";
	if (days === 1) {
		dayStr = "1 day, ";
	} else if (days > 1 || (days === 0 && months >= 1)) {
		dayStr = `${days} days, `;
	}

	let hourStr = "";
	if (hours === 1) {
		hourStr = "1 hour, ";
	} else if (
		hours > 1 ||
		(hours === 0 && months >= 1) ||
		(hours === 0 && days >= 1)
	) {
		hourStr = `${hours} hours, `;
	}

	let minuteStr = "";
	if (minutes === 1) {
		minuteStr = "1 minute, ";
	} else if (
		minutes > 1 ||
		(minutes === 0 && months >= 1) ||
		(minutes === 0 && days >= 1) ||
		(minutes === 0 && hours >= 1)
	) {
		minuteStr = `${minutes} minutes, `;
	}

	let secStr = "";
	if (seconds === 1) {
		secStr = "1 second";
	} else if (
		seconds > 1 ||
		(seconds === 0 && months >= 1) ||
		(seconds === 0 && days >= 1) ||
		(seconds === 0 && hours >= 1) ||
		(seconds === 0 && minutes >= 1)
	) {
		secStr = `${seconds} seconds`;
	}

	const timeContent =
		ms <= 0
			? `You can now do this! 🎉🎉🎉`
			: `In ${monthStr} ${dayStr} ${hourStr} ${minuteStr} ${secStr}.`;

	return (
		<Container backgroundColor={data.backgroundColor} color={data.color}>
			<h2 className="pad-bot-8">{data.title}</h2>
			<h3 className="pad-bot-4">{formattedDate}</h3>
			<h3 className="pad-bot-4">{timeContent}</h3>
			<p>{data.description}</p>
		</Container>
	);
};

export default TimeContainer;
