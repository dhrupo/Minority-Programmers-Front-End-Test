import React from 'react';

const StartupCardsBannerList = ({bannerData}) => {
    const {title, image} = bannerData;

    const BannerImg = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)),url(${image})`
    }

    return (
        <div className="col-md-4 mb-3">
            <div style={BannerImg} className="startupCardItem mx-2">
                <div className="card-body">
                    <button type="button" className="btn btn-outline-white">{title}</button>
                </div>
            </div>
        </div>
    );
};

export default StartupCardsBannerList;