import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";


import "./Education.css";
import {SchoolInfo} from "../SchoolInfo/SchoolInfo";


const Schools = [{
        "ImageURL":"",
        "Name": "University of Toronto",
        "Title":"Software developer",
        "Location": "Toronto, Canada",
        "Intro":""
    },
    {
        "ImageURL":"",
        "Name": "Moscrop Secondary School",
        "Title":"President of the SUA, since 2019",
        "Location": "Vancouver, Canada",
        "Intro":"Received Principle's List Award During G12\n" +
            "\n" +
            "Challenging myself by taking various AP courses, such as AP Microeconomics, AP Macroeconomic, AP Physics 1 and AP Chinese. Graduated with best 6 subjects average of 94.6%\n" +
            "\n" +
            "Founded Student United Association, focusing on promoting friendship between international and local students and cross-cultural communication, increasing school-to-school connections. Recruited 17 members and initiated the first \"New Year Party\" at Moscrop large gym, inviting over 100 students and raised $1500.\n" +
            "\n" +
            "Joined Moscrop Student Government in 2020 as External Relations Rep. Responsible for sponsorship and planning school-wide events, including the Winter Formal, Townhall, Games night, etc.\n" +
            "\n" +
            "Participated in Ronald McDonald House BC & Yucon high school volunteer program. Initiated \"Walk for Live\" fundraiser, raising for children from disadvantaged families, who are hospitalized in Vancouver."
    },
    {
        "ImageURL":"",
        "Name": "International School of Phnom Penh",
        "Title":"IB MYP degree, 2019",
        "Location": "Phnom Penh, Cambodia",
        "Intro":"Courses taken: English, Chinese, Digital Design, Music, Mathematics, Individual & Society\n" +
            "\n" +
            "Personal Project: Teach local children and schoolmates my own choreography, passed on the culture and spirit of dance, feel the power and happiness brought by it, and finally performed in the final assembly of the school.\n" +
            "\n" +
            "Participated in MARISA swimming team\n" +
            "Specialized in freestyle and breaststroke; Attended regular training(2-3 times a week); won the first prize in the ISSAPP competition.\n" +
            "\n" +
            "Participated in MARISA volleyball team\n" +
            "Attended weekly practices(3 times a week); won the first prize in the ISSAPP competition."
    }
];

export class Education extends React.Component{
    render() {
        return (
            <div className="SwiperContainer">
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >

                    {Schools.map(school => {
                        return(
                            <SwiperSlide>
                                <div className="slide">
                                    <SchoolInfo url = {school.ImageURL} school ={school}/>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        );
    }
}
