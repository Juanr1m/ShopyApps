import React from "react";
import { useOverrides } from "@quarkly/components";
import { Button } from "@quarkly/widgets";
const defaultProps = {
	"disabled": false,
	"background": "--color-light",
	"border-radius": "30px",
	"color": "--darkL2",
	"height": "60px",
	"box-shadow": "--l",
	"margin": "0px 20px 0px 0px",
	"font": "normal 600 16px/1.5 --fontFamily-googleRoboto",
	"padding": "8px 70px 8px 70px",
	"children": "Записаться на тест"
};
const overrides = {};

const DefaultButton = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Button {...rest}>
		{children}
	</Button>;
};

Object.assign(DefaultButton, { ...Button,
	defaultProps,
	overrides
});
export default DefaultButton;