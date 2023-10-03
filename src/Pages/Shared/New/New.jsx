/* eslint-disable react/prop-types */
import { FaBookmark, FaShare } from "react-icons/fa";

const New = ({ article }) => {
  const {
    title,
    thumbnail_url,
    author,
    details,
    image_url,
    total_view,
    rating,
   
  } = article;

  return (
    <div className="space-y-5">
      <div className="flex justify-between mt-3">
        <div className="flex gap-2">
          <div>
            <img className="w-10 h-11 rounded-full" src={author.img} alt="" />
          </div>
          <div>
            <span>{author.name}</span>
            <p>{author.published_date}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <FaBookmark></FaBookmark>
          <FaShare></FaShare>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <img src={image_url} alt="" />
        <p>{details}</p>
      </div>
    </div>
  );
};

export default New;
