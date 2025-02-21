import React, { Component } from "react"
import PropTypes from "prop-types"

export default class Execute extends Component {

  static propTypes = {
    specSelectors: PropTypes.object.isRequired,
    specActions: PropTypes.object.isRequired,
    operation: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    onExecute: PropTypes.func,
    hasParameterError: PropTypes.func,
  }

  onClick=()=>{
    let { specSelectors, specActions, operation, path, method } = this.props

    specActions.validateParams( [path, method] )
    if ( specSelectors.validateBeforeExecute([path, method]) ) {
      this.props.hasParameterError(false);
      if(this.props.onExecute) {
        this.props.onExecute()
      }
      specActions.execute( { operation, path, method } )
    } else {
      this.props.hasParameterError(true);
    }
  }

  onChangeProducesWrapper = ( val ) => this.props.specActions.changeProducesValue([this.props.path, this.props.method], val)

  render(){
    return (
      <button className="btn execute opblock-control__btn" onClick={ this.onClick }>
        Executar
      </button>
    )
  }
}
