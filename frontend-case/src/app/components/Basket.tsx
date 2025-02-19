interface BasketProps {
  items: Array<{ id: number; name: string; price: number }>;
  onRemoveItem: (id: number) => void;
}

const Basket: React.FC<BasketProps> = ({ items, onRemoveItem }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Basket</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)}
            <button onClick={() => onRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Basket;
