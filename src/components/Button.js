import PropTypes from "prop-types";
import React from "react";
function Button({ color, text, onAdd }) {
	return (
		<button onClick={onAdd} style={{ backgroundColor: color }} className="btn">
			{text}
		</button>
	);
}

Button.defaultProps = {
	color: "steelblue",
};

Button.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;
