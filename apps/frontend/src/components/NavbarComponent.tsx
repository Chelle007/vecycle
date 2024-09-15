import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { FaCompass, FaPaperPlane, FaUser } from 'react-icons/fa';
import '../stylesheet/NavbarComponent.css';

// Define the icons for the navbar
const icons = [
    { Icon: FaCompass, label: 'Explore', path: '/' },
    { Icon: FaPaperPlane, label: 'Post', path: '/post', isLarge: true },
    { Icon: FaUser, label: 'Profile', path: '/profile' },
];

interface NavbarComponentProps {
    currentPath: string;
}

// React Functional Component for Navbar
const NavbarComponent: React.FC<NavbarComponentProps> = ({ currentPath }) => {
    return (
        <div className="navbar">
            <div className="bottom-nav">
                {icons.map((icon, index) => (
                    <Link
                        key={index}
                        to={icon.path}
                        className={`nav-item ${currentPath === icon.path ? 'active' : ''} ${icon.isLarge ? 'large' : ''}`}
                    >
                        <icon.Icon className="nav-icon" />
                        <p className="nav-label">{icon.label}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default NavbarComponent;
