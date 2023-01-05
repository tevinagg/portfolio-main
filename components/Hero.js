import useWindowDimensions from "../hooks/useWindowDimensions";
import Proposition from "./elements/Proposition";
import MyImage from "./elements/MyImage";
import HeroContacts from "./elements/HeroContacts";

function Hero() {

    const [windowDimension] = useWindowDimensions()

    const renderHeroPhoto = () => {

        if (windowDimension){
            const {width} = windowDimension
            if (width > 768){
                return (
                    <div className="col-md-4" id="small-column">
                        <MyImage />
                    </div>
                )
            }else return null
        }else return null
    }

    return(
        <div className="container-fluid">
            <div className="row" id="hero">
                <div className="col-md-8" id="big-column">
                    <Proposition />
                    <HeroContacts />
                </div>
                {renderHeroPhoto()}
            </div>
        </div>
    )
}

export default Hero