import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getGalleryActionCreator} from "../../redux/actionCreators/galleryActionCreators";
import './styleGallery.css'
import CustomSpinner from "../../components/custom-spinner/CustomSpinner";
import Empty from "../../components/empty-data/Empty";
import ImgCarousel from "../../components/carousel/ImgCarousel";
import {Button} from "react-bootstrap";

const Gallery = ({boxes, getGallery, loading}) => {

    useEffect(() => {
        getGallery();
    }, [getGallery]);


    if(loading){
        return <CustomSpinner/>
    }
    if(!boxes.length){
        return <Empty />
    }


    return (
        <div>
            <ImgCarousel/>
            <div className="flex-container">
                {
                    boxes.map(({box, id, clazz, donate_url }) => {
                        return (
                            <div className={`image ${clazz}`} key={id}>
                                {box.toUpperCase()}
                                <div className="dws-container">
                                    <div className="dws-button">
                                        <Button className="mt-5" onClick={(e)=> window.location = donate_url} variant="dark">DONATE</Button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    boxes: state.galleryReducer.boxes,
    loading: state.galleryReducer.loading,
});

const mapDispatchToProps = (dispatch) => ({
    getGallery: () => dispatch(getGalleryActionCreator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);

