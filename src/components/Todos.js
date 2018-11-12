import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPostsIfNeeded } from '../actions/action'

class Todos extends Component {

    componentDidMount() {
        const { selectedSubreddit, fetchPosts } = this.props;
        fetchPosts(selectedSubreddit);
    }
    render() {
        const { posts, isFetching } = this.props
        return (
            <div>
                <button className='btn btn-primary btn-sm' data-toggle="modal" data-target="#AddNewTask">Add New task</button>
                {isFetching && posts.length < 0 &&
                    <h3>No data to be displayed</h3>
                }
                {isFetching && posts.length > 0 &&
                    <h3>Loading</h3>
                }
                {!isFetching && posts.length > 0 &&
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>User ID</th>
                                <th>User Title</th>
                                <th>Completed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map(item =>
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.completed}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                }
            </div>
        )
    }
}

Todos.propTypes = {
    selectedSubreddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    //dispatch: PropTypes.func.isRequired
}

function mapDispatchToProps(dispatch) {
    return {
        fetchPosts: selectedSubreddit => {
            dispatch(fetchPostsIfNeeded(selectedSubreddit));
        }
    };
}
function mapStateToProps(state) {
    const { selectedSubreddit, postsBySubreddit } = state
    const {
    isFetching,
        lastUpdated,
        items: posts
  } = postsBySubreddit[selectedSubreddit] || {
            isFetching: true,
            items: []
        }
    return {
        selectedSubreddit,
        posts,
        isFetching,
        lastUpdated
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)