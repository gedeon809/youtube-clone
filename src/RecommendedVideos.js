import React from 'react'
import "./RecommendedVideos.css";
import VideoCard from './VideoCard';
function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                <VideoCard 
                    title="Gedeon's instagram profile picture"
                    channel="Gedeon Kakona"
                    views="2.3M views"
                    timestamp="3 days ago"
                    channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7G-6bQq95OvB6mS_eR9P041MdnUprVVDsSA&usqp=CAU"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFtVfOtPs0btz1yf7FVk55XGq7FReK3ZDn1g&usqp=CAU"
                />
                <VideoCard 
                    title="Gedeon's instagram profile picture"
                    channel="Gedeon Kakona"
                    views="2.3M views"
                    timestamp="3 days ago"
                    channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrYBN82WUQtaEFT_5DmfKmK03Nk0IouiHcQQ&usqp=CAU"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4WJmW4oB-CnseQhPtScExdTuIrbklpE5lXQ&usqp=CAU"
                />
                <VideoCard 
                    title="Gedeon's instagram profile picture"
                    channel="Gedeon Kakona"
                    views="2.3M views"
                    timestamp="3 days ago"
                    channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTrO9nHf4wh_nvTtsSLnEPAtksWa4E18Dpqeg&usqp=CAU"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStfXOVJkiCEbv64nyqQFafTMULt45hGzhTlQ&usqp=CAU"
                />
                <VideoCard 
                    title="Gedeon's instagram profile picture"
                    channel="Gedeon Kakona"
                    views="2.3M views"
                    timestamp="3 days ago"
                    channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzF9IERE4idbNtkYno6dqcmeqGEgZ45sQ3LQ&usqp=CAU"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTrO9nHf4wh_nvTtsSLnEPAtksWa4E18Dpqeg&usqp=CAU"
                />
                <VideoCard 
                    title="Gedeon's instagram profile picture"
                    channel="Gedeon Kakona"
                    views="2.3M views"
                    timestamp="3 days ago"
                    channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStfXOVJkiCEbv64nyqQFafTMULt45hGzhTlQ&usqp=CAU"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzF9IERE4idbNtkYno6dqcmeqGEgZ45sQ3LQ&usqp=CAU"
                />
            </div>
        </div>
    );
}

export default RecommendedVideos
