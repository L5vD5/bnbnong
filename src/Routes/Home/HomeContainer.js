/* global naver */
import React, { useEffect } from "react";
import HomePresenter from "./HomePresenter";
import { data as dummydata } from "../../ProductData";
import { API, MapAPI } from "../../api";
import { split } from "apollo-boost";


export default class extends React.Component {
   constructor(props) {
    super(props)
    this.state = {
      loading: true,
      getList: null,
      getInfo: null,
      getUserDetail: null,
      getCoord: null,
      error: null,
      address: null,
      x: "",
      y: "",
      roadAddress:"",
      jibunAddress:"",
    };
  }
  async componentDidMount() {  

    try { 
      const { data: getList } = await API.getList(this.props.match.params.id);
      const { data: getInfo } = await API.getInfo(this.props.match.params.id);
      
      this.setState({
        getList: getList,
      });

      this.setState(
        {
          address: getInfo[0].address,
        },
        async() => {
         const data = await API.getCoord(this.state.address)
          this.setState({
            x: data.x,
            y: data.y,
            roadAddress: data.roadAddress,
            jibunAddress: data.jibunAddress,
          },()=>this.initMap());
        }
      );

    } catch (e) {
      this.setState({
        error: "위치 : HomeContainer ",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };



  initMap() {
    console.log("work?")
    var contentString = [
      '<div class="iw_inner" style="padding: 10px;">',
      `<h4>${this.state.roadAddress}</h4>`,
      `<div>> ${this.state.jibunAddress}</div>`,
      '</div>'
    ].join('');

    let map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(this.state.y, this.state.x),
      zoom: 18
    });

    let marker = new naver.maps.Marker({
      map: map,
      position: new naver.maps.LatLng(this.state.y, this.state.x),
    });

    var infowindow = new naver.maps.InfoWindow({
      content: contentString,
      //maxWidth: 140,
      borderColor: "lightgrey",
      borderWidth: 2,
      anchorSize: new naver.maps.Size(20, 20),
      anchorSkew: true,
      pixelOffset: new naver.maps.Point(20, -20),
    });  

    naver.maps.Event.addListener(marker, "click", function (e) {
      if (infowindow.getMap()) {
        infowindow.close();
      } else {
        infowindow.open(map, marker);
      }
    });
  }


  render() {
    const { getList, getInfo, getUserDetail, error, loading ,roadAddress,jibunAddress,x,y } = this.state; 
    return (
      <>
      <HomePresenter
        data={dummydata}
        getList={getList}
        getInfo={getInfo}
        getUserDetail={getUserDetail}
        error={error}
        loading={loading}
        numberWithCommas={this.numberWithCommas}
        getCoord ={this.getCoord} 
      />
      </>
    );
  }
}

// export default (props) => {
//     console.log(props)

//     const datas = async () => {
//       return await API.getList(31);
//     }
//     console.log(datas());
//     const datas2 = async () => {
//         const {data} = await API.getDetail(327);
//         return data
//       }
//     console.log()

//     const {data,loading} = useQuery(getList,{variables:{
//         user_id:36
//     }})
//     console.log(data)
//     return (
//         <HomePresenter data={dummydata}/>
//     )
// }
