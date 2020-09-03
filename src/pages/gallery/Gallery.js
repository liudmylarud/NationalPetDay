import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getGalleryActionCreator} from "../../redux/actionCreators/galleryActionCreators";
import './styleGallery.css'
import CustomSpinner from "../../components/custom-spinner/CustomSpinner";
import Empty from "../../components/empty-data/Empty";

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
            <div className="flex-container">
                {
                    boxes.map(({box, id, clazz}) => {
                        return (
                            <div className={`image ${clazz}`} key={id}>
                                <div>{box.toUpperCase()}</div>
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

