import { useState } from "react";
import { Link } from "react-router-dom";
import SignUp from "../../images/register.png";
import { useAuth } from "../../context/AuthContext";
import { LockIcon, EmailIcon, UserIcon } from "../Icons";
import TextInput from "../TextInput";
import Form from "../Form";

export default function Register() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const { signUp } = useAuth();

	async function handleSubmit(e) {
		e.preventDefault();

		if (password === confirmPassword) {
			const values = {
				name,
				email,
				password,
				confirmPassword,
			};
			try {
				await signUp(values);
			} catch (err) {
				console.log(err);
			}
		}
	}

	return (
		<div className="flex justify-center h-screen max-h-full min-h-full pr-12 pl-12 md:pr-0 md:pl-0 w-full md:max-w-full mx-auto bg-white rounded-xl shadow-lg">
			<div className="hidden h-32 md:h-auto md:w-3/4 lg:w-2/4 lg:h-auto md:block lg:block">
				<img
					src={SignUp}
					alt="LoginPage"
					className="object-contain md:object-scale-down h-full w-full"
				/>
			</div>

			<div className="flex flex-col justify-center md:pr-28 md:pl-10 lg:pr-32">
				<div className="mb-8">
					<h1 className="text-4xl font-semibold text-gradientPrimaryStart">
						Create Your Account
					</h1>
					<p className="text-sm font-semibold text-gray-400">
						It's quick & easy.
					</p>
				</div>

				<Form onSubmit={handleSubmit}>
					<TextInput
						icon={<UserIcon />}
						type="text"
						placeholder="Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>

					<TextInput
						icon={<EmailIcon />}
						type="text"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<TextInput
						icon={<LockIcon />}
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<TextInput
						icon={<LockIcon />}
						type="password"
						placeholder="Confirm Password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>

					<button
						className="text-center text-lg w-full bg-basic rounded-md text-white py-3 font-medium hover:bg-gradientPrimaryEnd"
						type="submit"
					>
						SignUp
					</button>
				</Form>
				
				<div className="flex items-center mt-3">
					<h1 className="text-gray-500 font-medium">
						Already a ModernBlogger?
					</h1>
					<Link
						to="/login"
						className="font-medium text-gradientPrimaryEnd pl-4"
					>
						SignIn
					</Link>
				</div>
				<div className="">
					<p className="text-gray-500 text-xs mt-6 italic text-center">
						By Clicking Submit, you are agree to our
						<span className="pl-2 text-basic font-semibold cursor-pointer">
							Terms,
						</span>
						<span className="pl-2 pr-1 text-basic font-semibold cursor-pointer">
							Privacy Policy
						</span>{" "}
						and
						<span className="pl-2 text-basic font-semibold cursor-pointer">
							Content Policy.
						</span>
					</p>
				</div>
			</div>
		</div>
	);
}
