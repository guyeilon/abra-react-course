import { ThemeProvider } from 'styled-components';

import { theme } from './App/theme';
import Header from './components/Header';
import Card from './components/Card';
import { Container } from './components/styles/Container.styled';
import GlobalStyles from './components/styles/Global';

import content from './Data/content';

import { Flex } from './components/styles/Flex.styled';
import MainContainer from './components/MainContainer';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<Header />
				<Container>
					<MainContainer />
				</Container>
			</>
		</ThemeProvider>
	);
};

export default App;
