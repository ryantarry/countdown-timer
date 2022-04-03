import React, {Fragment} from "react";

const Clock = ({timerDays, timerHours, timerMinutes, timerSeconds}) => {
	
	return( 
		<Fragment>	
<h1>Countdown to Rudy's First Birthday</h1>
<img src={require('../Images/rudy.jpg')} alt="baby Rudy" />

			<section className="timer-container">
				<section className="timer">
					<div className="clock">	
						<section>
							<p>{timerDays}</p>
							<small>Days</small>
						</section>
						<span>:</span>
						<section>
							<p>{timerHours}</p>
							<small>Hours</small>
						</section>
						<span>:</span>
						<section>
							<p>{timerMinutes}</p>
							<small>Minutes</small>
						</section>
						<span>:</span>
						<section>
							<p>{timerSeconds}</p>
							<small>Seconds</small>
						</section>
					</div>
				</section>
			</section>
		</Fragment>
	);
};

Clock.defaultProps = {
	timerDays:10,
	timerHours:10,
	timerMinutes:10,
	timerSeconds:10,
}

export default Clock;
