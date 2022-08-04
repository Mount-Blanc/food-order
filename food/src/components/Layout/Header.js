import { Fragment} from 'react';
import HeaderCartButton from './HeaderCartButton';
import vagaImage from '../../assets/vaga.jpg';

const Header = props => {
    return <Fragment>
        <header>
            <h1>ReactMeals</h1>
            <HeaderCartButton />
        </header>
        <div>
            <img src={vagaImage} alt='musashi eating'/>
        </div>
    </Fragment>
};
export default Header;