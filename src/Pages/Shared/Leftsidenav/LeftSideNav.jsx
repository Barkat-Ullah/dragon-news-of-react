import { useState } from "react";
import moment from 'moment';
import {MdCalendarToday } from 'react-icons/md';
import { Link } from "react-router-dom";
import img1 from "../../../assets/1.png"
import img2 from "../../../assets/2.png"
import img3 from "../../../assets/3.png"


const LeftSideNav = () => {
    const [categories, setCategories] = useState([])
    useState( () => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div className="p-4 space-y-6">
             <h2 className="text-3xl border text-center text-yellow-50 bg-slate-500 p-3 rounded-xl">All Category</h2>
             {
                categories.map(category => <Link className="block text-xl font-semibold" key={category.id} to={`/category/${category.id}`}>{category.name}</Link>)
             }
             <div>
                <div className="space-y-2 mb-2">
                    <img src={img1} alt="" />
                    <h2 className="font-medium text-xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                    <div className="flex justify-between">
                        <span>Sports</span>
                        <div className="flex items-center gap-1">
                            <MdCalendarToday></MdCalendarToday>
                            <p>{moment().format("dddd, h:mm")}</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-2 mb-3">
                    <img src={img2} alt="" />
                    <h2 className="font-medium text-xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                    <div className="flex justify-between">
                        <span>Sports</span>
                        <div className="flex items-center gap-1">
                            <MdCalendarToday></MdCalendarToday>
                            <p>{moment().format("dddd, h:mm")}</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-2 mb-2">
                    <img src={img3} alt="" />
                    <h2 className="font-medium text-xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                    <div className="flex justify-between">
                        <span>Sports</span>
                        <div className="flex items-center gap-1">
                            <MdCalendarToday></MdCalendarToday>
                            <p>{moment().format("dddd, h:mm")}</p>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    );
};

export default LeftSideNav;