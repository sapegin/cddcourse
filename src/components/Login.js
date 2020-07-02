import React from 'react';
import Box from './Box';
import Button from './Button';
import Flex from './Flex';
import Grid from './Grid';
import Heading from './Heading';
import Input from './Input';
import Link from './Link';
import Stack from './Stack';
import Text from './Text';
import LoginForm from './LoginForm';

const Login = () => (
	<Grid as="main" gridAutoFlow="column" gridAutoColumns="1fr" height="100vg">
		<Flex p={4} jusitfyContent="center" alignItems="center">
			<Stack gap={4}>
				<Heading level={1}>Log in to our app</Heading>
				<LoginForm />
				<Text variant="disclaimer">
					By using our site you are agreeing to our{' '}
					<Link href="/toc">terms and conditions</Link>.
				</Text>
			</Stack>
		</Flex>
		<Box p={4} bg="primary" display={['none', 'block']}>
			<Text color="background">Use our app, it’s good!</Text>
		</Box>
	</Grid>
);

export default Login;
