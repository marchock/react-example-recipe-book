import React, { Component } from 'react';
import { connect } from 'react-redux';

import DetailButtons from './DetailButtons';
import DetailIngredients from './DetailIngredients';

import Row from '../../../../components/Row/Row';
import H1 from '../../../../components/H1/H1';
import P from '../../../../components/P/P';
import Img from '../../../../components/Img/Img';
import FadeIn from '../../../../components/Animations/FadeIn';
import Hr from '../../../../components/Hr/index';


const RowAnimation = Row.extend`
    animation: ${FadeIn} 0.4s forwards;
    margin-top: 70px;
`;

class RecipeDetails extends Component {

    render() {
        if (this.props.recipeList.length <= 0) {
            return <div>Loading...</div>
        }

        const { id } = this.props.match.params;

        const { img, name, description, ingredients } = this.props.recipeList.find(recipe => recipe._id === id);

        return (
            <RowAnimation>
                <Row>
                    <Img src={ img } />
                </Row>
                <Row>
                    <H1>{ name }</H1>
                </Row>
                <Row>
                    <P>{ description }</P>
                </Row>

                <DetailButtons />

                <Hr />

                <DetailIngredients ingredients={ ingredients } />
            </RowAnimation>
        );
    }
}

function mapStateToProps(state) {
  return {
      recipeList: state.recipe.list,
  };
}

export default connect(mapStateToProps)(RecipeDetails);
