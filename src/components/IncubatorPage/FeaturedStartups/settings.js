const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    autoplay:true,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
};

export default settings;
