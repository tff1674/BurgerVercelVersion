import React, { Component } from 'react'
import BurgerList from './components/BurgerList';
import HomeHeader from './components/HomeHeader';
import { connect } from 'react-redux';
import { actions as homeActions, getLikes, getPageCountOfLikes } from '../../redux/modules/home'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pos: {}
        }
    }

    getLocation = () =>{
        const geolocation = navigator.geolocation;
        if (geolocation) {
           geolocation.getCurrentPosition((position)=>{
            this.setState({
                pos: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                }
               })
           });
        }
     };

    render() {
        const { pageCount, loadLikes } = this.props
        return (
            <div>
                <HomeHeader />
                <BurgerList pageCount={pageCount} loadLikes={loadLikes}/>
            </div>
        )
    }

    componentDidMount() {
        // object has lat and lng
        this.getLocation();
    }
}

const mapStateToProps = state => {
    return {
        likes: getLikes(state),
        pageCount: getPageCountOfLikes(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadLikes: () => {
            dispatch(homeActions.loadLikes())
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)
