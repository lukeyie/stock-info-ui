import PERatio from "../PERatio/pe-ratio";
import classes from "./home.module.scss"

export interface HomeProps {

}

const Home: React.FunctionComponent<HomeProps> = () => {
    return (
        <div className={classes.home}>
            <PERatio />
        </div>
    );
}

export default Home;