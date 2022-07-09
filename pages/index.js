import Component from '../components/login-btn';
import { useUser } from '@auth0/nextjs-auth0';
export default function Home() {
	console.log(
		process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
		process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET
	);
	return (
		<div>
			<Component />
		</div>
	);
}
