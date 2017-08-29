import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../store/recipe.actions';

import Ul from '../../../components/Ul/Ul';
import ListItemRecipe from '../../../components/ListItem/ListItemRecipe';
import Loading from '../../../components/Loading/index';

/**
 * Recipes Navigation
 *
 * This component will render a list of recipes.
 * Each recipe is a clickable link to display a recipe detail
 */
class RecipesNav extends React.Component {

    /**
     * Get recipes data from an api
     */
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

RecipesNav.propTypes = {
    recipeList: PropTypes.array,
    getRecipesFromApi: PropTypes.func,
};

RecipesNav.defaultProps = {
    recipeList: [],
};

