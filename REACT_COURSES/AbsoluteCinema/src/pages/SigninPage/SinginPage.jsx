import SigninForm from '../../components/SigninForm/SigninForm';
import classes from './SingInPage.module.css';
import { Container } from "react-bootstrap";

function SingInPage() {
    return (
        <Container fluid="xl">
           <div className={classes.signinFormContainer}>
            <h1 className='mb-4'>Sign-in</h1>
             <SigninForm/>
           </div>
        </Container>
    )
}

export default SingInPage
