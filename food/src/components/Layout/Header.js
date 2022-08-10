import { Fragment} from 'react';
import HeaderCartButton from './HeaderCartButton';
import vagaImage from '../../assets/vaga.jpg';
import classes from './Header.module.css';

const Header = props => {
    return(
        <Fragment>
            <header>
                <h2></h2>
                <HeaderCartButton/>
            </header>
            <div>
                <img></img>
            </div>
        </Fragment>
    )
};
export default Header;