import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSpaceByFilter } from "../../action/filters";
import { Loading } from '../../common';
import SpaceItem from './SpaceItem';



const m = ({ SpaceAll }) => ({ SpaceAll});


@connect(m, { fetchSpaceByFilter })
export default class SpaceX extends Component {

  constructor(props) {
    super(props);  
  }

  componentDidMount() {
    this.props.fetchSpaceByFilter();
  }

  componentDidUpdate(prevProps){
    if (this.props.year !== prevProps.year || this.props.launch !== prevProps.launch || this.props.land !== prevProps.land) {
        this.props.fetchSpaceByFilter(this.props.year, this.props.launch, this.props.land);
    }
  }


  render() {
    const { SpaceAll: { isFetching, data } } = this.props;

    if(isFetching) {
      return <Loading />
    }

    return(     
      <div className="container">
       
      <div className="space-container">
          {data.map((item, i) => <SpaceItem key={i} {...item} />)}
        </div>
      </div>
    );
  }
};