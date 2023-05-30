import React, { Component } from "react";
import { FiCast, FiLayers, FiUsers, FiMonitor } from "react-icons/fi";
import { FaBirthdayCake } from 'react-icons/fa';
import { BiBuildingHouse } from 'react-icons/bi'
import { AiOutlineHeart } from 'react-icons/ai'


const ServiceList = [
    {
        icon: <AiOutlineHeart />,
        title: 'Wedding',
        description: 'On one of the biggest events of your life, be inspired by the enormous list of gift options and create your wedding registry. As you share with friends and family, witness your dreams become reality with GiftnBlessings.'
    },
    {
        icon: <FaBirthdayCake />,
        title: 'Birthday',
        description: 'Birthdays are more than just cakes and candles. Close your eyes, and make all your wishes, big and small, come true by creating the most ideal gift registry and share with your friends.'
    },
    {
        icon: <BiBuildingHouse />,
        title: 'House Warming',
        description: 'As you celebrate the milestone of owning a place, get rid of the uncountable repetitive gifts by creating and sharing a unique gift registry with us. Decorate your house with warm wishes and the perfect gifts from your guests.'
    }
]


class ServiceThree extends Component {
    render() {
        const { column } = this.props;
        const ServiceContent = ServiceList.slice(0, this.props.item);

        return (
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map((val, i) => (
                        <div className={`${column}`} key={i}>
                            <a href="/service-details">
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
