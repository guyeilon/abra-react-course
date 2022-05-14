import content from '../Data/content';
import Card from './Card';
import { Flex } from './styles/Flex.styled';

function MainContainer() {
	return (
		<>
			<h1>Latest updates</h1>
			<Flex>
				<Flex direction='column'>
					{content.map((item, index) => item.column === 'left' && <Card key={index} item={item} />)}
				</Flex>
				<Flex direction='column' grow='2'>
					{content.map((item, index) => item.column === 'center' && <Card key={index} item={item} />)}
				</Flex>
				<Flex direction='column'>
					{content.map((item, index) => item.column === 'right' && <Card key={index} item={item} />)}
				</Flex>
			</Flex>
		</>
	);
}

export default MainContainer;
