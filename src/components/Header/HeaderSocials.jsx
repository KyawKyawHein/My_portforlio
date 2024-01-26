import { faGithub, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a
                href="https://github.com/KyawKyawHein"
                target="_blank"
                rel="noreferrer"
            >
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </div>

    )
}

export default HeaderSocials;