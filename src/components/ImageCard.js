import React from 'react'


const ImageCard = ({ image }) => {
    const { webformatURL, user, views, downloads, likes } = image;
    const tags = image.tags.split(',');

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="w-full h-64">
                <img src={webformatURL} alt="Image" className="object-cover w-full h-full" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Photo By {user}</h2>
                <p>Views: {views}</p>
                <p>Downloads: {downloads}</p>
                <p>Likes: {likes}</p>
            </div>
            <div className="px-6 py-4">
                {tags.map((tag, index) => (
                    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{tag}</span>
                ))}
            </div>
        </div>
    );
};

export default ImageCard;
