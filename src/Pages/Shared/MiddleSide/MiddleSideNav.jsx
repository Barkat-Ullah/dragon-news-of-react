import { useEffect, useState } from "react";
import New from "../New/New";

const MiddleSideNav = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        fetch('news.json')
        .then(res => res.json())
        .then(data => setNews(data))
    }, [])

    return (
        <div>
            <h2 className="text-3xl text-center p-4">Dragon News Home: {news.length}</h2>
            {news.map(article => <New key={article.id} article={article}></New>)}
        </div>
    );
};

export default MiddleSideNav;
