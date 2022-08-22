import Image from "next/image";
import myBigImg from "../../public/images/tevin1.webp"

function MyImage() {
    return(<Image src={myBigImg} alt="me" layout="fill" placeholder="blur" />)
}

export default MyImage