import { TuneOutlined } from '@material-ui/icons';
import React from 'react';
import './SearchPage.css';
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";


function SearchPage() {
    return (
        <div className="searchPage">
           <div className="searchPage__filter">
                <TuneOutlined />
                <h2>FILTER</h2>
           </div>
           <hr />
           <ChannelRow 
               image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrYBN82WUQtaEFT_5DmfKmK03Nk0IouiHcQQ&usqp=CAU"
               channel="Gedeon Profile"
               verified
               subs="657K"
               noOfVideos={383}
               description="Once you’ve initialized a new React Native project, you can copy/paste any of the 
               examples into your index.ios.js or index.android.js files to play around with them."
           /> 
           <hr />
           <VideoRow 
               views="1.4M"
                subs="659K" 
                description="Do you want a Free one" 
                timestamp="58 seconds ago"
                channel="Gedeon Profile"
                title="Let us Build whatsap-clone" 
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzF9IERE4idbNtkYno6dqcmeqGEgZ45sQ3LQ&usqp=CAU"
           />
           <VideoRow 
               views="1000M"
                subs="700K" 
                description="Do you want a Free one" 
                timestamp="8 seconds ago"
                channel="React Js"
                title="Let us Build youtube clone" 
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzF9IERE4idbNtkYno6dqcmeqGEgZ45sQ3LQ&usqp=CAU"
           />
           <VideoRow 
               views="2M"
                subs="679K" 
                description="Do you want a Free one" 
                timestamp="58 seconds ago"
                channel="Gedeon Profile"
                title="Let us Build youtube clone" 
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzF9IERE4idbNtkYno6dqcmeqGEgZ45sQ3LQ&usqp=CAU"
           />
        </div>
    );
}

export default SearchPage;
