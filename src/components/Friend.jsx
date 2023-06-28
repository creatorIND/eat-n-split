import Button from "./Button";

export default function Friend({ friend, onSelection, selectedFriend }) {
	const isSelected = selectedFriend?.id === friend.id;

	return (
		<li className={isSelected ? "selected" : ""}>
			<img src={friend.image} alt={friend.name} />
			<h3>{friend.name}</h3>
			{(function () {
				if (friend.balance < 0) {
					return (
						<p className="red">
							You owe {friend.name} ${Math.abs(friend.balance)}
						</p>
					);
				} else if (friend.balance > 0) {
					return (
						<p className="green">
							{friend.name} owes you ${Math.abs(friend.balance)}
						</p>
					);
				} else {
					return <p>You and {friend.name} are even</p>;
				}
			})()}
			<Button onClick={() => onSelection(friend)}>
				{isSelected ? "Close" : "Select"}
			</Button>
		</li>
	);
}
