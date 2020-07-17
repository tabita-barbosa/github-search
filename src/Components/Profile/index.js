import React from 'react';
import IconText from "../IconText/index";
import organizationIcon from '../../Assets/Icons/organization-icon.svg';
import locationIcon from '../../Assets/Icons/location-icon.svg';
import repositorieIcon from '../../Assets/Icons/repositorie-icon.svg';
import followersIcon from '../../Assets/Icons/followers-icon.svg';
import './styles.css';

const Profile = ({
    avatar_url,
    name,
    bio,
    company,
    location,
    public_repos,
    followers,
    following
}) => {
    return (
        <div>
            <div>
                <img src={avatar_url} alt={`${name} user`} />
            </div>
            <div>
                <h2>{name}</h2>
                <p>{bio}</p>
            </div>
            <div className='icon-box'>
                {company && (
                    <IconText
                        icon={organizationIcon}
                        alt='icone de organização'
                        classIcon='icon'
                    > {company}
                    </IconText>
                )}
                {location && (
                    <IconText
                        icon={locationIcon}
                        alt='icone de localicação'
                        classIcon='icon'
                    > {location}
                    </IconText>
                )}
                {public_repos && (
                    <IconText
                        icon={repositorieIcon}
                        alt='icone de repositorios'
                        classIcon='icon'
                    > {public_repos}
                    </IconText>
                )}
                {followers && (
                    <IconText
                        icon={followersIcon}
                        alt='icone de seguidores'
                        classIcon='icon'
                    >{followers}
                    </IconText>
                )}
                {following && (
                    <IconText
                        icon={followersIcon}
                        alt='icone de seguindo'
                        classIcon='icon'
                    > {following}
                    </IconText>
                )}

            </div>
        </div>
    )
}

export default Profile;