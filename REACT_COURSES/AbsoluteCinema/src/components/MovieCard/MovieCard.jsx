import {Button, Card, Badge, Stack} from 'react-bootstrap';
import classes from './MovieCard.module.css'
import placeholderImage from '../../assets/images/placeholder-image.png';
import { StarFillIcon } from '../../shared/Icons';
import { useEffect, useState } from 'react';


function MovieCard({language, title, description, releaseDate, rating, image}) {
    const [imageLoading, setImageLoading] = useState(false)

    useEffect(() => { //срабатывает всегда, когда обновляется наш props image
        testImage(image)
    }, [image])

    function testImage(someImage) { // эта функция следит за изменениями фотографии
        setImageLoading(true) // начало загрузки фотки
        const img = new Image() // <img />
        img.src = someImage // <img src="какая та ссылка" />
        img.onload = () => { //onload - когда фотка полностью загружается
            setImageLoading(false) // конец загрузки фотки
        }

    }

    return (
        <>
        <Card>
            <Card.Img className={classes.cardPoster} variant="top" src={imageLoading ? placeholderImage : image} loading='lazy'/>
            <Card.Body>
            <Card.Text>
                <Badge className={classes.language} bg="dark" text="light">
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
                        <StarFillIcon/> <b>{rating.toFixed(1)}</b>/10
                    </Stack>
            </div>
            <Button variant="primary">See more</Button>
            </Card.Body>
        </Card>
        </>
    );
}

export default MovieCard
