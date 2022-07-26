import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './Map';
import { FaSearch } from 'react-icons/fa';
import { MdOutlineFilterCenterFocus } from 'react-icons/md';
import { AiOutlineBell, AiOutlineEye } from 'react-icons/ai';
import { TbMap2 } from 'react-icons/tb';
import { BsCloudSun } from 'react-icons/bs';
import { TiLeaf } from 'react-icons/ti';
import ReactTooltip from 'react-tooltip';

const mapStyles = {
  width: '100%',
  height: '100%',
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  render() {
    return (
      <div style={{ position: '' }}>
        <div id="google_map">
          <CurrentLocation
            centerAroundCurrentLocation
            google={this.props.google}
          >
            <Marker onClick={this.onMarkerClick} name={'Current Location'} />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>
          </CurrentLocation>
        </div>

        <div
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            zIndex: '99',
          }}
        >
          <div class="container flex justify-center items-center ">
            <div class="relative">
              <input
                type="text"
                class="h-12 w-80 pr-8 pl-10 rounded-md z-0 focus:shadow-md focus:outline-none"
                placeholder="Search your location here "
              />

              <div class="absolute top-4 left-3">
                <FaSearch />
              </div>
            </div>
          </div>
          <div className="text-white z-50 bg-black bg-opacity-70 w-12 pt-3 mt-3 rounded-md flex flex-col">
            <div className="pl-3 relative hover-trigger">
              <MdOutlineFilterCenterFocus className="cursor-pointer h-6 w-6" />
              <AiOutlineEye className="cursor-pointer h-3 w-3 -mt-[18px] ml-1.5" />
              <div className="absolute bg-blue-500 border border-grey-100 ml-[36px] -mt-5 px-4 rounded-r-md hover-target">
                Macrowatch
              </div>
            </div>
            <div className="pl-3 pt-3 relative hover-trigger">
              <AiOutlineBell className="cursor-pointer h-6 w-6" />
              <div className="absolute bg-blue-500 border border-grey-100 ml-[36px] -mt-5 px-4 rounded-r-md hover-target">
                Notifications
              </div>
            </div>
            <div className="pl-3 pt-3 relative hover-trigger">
              <TbMap2 className="cursor-pointer text-white h-6 w-6" />
              <div className="truncate absolute bg-blue-500 border border-grey-100 ml-[36px] -mt-5 px-4 rounded-r-md hover-target">
                Mark Location
              </div>
            </div>
            <hr className="w-10 ml-1 mt-1" />
            <div className="pl-3 pt-3 relative hover-trigger">
              <BsCloudSun className="cursor-pointer h-6 w-6" />
              <div className="absolute bg-blue-500 border border-grey-100 ml-[36px] -mt-5 px-4 rounded-r-md hover-target">
                Weather
              </div>
            </div>
            <div className="pl-3 pt-3 pb-3 relative hover-trigger">
              <TiLeaf className="cursor-pointer h-6 w-6" />
              <div className="absolute bg-blue-500 border border-grey-100 ml-[36px] -mt-5 px-4 rounded-r-md hover-target">
                Forecast
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC1e8X1sHJXMbd6bJzL9PyKnHHWWQv1lVc',
})(MapContainer);
