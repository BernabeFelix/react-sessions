import React, { Component } from "react";
import { DataTileStyled } from '../container/App.styled';

class TileErrorBoundary extends Component {
    componentDidCatch(){
        console.log('Im error boundary')
    }

    render(){
        const { children } = this.props
        return (
            <DataTileStyled>
                { children }
            </DataTileStyled>
        )
    }
}

export { TileErrorBoundary };
