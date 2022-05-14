import styled from 'styled-components';

export const StyledHeader = styled.header`
	background-color: ${({ theme }) => theme.colors.header};
	padding: 32px 0;
`;

export const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: #fff;
	font-weight: normal;
	font-family: 'Assistant', sans-serif;

	div {
		list-style-type: none;
		align-content: flex-end;
		justify-content: space-between;
		@media only screen and (max-width: ${({ theme }) => theme.mobile}) {
			flex-direction: row;
			flex-shrink: 2;
		}
	}

	div li {
		padding: 16px;
	}

	@media only screen and (max-width: ${({ theme }) => theme.mobile}) {
		flex-direction: column;
	}
`;

export const Logo = styled.img`
	@media only screen and (max-width: ${({ theme }) => theme.mobile}) {
		margin-bottom: 40px;
	}
`;

export const Image = styled.img`
	width: 375px;
	margin-left: 40px;

	@media only screen and (max-width: ${({ theme }) => theme.mobile}) {
		margin: 40px 0 30px;
	}
`;
