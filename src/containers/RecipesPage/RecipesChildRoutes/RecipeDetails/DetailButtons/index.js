import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../store/recipe.actions';
import Button from '../../../../../components/Button/Button';
import Row from '../../../../../components/Row/Row';


class DetailButtons extends React.Component {

    onDeleteClick(id) {
        this.props.history.push('/recipes');
        this.props.recipeDelete(id);
    }

    render() {

        const { id } = this.props.match.params;

        return (
            <Row className="child-spacing flex-end" margin>
                <Button href="/shopping-list" primary>To Shopping List</Button>
                <Button href={`/recipes/${id}/edit`}>Edit</Button>
                <Button
                    type="button"
                    onClick={this.onDeleteClick.bind(this, id)}
                    danger
                >
                    Delete
                </Button>
            </Row>
        );
    }
}

export default connect(null, actions)(withRouter(DetailButtons));
