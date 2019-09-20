import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { grid } from './utils/animations'
import * as Animations from './utils/defaults'

export const getSize = size => (size || '40px')
export const getColor = color => (color || '#333')

// <CubeGrid/>
// <CubeGrid color="#BADA55"/>
// <CubeGrid size="100px"/>

const CubeGrid = ({ color, size }) => {
    const Spinner = styled.div`
        position: relative;
        margin: 100px auto;
        width: ${getSize(size)};
        height: ${getSize(size)};
    `

    const Cube = styled.div`
        width: 33%;
        height: 33%;
        background-color: ${getColor(color)};
        float: left;
        animation: ${grid} 1.3s infinite ease-in-out;
    `

    const Cube1 = styled(Cube)`animation-delay: 0.2s;`
    const Cube2 = styled(Cube)`animation-delay: 0.3s;`
    const Cube3 = styled(Cube)`animation-delay: 0.4s;`
    const Cube4 = styled(Cube)`animation-delay: 0.1s;`
    const Cube5 = styled(Cube)`animation-delay: 0.2s;`
    const Cube6 = styled(Cube)`animation-delay: 0.3s;`
    const Cube7 = styled(Cube)`animation-delay: 0s;`
    const Cube8 = styled(Cube)`animation-delay: 0.1s;`
    const Cube9 = styled(Cube)`animation-delay: 0.2s;`

    return (
        <Spinner size={size}>
            <Cube1 color={color} />
            <Cube2 color={color} />
            <Cube3 color={color} />
            <Cube4 color={color} />
            <Cube5 color={color} />
            <Cube6 color={color} />
            <Cube7 color={color} />
            <Cube8 color={color} />
            <Cube9 color={color} />
        </Spinner>
    )
}

CubeGrid.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
}

export { CubeGrid }
