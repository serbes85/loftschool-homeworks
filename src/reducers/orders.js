import { CREATE_NEW_ORDER } from '../modules/clients';
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from '../actions/moveOrder';
import { ADD_INGREDIENT } from '../actions/ingredients';

// Реализуйте редьюсер
// Типы экшенов, которые вам нужно обрабатывать уже импортированы
// Обратите внимание на `orders.test.js`.
// Он поможет понять, какие значения должен возвращать редьюсер.

const getPositionNumber = (position, direction) => {
  // console.log(
  //   `conveyor_${Number(position.substr(position.length - 1, 1)) + 1}`
  // );
  if (direction === 'next') {
    return `conveyor_${Number(position.substr(position.length - 1, 1)) + 1}`;
  } else {
    return `conveyor_${Number(position.substr(position.length - 1, 1)) - 1}`;
  }
};

const getNextPosition = ({ position, ingredients, recipe }) => {
  if (position === 'clients') {
    return 'conveyor_1';
  } else if (position !== 'conveyor_4') {
    return getPositionNumber(position, 'next');
  } else if (ingredients.length === recipe.length) {
    return 'finish';
  } else {
    return position;
  }
};

const getBackPosition = ({ position }) => {
  if (position !== 'conveyor_1') {
    return getPositionNumber(position, 'back');
  } else {
    return position;
  }
};

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_NEW_ORDER:
      return [
        ...state,
        {
          position: 'clients',
          ingredients: [],
          id: action.payload.id,
          recipe: action.payload.recipe
        }
      ];

    case MOVE_ORDER_NEXT:
      return state.map(element => {
        if (element.id === action.payload) {
          return {
            ...element,
            position: getNextPosition(element)
          };
        } else {
          return element;
        }
      });
    case MOVE_ORDER_BACK:
      return state.map(element => {
        if (element.id === action.payload) {
          return {
            ...element,
            position: getBackPosition(element)
          };
        } else {
          return element;
        }
      });
    case ADD_INGREDIENT:
      const { from, ingredient } = action.payload;

      return state.map(element => {
        if (
          element.position === from &&
          !element.ingredients.includes(ingredient) &&
          element.recipe.includes(ingredient)
        ) {
          return {
            ...element,
            ingredients: [...element.ingredients, ingredient]
          };
        } else {
          return element;
        }
      });
    default:
      return state;
  }
};

export const getOrdersFor = (state, position) =>
  state.orders.filter(order => order.position === position);
