import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/Leftsidenav/LeftSideNav";
import MiddleSideNav from "../Shared/MiddleSide/MiddleSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";


const Home = () => {
    return (
        <div>
               <Header></Header>
                <Navbar></Navbar>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="border">
                        <LeftSideNav></LeftSideNav>
                    </div>
                    <div className="md:col-span-2 border">
                        <MiddleSideNav></MiddleSideNav>
                    </div>
                    <div className="border">
                        <RightSideNav></RightSideNav>
                    </div>
                </div>
        </div>
    );
};

export default Home;