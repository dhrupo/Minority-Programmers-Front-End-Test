import React, {useState, useEffect} from 'react';
import StartupBannersInfo from '../../../dummyData/startupBannerData.json';
import StartupCardsBannerList from './StartupCardsBannerList';
import './StartupCardsBanner.css';

const StartupCardsBanner = () => {
    const [startupBanners, setStartupBanners] = useState([]);

    useEffect(() => {
        setStartupBanners(StartupBannersInfo);
    }, [])

    return (
        <div className="pb-5 pt-2">
            <div className="container">
                <div className="row">
                    {
                        startupBanners.map(bannerData => <StartupCardsBannerList bannerData={bannerData} key={bannerData.id} ></StartupCardsBannerList> )
                    }
                </div>
            </div>
        </div>
    );
};

export default StartupCardsBanner;