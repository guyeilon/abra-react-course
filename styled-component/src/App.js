import { ThemeProvider } from 'styled-components';

import { theme } from './App/theme';
import Header from './components/Header';
import { Container } from './components/styles/Container.styled';
import GlobalStyles from './components/styles/Global';

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
