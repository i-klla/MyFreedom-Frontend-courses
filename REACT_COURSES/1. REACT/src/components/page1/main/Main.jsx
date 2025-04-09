import animalLogo from '@assert/images/animal-logo.webp'
import classes from './Main.module.scss'

function Main() {
    return (
        <main className={classes.main}>
            <img className={classes.mainImage} src={animalLogo} alt="" />
            <h1 className={classes.title}>MAIN</h1>
        </main>
    )
}

export default Main
