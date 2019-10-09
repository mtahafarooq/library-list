import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { CardSection }from './common';
import * as actions from '../actions';
import { connect } from 'react-redux';

class ListItem extends Component {
   
    renderDescription() {
        const { library, expand } = this.props
        if (expand){
            return (
                <CardSection>
                    <Text>{library.item.description}</Text>
                </CardSection>
            );
        }
    }
    render() {
        const { id, title } = this.props.library.item;
        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
const mapStateToProps = (state, ownProps ) => {

    const expand = state.selectedLibraryId === ownProps.library.item.id
    return { expand };
}
export default connect(mapStateToProps, actions)(ListItem);