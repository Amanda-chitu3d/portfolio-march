import React from 'react'
import TagNav from '../components/TagNav';
import JumbotronBanner from '../components/JumbotronBanner';
// import ProgressImg from '../components/ProgressImg';
import PictureTitle from '../components/PictureTitle';
// import UploadForm from '../components/UploadForm';


function Doc() {
    return (
        <div>
            <TagNav/>
            <JumbotronBanner/>
            <PictureTitle/>
            {/* <UploadForm/> */}
        </div>
    )
}

export default Doc
