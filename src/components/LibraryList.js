import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem'

class LibraryList extends Component {

   renderData(library) {
        return <ListItem library={library}/>;
    }
    render() {
        return(
            <FlatList
                data={this.props.libraries}
                renderItem={this.renderData}
                keyExtractor={ (item, index) => index.toString() }
            />
        );
    }
}

const mapStateToProps = state => {
    return { libraries : state.libraries };
}

export default connect(mapStateToProps)(LibraryList);