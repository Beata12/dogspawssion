import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

function EmailForm() {
	const ref = useRef();
	const [success, setSuccess] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_zt2weso",
				"template_dlrbyup",
				ref.current,
				"e57EhNdvqqwWkpB9j"
			)
			.then(
				(result) => {
					console.log(result.text);
					setSuccess(true);
					ref.current.reset(); // reset the form
					setTimeout(() => {
						setSuccess(false);
					}, 5000); // hide success message after 5 seconds
				},
				(error) => {
					console.log(error.text);
					setSuccess(false);
				}
			);
	};

	return (
		<div className="container email-box d-flex justify-content-center">
			<form
				className="d-flex flex-column "
				ref={ref}
				onSubmit={handleSubmit}
			>
				<input
					data-aos="zoom-in-up"
					data-aos-delay="250"
					data-aos-duration="1500"
					className="  messageform"
					placeholder="imię"
					name="name"
					required
				/>
				<input
					data-aos="zoom-in-up"
					data-aos-delay="300"
					data-aos-duration="1500"
					className=" messageform"
					placeholder="e-mail"
					name="email"
					type="email"
					required
				/>
				<textarea
					data-aos="zoom-in-up"
					data-aos-delay="350"
					data-aos-duration="1500"
					className="textArea"
					placeholder="Napisz wiadomość"
					name="message"
					rows={6}
					required
				/>
				<button
					data-aos="zoom-in-up"
					data-aos-delay="400"
					data-aos-duration="1500"
					className="messageButton btn-lg text-lowercase form"
					type="submit"
				>
					Wyślij
				</button>
				{success && (
					<div>
						<p className="returnMessageDesktop">
							Twoja wiadomość została wysłana. <br />
							Skontaktuje się z Tobą tak szybko jak to tylko
							możliwe! 🐕
						</p>
						<p className="returnMessageMobile">
							Twoja wiadomość została wysłana. <br />
							Skontaktuje się z Tobą tak szybko <br />
							jak to tylko możliwe! 🐕
						</p>
					</div>
				)}
			</form>
		</div>
	);
}

export default EmailForm;
