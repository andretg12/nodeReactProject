import React from "react";
import useForm from "react-hook-form";
import "./contact.css";

function Contact() {
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (event) => {
		const data = new FormData(event.target);
		const body = data.getAll("email")
		console.log(body)
	}


	return (
		// <div>
		// 	<section className="hero">
		// 		<div className="hero-inner">
		// 			<h1>Contact us</h1>
		// 		</div>
		// 	</section>
		// 	<form onSubmit={handleSubmit(onSubmit)}>
		// 		<input
		// 			type="text"
		// 			placeholder="First name"
		// 			name="firstName"
		// 			ref={register({ required: true, maxLength: 80 })}
		// 		/>
		// 		<p>{errors.firstName && "First name is required"}</p>
		// 		<br />
		// 		<input
		// 			type="text"
		// 			placeholder="Last name"
		// 			name="lastName"
		// 			ref={register({ required: true, maxLength: 100 })}
		// 		/>
		// 		<p>{errors.lastName && "Last name is required"}</p>
		// 		<br />
		// 		<input
		// 			type="tel"
		// 			placeholder="Mobile number"
		// 			name="number"
		// 			ref={register({ required: true, maxLength: 15 })}
		// 		/>
		// 		<p>{errors.number && "Phone number is required for security"}</p>
		// 		<br />
		// 		<input
		// 			type="email"
		// 			placeholder="Email"
		// 			name="email"
		// 			ref={register({ required: true, maxLength: 30 })}
		// 		/>
		// 		<p>{errors.email && "Email is required"}</p>
		// 		<br />
		// 		<select name="Gender" ref={register({ required: false })}>
		// 			<option value="Male">Male</option>
		// 			<option value="Female">Female</option>
		// 			<option value="Other">Other</option>
		// 			<option value="Prefer non disclose">Non disclose</option>
		// 		</select>
		// 		<br />{" "}
		// 		<input
		// 			type="text"
		// 			placeholder="Comment"
		// 			name="message"
		// 			ref={register({ required: true, max: 240, maxLength: 240 })}
		// 		/>
		// 		{errors.message && "Comment is required for more information"}
		// 		<br />
		// 		<input type="submit" />
		// 	</form>
		// </div>
		<div>
			<section class="hero">
				<div class="hero-inner">
					<h1>Contact us</h1>
				</div>
			</section>
			<div className="subscribe-form">
				<form action="POST">
					<input type="email" name="email" placeholder="your Email" />
					<input type="text" name="fname" placeholder="First Name" />

					<button type="submit">Sign Up</button>
				</form>
			</div>
		</div>
	);
}
export default Contact;
