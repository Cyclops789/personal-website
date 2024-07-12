import React from 'react'
import tw from 'twin.macro';
import profileImage from '@/assets/images/profile-background.png'
import { getProfileData } from '@/helpers/getProfileData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ProfileImage, FullName, FieldsGroup, Field } from '@/helpers/StyledComponents';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function Profile() {
    const data = getProfileData();

    return (
        data && <>
            <img src={profileImage} css={tw`fixed -top-2 z-10 lg:flex hidden lg:w-[30%]`} alt={"profileImage"} srcSet={profileImage} />
            <div
                css={tw`w-full lg:w-[30%] z-20 bg-cover bg-gradient-to-r from-black/30 to-black flex justify-center lg:justify-start lg:items-center lg:grid`}
            >
                <div
                    css={tw`p-10 gap-y-4`}
                >
                    <ProfileImage
                        src={data.github.avatar_url}
                        alt={"profilePicture"}
                        srcSet={data.github.avatar_url}
                    />

                    <FullName>
                        Hamza Jarane
                    </FullName>

                    <FieldsGroup>
                        <Field
                            href={data.github.html_url}
                            target={'_blank'}
                        >
                            <FontAwesomeIcon icon={faGithub} /> <span>{data.github.login}</span>
                        </Field>

                        {data.general.map((social) => (
                            <Field
                                key={social.name}
                                href={social.link}
                                target={'_blank'}
                            >
                                <FontAwesomeIcon icon={social.icon} /> <span>{social.name}</span>
                            </Field>
                        ))}
                    </FieldsGroup>
                    <button
                        css={tw`bg-black rounded`}
                    >
                        <div
                            css={tw`p-2`}
                        >
                            <FontAwesomeIcon icon={faDownload} /> Resume
                        </div>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Profile;