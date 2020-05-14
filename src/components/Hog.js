import React from 'react'

export class Hog extends React.Component {
    
    state = {
        isClicked: false
    }

    handleClick = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    }
    
    
    render() {

        let {name, specialty, greased, weight, 'highest medal achieved':medal} = this.props.hog
        let imageName = name.toLowerCase().split(" ").join("_")
        let hiddenInformation = this.state.isClicked ?
            <div>
                <div class="ui cards">
                    <p>Specialty: {specialty}</p>
                    <p>Greased? {greased}</p>
                    <p>Weight: {weight}</p>
                    <p>Highest Medal Achieved: {medal}</p>
                </div>
            </div>

        : null

        return (
            <div>
                <div class="ui fluid card" onClick={this.handleClick}>
                    <div class="image"/>
                        <img src={ require(`../hog-imgs/${imageName}.jpg`) } />
                    <div class="content">
                        <a class="header">{name}</a>
                        <div class="description">
                            {hiddenInformation}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hog
