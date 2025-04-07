import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

const startId = 8;

export const App = () => {
  const [goodId, setGoodId] = useState(startId);

  return (
    <main className="section container">
      {goodId === -1 ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {goods[goodId]} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setGoodId(-1)}
          />
        </h1>
      )}
      <table className="table">
        <tbody>
          {goods.map((good, index) => (
            <tr
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              data-cy="Good"
              className={
                index === goodId ? 'has-background-success-light' : null
              }
            >
              <td>
                <button
                  data-cy={index === goodId ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={`button ${index === goodId ? 'is-info' : ''}`}
                  onClick={() => {
                    const newGoodId = index === goodId ? -1 : index;

                    setGoodId(newGoodId);
                  }}
                >
                  {index === goodId ? '-' : '+'}
                </button>
              </td>
              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
