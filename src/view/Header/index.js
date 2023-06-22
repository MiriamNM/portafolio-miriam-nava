import React from "react";
// import { Navigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
// import { profileData } from "../../data/ProfileData";
import logo from "../../assets/logo.png"


const Header = () => {
    // const { slug } = useParams();

    // const profilePost = profileData.find( data => data.slug === slug );

    // const returnToBlog = () => {
    //     navigate('/blog');
    // };

    return (
        <div class="h-15 bg-pink-555 display: flex">
            <div>
                <img src={logo} alt='logo' class='w-1/2'/>
            </div>
            <div class="flex">
                {routes.map( route => {
                    return (
                        <button class="mr-6 flex items-center font-semibold">
                            <NavLink 
                                class="flex text-center sm:justify-center space-x-4" 
                                to={route.to}
                                style={({ isActive}) => ({color: isActive ? 'yellow' : 'white'})}
                            >
                                {route.text}
                            </NavLink>
                        </button>
                    )
                })}
            </div>
        </div> 
    )
};

const routes = [];
routes.push({
    to: '/',
    text: 'About me',
});
routes.push({
    to: '/skills',
    text: 'Skills',
});
routes.push({
    to: '/experience',
    text: 'Experience',
})
routes.push({
    to: '/projects',
    text: 'Projects',
})

export default Header;