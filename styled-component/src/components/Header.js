import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled';
import { Container } from './styles/Container.styled';
import { Button } from './styles/Button.styled';
import { Flex } from './styles/Flex.styled';

const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<Nav>
					<Logo src='./images/logo.png' alt='' />
					<div>
						<Flex>
							<li>Course</li>
							<li>Careers</li>
							<li>About us</li>
							<li>Contact us</li>
						</Flex>
					</div>
				</Nav>
			</Container>
		</StyledHeader>
	);
};

export default Header;
