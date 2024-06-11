import { useState } from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const LikeDislike = () => {
    const [like, setLike] = useState(false);
    const [dislike, setDislike] = useState(false);

    const handleLike = () => {
        setLike(true);
        setDislike(false);
    };

    const handleDislike = () => {
        setLike(false);
        setDislike(true);
    };

    return (
        <div className="flex space-x-4 my-5 ">
            {/* dislike button */}
            <button
                type="button"
                className={`w-10 h-10 ${dislike ? 'text-red-500' : 'text-gray-300'}`}
                onClick={handleDislike}
            >
                <FaThumbsDown className="w-full h-full" />
                <p>No</p>
            </button>

            {/* dislike button */}

            {/* like  button */}
            <button
                type="button"
                className={`w-10 h-10 ${like ? 'text-green-500' : 'text-gray-300'}`}
                onClick={handleLike}
            >
                <FaThumbsUp className="w-full h-full" />
                <p>Yes</p>
            </button>

            {/* like  button */}

        </div>
    );
};

export default LikeDislike;
