import React from 'react'
import tw from 'twin.macro';

import AboutMe from '@/components/Cards/AboutMe';
import Experience from '@/components/Cards/Experience';
import Work from '@/components/Cards/Work';

function Card() {
    return (
        <div css={tw`w-full p-3 lg:p-0 lg:w-[70%] lg:h-screen lg:overflow-y-auto`}>
            <AboutMe />
            <Experience />
            <Work />
        </div>
    )
}

export default Card;