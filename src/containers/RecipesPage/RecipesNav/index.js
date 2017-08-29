import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/recipe.actions';

import Ul from '../../../components/Ul/Ul';
import ListItemRecipe from '../../../components/ListItem/ListItemRecipe';
import Loading from '../../../components/Loading/index';

class RecipesNav extends Component {

    componentWillMount() {
        this.props.getRecipesFromApi();
    }

    render() {

        const { recipeList } = this.props;

        if (recipeList.list < 1) {
            return <Loading />
        }

        return (
            <Ul>
                { recipeList.map(( recipe, index) => {
                    return (
                        <ListItemRecipe recipe={recipe} index={index} key={index}/>
                    )})
                }
            </Ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        recipeList: state.recipe.list
    };
}

export default connect(mapStateToProps, actions)(RecipesNav)
