import Image from "next/image";
import mine from "../../public/images/mine.webp"

function MyImage() {
    return(<Image src={mine} alt="me" layout="fill" placeholder="blur" />)
}

export default MyImage