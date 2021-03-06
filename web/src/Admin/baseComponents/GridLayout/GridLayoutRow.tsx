import React from 'react';
import PropTypes from 'prop-types';

import { getUniqueKey } from '../../../utils';
import { getGridItemsStyles, getBaseGridStyles, getGridItems, isValidGrid } from './gridUtils';
import classes from './styles/index.module.scss';
import classNames from 'classnames';

const GridLayoutRow = (
	{
		grid,
		children,
		gapColumn,
		className,
		alignItems,
		gridColumn,
        onClick
	}
	) => {
	const componentClassName = classNames(
		classes.gridLayoutRow,
		className
	);

	const gridItems = getGridItems(grid);

	if (isValidGrid(gridItems, gridColumn)) {
		const gridItemsStyles = getGridItemsStyles(gridItems);

		return (
			<div
                onClick={onClick}
                className={componentClassName}
                style={getBaseGridStyles(gapColumn, gridColumn, alignItems)}
            >
				{children.map((child, index) => {
					const key = getUniqueKey('griditem', index);

					return (
						<div key={key} style={gridItemsStyles[index]}>
							{child}
						</div>
					);
				})}
			</div>
		);
	}

	return (
		<div
            onClick={onClick}
            style={getBaseGridStyles(gapColumn, gridColumn, alignItems)}
        >
			{children.map(child => child)}
		</div>
	);
};

GridLayoutRow.defaultProps = {
	gapColumn: 0,
	gridColumn: 12,
	grid: '',
    onClick: () => {},
	alignItems: 'start',
};

GridLayoutRow.propTypes = {
	grid: PropTypes.string,
	gapColumn: PropTypes.number,
	gridColumn: PropTypes.number,
	className: PropTypes.string,
	alignItems: PropTypes.string,
    onClick: PropTypes.func
};

export { GridLayoutRow };
