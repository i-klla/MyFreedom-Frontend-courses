import {Button, Card, Badge, Stack} from 'react-bootstrap';
import classes from './MovieCard.module.css'
import placeholderImage from '../../assets/images/placeholder-image.png';
import { StarFillIcon } from '../../shared/Icons';


function MovieCard({language, title, description, releaseDate, rating, images}) {
    return (
        <>
        <Card>
            <Card.Img className={classes.cardPoster} variant="top" src={images || placeholderImage} />
            <Card.Body>
            <Card.Text>
                <Badge bg="dark" text="light">
                    {language}
                </Badge>
            </Card.Text >
            <div className='mb-2'>
                <Stack direction='horizontal' gap={1}>
                    <Badge pill bg="info">
                        Action
                    </Badge>
                    <Badge pill bg="info">
                        Comedy
                    </Badge>
                    <Badge pill bg="info">
                        Drama
                    </Badge>
                </Stack>
            </div>
            <Card.Title className={classes.title} >{title}</Card.Title>
            <Card.Text className={classes.description}>
                {description}
            </Card.Text>
            <Card.Text>
                <b>Realese date:</b> {releaseDate}
            </Card.Text>
            <div className='mb-3'>
                    <Stack direction='horizontal' gap='1'>
                        <StarFillIcon/> {rating}/10
                    </Stack>
            </div>
            <Button variant="primary">See more</Button>
            </Card.Body>
        </Card>
        </>
    );
}

export default MovieCard
