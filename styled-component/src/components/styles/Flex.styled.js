import styled from 'styled-components';

export const Flex = styled.div`
	display: flex;
	/* align-items: center; */
	flex-direction: ${({ direction }) => direction || 'row'};

	flex: ${({ grow }) => grow || '1'};
	gap: 0 24px;
	& > div {
	}

	@media only screen and (max-width: ${({ theme }) => theme.mobile}) {
		flex-direction: column;
		text-align: center;
	}
`;
