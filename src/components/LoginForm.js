import React from 'react';
import Button from './Button';
import Flex from './Flex';
import Input from './Input';
import Link from './Link';
import Stack from './Stack';
import Text from './Text';

const LoginForm = () => (
	<Stack as="form" gap={4}>
		<Stack as="label" gap={1}>
			<Text>Username</Text>
			<Input name="username" />
		</Stack>
		<Stack gap={1}>
			<Flex justifyContent="space-between">
				<Text as="label" htmlFor="password-field">
					Password
				</Text>
				<Text>
					<Link href="/reset">Forgot password?</Link>
				</Text>
			</Flex>
			<Input type="password" id="password-field" name="password" />
		</Stack>
		<Button type="submit" variant="primary">
			Log in
		</Button>
	</Stack>
);

export default LoginForm;
