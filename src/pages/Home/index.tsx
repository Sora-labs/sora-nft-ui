import { CuratedCollection } from "./CuratedCollection"
import FirstPost from "./FirstPost"

const Home = () => {
    return (
        <div className="py-8">
            <div className=""></div>
            <FirstPost></FirstPost>
            <CuratedCollection></CuratedCollection>
        </div>
    )
}

export default Home