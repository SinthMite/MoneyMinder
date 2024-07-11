import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../Redux/Store/Store';
import { setDebitCard, deleteDebitCard } from '../../../Redux/State/debitCardSlice';

export const MoneyInDebit: React.FC = () => {
  const dispatch = useDispatch();
  const debitCards = useSelector((state: RootState) => state.debitCard);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const cardNumber = (form.elements.namedItem('cardNumber') as HTMLInputElement).value;
    const cardHolderName = (form.elements.namedItem('cardHolderName') as HTMLInputElement).value;
    const cardAmount = parseFloat((form.elements.namedItem('amount') as HTMLInputElement).value);

    if (!cardNumber || !cardHolderName || isNaN(cardAmount) || cardAmount <= 0) {
      alert('All fields are required and amount must be greater than zero');
      return;
    }

    const newCard = {
      cardNumber,
      cardHolderName,
      cardAmount
    };

    dispatch(setDebitCard(newCard));
    form.reset();
  };

  const handleDelete = (cardNumber: string) => {
    dispatch(deleteDebitCard(cardNumber));
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Card Number:</label>
          <input type="text" name="cardNumber" required />
        </div>
        <div>
          <label>Card Holder Name:</label>
          <input type="text" name="cardHolderName" required />
        </div>
        <div>
          <label>Amount:</label>
          <input type="number" name="amount" required />
        </div>
        <button type="submit">Add Card</button>
      </form>
      <div>
        {debitCards.length ? (
          debitCards.map((card, index) => (
            <div key={index}>
              <p>Card Number: {card.cardNumber}</p>
              <p>Card Holder: {card.cardHolderName}</p>
              <p>Amount: {card.cardAmount}</p>
              <button onClick={() => handleDelete(card.cardNumber)}>Delete</button>

            </div>
          ))
        ) : (
          <p>No debit cards added yet</p>
        )}
      </div>
    </React.Fragment>
  );
};
