import { Button } from './styles/Button.styled';
import { StyledCard } from './styles/Card.styled';

function Card({ item: { id, title, headline, body, image, button } }) {
	return (
		<div>
			{image && <img src={`./images/${image}`} alt='' />}
			<h4>{title}</h4>
			<h2>{headline}</h2>
			<div dangerouslySetInnerHTML={{ __html: body }}></div>
			{button && <Button>{button}</Button>}
			{id % 2 != 0 && <hr></hr>}
		</div>
	);
}

export default Card;
